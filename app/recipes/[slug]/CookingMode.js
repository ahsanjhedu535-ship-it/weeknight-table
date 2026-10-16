"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cookingPlan } from "@/lib/cookingGuide";

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function beep() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.frequency.value = 880;
  oscillator.connect(gain);
  gain.connect(context.destination);
  gain.gain.setValueAtTime(0.04, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.35);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.35);
  oscillator.onended = () => context.close();
}

export default function CookingMode({ recipe, notes }) {
  const plan = cookingPlan(recipe, notes);
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState("check");
  const [checked, setChecked] = useState({});
  const [stepIndex, setStepIndex] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  const alerted = useRef(false);
  const step = plan.steps[stepIndex];
  const needed = plan.ingredients.filter((item) => item.role === "needed");
  const skippable = plan.ingredients.filter((item) => item.role === "skippable");
  const missingNeeded = needed.filter((item) => !checked[item.line]).length;

  function armStep(index) {
    const next = plan.steps[index];
    alerted.current = false;
    setStepIndex(index);
    setAlertOn(false);
    setRemaining(next.timer ? next.timer.seconds : 0);
    setRunning(Boolean(next.timer));
  }

  function openGuide() {
    setOpen(true);
    setPhase("check");
    if (typeof Notification !== "undefined" && Notification.permission === "default") {
      Notification.requestPermission().catch(() => {});
    }
    window.requestAnimationFrame(() => {
      document.getElementById("cooking-mode")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  useEffect(() => {
    if (phase !== "cook") return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  useEffect(() => {
    if (!running) return undefined;
    const id = setInterval(() => {
      setRemaining((value) => (value <= 1 ? 0 : value - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (!running || remaining !== 0 || !step.timer || alerted.current) return;
    alerted.current = true;
    setRunning(false);
    setAlertOn(true);
    beep();
    if (typeof Notification !== "undefined" && Notification.permission === "granted") {
      const message = step.timer.needsTemperature
        ? "The time in this step is up. Check the temperature before the next step."
        : "Time for the next step.";
      new Notification(recipe.title, { body: message });
    }
  }, [remaining, running, recipe.title, step]);

  function finishCooking() {
    setRunning(false);
    setAlertOn(false);
    setPhase("check");
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById("reader-reviews")?.scrollIntoView({ behavior: "smooth", block: "start" });
      const started = Date.now();
      const openForm = () => {
        const button = [...document.querySelectorAll("#reader-reviews button, #reader-reviews a")].find((el) =>
          /write a review/i.test(el.textContent || "")
        );
        if (button) {
          button.click();
          window.setTimeout(() => {
            const field = document.querySelector("#reader-reviews textarea, #reader-reviews input");
            field?.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 300);
          return;
        }
        if (Date.now() - started < 5000) window.setTimeout(openForm, 250);
      };
      openForm();
    }, 50);
  }

  const cookPopup =
    phase === "cook" && typeof document !== "undefined"
      ? createPortal(
          <div className="cook-popup" role="dialog" aria-modal="true" aria-labelledby="cook-popup-title">
            <div className="cook-popup-inner">
              <div className="cooking-mode-head">
                <div>
                  <div className="eyebrow">Step {stepIndex + 1} of {plan.steps.length}</div>
                  <h2 id="cook-popup-title">{recipe.title}</h2>
                </div>
                <button
                  type="button"
                  className="cook-text"
                  onClick={() => {
                    setRunning(false);
                    setPhase("check");
                  }}
                >
                  Back to checklist
                </button>
              </div>
              <p className="cook-step">{step.text}</p>
              {step.timer ? (
                <>
                  <p className="cook-timer" aria-live="polite">
                    {formatTime(remaining)}
                  </p>
                  <p className="cook-timer-note">
                    Counting the {step.timer.label} written in this step.
                    {step.timer.needsTemperature
                      ? " When it ends, check the temperature in the step. The timer alone does not mean the food is done."
                      : ""}
                  </p>
                  <div className="cook-actions">
                    <button
                      type="button"
                      className="button-primary cook-button"
                      onClick={() => {
                        if (remaining === 0 && step.timer) {
                          alerted.current = false;
                          setAlertOn(false);
                          setRemaining(step.timer.seconds);
                          setRunning(true);
                          return;
                        }
                        setRunning((value) => !value);
                      }}
                    >
                      {running ? "Pause timer" : remaining === 0 ? "Restart timer" : "Resume timer"}
                    </button>
                  </div>
                </>
              ) : (
                <p className="cook-timer-note">This step has no time written. Continue when that action is done.</p>
              )}
              {alertOn && (
                <div className="cook-alert" role="alert">
                  <strong>
                    {step.timer?.needsTemperature
                      ? "The time in this step is up. Check the temperature before you move on."
                      : "Time for the next step."}
                  </strong>
                </div>
              )}
              <div className="cook-actions">
                <button
                  type="button"
                  className="cook-text"
                  disabled={stepIndex === 0}
                  onClick={() => armStep(stepIndex - 1)}
                >
                  Previous step
                </button>
                {stepIndex < plan.steps.length - 1 ? (
                  <button type="button" className="button-primary cook-button" onClick={() => armStep(stepIndex + 1)}>
                    Next step
                  </button>
                ) : (
                  <button type="button" className="button-primary cook-button" onClick={finishCooking}>
                    Finished — write a review
                  </button>
                )}
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  if (!open) {
    return (
      <p className="cook-launch">
        <button type="button" id="start-cooking" className="button-primary cook-button" onClick={openGuide}>
          Start cooking
        </button>
      </p>
    );
  }

  return (
    <section className="cooking-mode" id="cooking-mode">
      {cookPopup}
      <div className="cooking-mode-head">
        <div>
          <div className="eyebrow">Cooking guide</div>
          <h2>{recipe.title}</h2>
        </div>
        <button type="button" className="cook-text" onClick={() => setOpen(false)}>
          Close
        </button>
      </div>

      {phase === "check" ? (
        <>
          <p>
            Check off what you have. Timers later use only the times already
            written in the method. A garnish marked skippable is not a
            substitute for a main ingredient.
          </p>
          <h3>Have these ready</h3>
          <ul className="ingredient-list">
            {needed.map((item) => (
              <li key={item.line}>
                <input
                  type="checkbox"
                  checked={!!checked[item.line]}
                  onChange={(event) =>
                    setChecked((current) => ({ ...current, [item.line]: event.target.checked }))
                  }
                  aria-label={`I have ${item.line}`}
                />
                <span>{item.line}</span>
              </li>
            ))}
          </ul>
          {skippable.length > 0 && (
            <>
              <h3>Skip these if you do not have them</h3>
              <p>These are seasonings, garnishes, or lines the recipe already marks optional.</p>
              <ul className="ingredient-list">
                {skippable.map((item) => (
                  <li key={item.line}>
                    <input
                      type="checkbox"
                      checked={!!checked[item.line]}
                      onChange={(event) =>
                        setChecked((current) => ({ ...current, [item.line]: event.target.checked }))
                      }
                      aria-label={`I have ${item.line}`}
                    />
                    <span>{item.line}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {(plan.swaps.length > 0 || plan.serveWith) && (
            <>
              <h3>Optional, without changing the dish</h3>
              {plan.serveWith && <p>{plan.serveWith}</p>}
              {plan.swaps.length > 0 && (
                <>
                  <p>Swaps already written for this recipe:</p>
                  <ul>
                    {plan.swaps.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
          <div className="cook-actions">
            <button
              type="button"
              className="button-primary cook-button"
              disabled={missingNeeded > 0}
              onClick={() => {
                setPhase("cook");
                armStep(0);
              }}
            >
              {missingNeeded > 0 ? `${missingNeeded} ingredients still unchecked` : "Begin the steps"}
            </button>
            {missingNeeded > 0 && (
              <button
                type="button"
                className="cook-text"
                onClick={() => {
                  setPhase("cook");
                  armStep(0);
                }}
              >
                Start anyway
              </button>
            )}
          </div>
        </>
      ) : null}
    </section>
  );
}
