"use client";

import { useEffect, useMemo, useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menu";

type OrderTrackingProps = {
  item: MenuItemType;
  selectedSize: string;
  total: number;
  onDone: () => void;
};

const stages = [
  { key: "received", label: "Received", text: "Order received!", subtext: "We've got your order" },
  { key: "preparing", label: "Preparing", text: "Preparing your order", subtext: "Fresh ingredients, just for you" },
  { key: "cooking", label: "Cooking", text: "Almost there!", subtext: "Cooking to perfection" },
  { key: "ready", label: "Ready", text: "Your order is ready!", subtext: "Enjoy your meal 🎉" },
];

export default function OrderTracking({
  item,
  selectedSize,
  total,
  onDone,
}: OrderTrackingProps) {
  const [progressIndex, setProgressIndex] = useState(0);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const stageDelays = [0, 2000, 8000, 16000];
    const stageTimers = stageDelays.map((delay, index) =>
      window.setTimeout(() => setProgressIndex(index), delay)
    );

    const countdownTimer = window.setInterval(() => {
      setCountdown((current) => {
        if (current <= 0) return 0;
        return current - 1;
      });
    }, 1000);

    return () => {
      stageTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearInterval(countdownTimer);
    };
  }, []);

  const orderNumber = useMemo(() => `#AUR-${Math.floor(1000 + Math.random() * 9000)}`, []);
  const currentStage = stages[Math.min(progressIndex, stages.length - 1)];
  const isReady = currentStage.key === "ready";
  const percent = [25, 50, 75, 100][Math.min(progressIndex, 3)];

  return (
    <div className="aurora-order-screen">
      <header className="relative z-10 px-5 pt-6">
        <div className="mb-5 flex items-center justify-center">
          <button
            type="button"
            onClick={onDone}
            aria-label="Go back to menu"
            className="absolute left-5 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-lg text-white"
          >
            ←
          </button>

          <div className="text-center">
            <span className="text-[28px] font-bold tracking-[-0.05em] text-white">Your Order</span>
            <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.2em] text-white/70">
              {orderNumber}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <span
            className={
              isReady
                ? "aurora-ready-pill aurora-ready-pill--success"
                : "aurora-ready-pill"
            }
          >
            {isReady ? "✓ Ready!" : `Ready in ~${countdown} min`}
          </span>
        </div>
      </header>

      <main className="relative flex flex-1 flex-col px-5 pb-8 pt-4">
        <div className="relative flex flex-1 flex-col items-center justify-start">
          <div className="aurora-plate-wrap">
            <div className={`aurora-plate ${isReady ? "is-ready" : ""}`}>
              <div className="aurora-plate__steam aurora-plate__steam--one" />
              <div className="aurora-plate__steam aurora-plate__steam--two" />
              <div className="aurora-plate__steam aurora-plate__steam--three" />
              <div className="aurora-plate__content" />
              <div className="aurora-plate__rim" />
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-[16px] font-semibold text-[#F5F0EA]">
              1× {item.name} · {selectedSize}
            </p>
          </div>

          <div className="mt-5 text-center">
            <h3 className="text-[34px] font-bold tracking-[-0.05em] text-[#F5F0EA]">
              {currentStage.text}
            </h3>
            <p className="mt-2 text-[15px] text-white/65">{currentStage.subtext}</p>
          </div>
        </div>

        <div className="mt-6 w-full">
          <div className="aurora-progress-steps">
            {stages.map((stage, index) => {
              const isComplete = index < progressIndex;
              const isCurrent = index === progressIndex;

              return (
                <div key={stage.key} className="aurora-progress-step">
                  <div className="aurora-step-dot-wrap">
                    <div
                      className={
                        isComplete
                          ? "aurora-step-dot aurora-step-dot--complete"
                          : isCurrent
                            ? "aurora-step-dot aurora-step-dot--current"
                            : "aurora-step-dot aurora-step-dot--future"
                      }
                    >
                      {isComplete ? "✓" : ""}
                    </div>
                  </div>
                  <span
                    className={
                      isComplete || isCurrent
                        ? "aurora-step-label aurora-step-label--active"
                        : "aurora-step-label"
                    }
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="aurora-ordered-progress">
            <div className="mb-2 flex items-center justify-between text-[12px] font-medium uppercase tracking-[0.1em] text-white/65">
              <span>{currentStage.text}</span>
              <span>{percent}%</span>
            </div>
            <div className="aurora-progress-track">
              <div className="aurora-progress-fill" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>

        {isReady && (
          <div className="mt-7 w-full">
            <button type="button" onClick={onDone} className="aurora-done-button w-full">
              Done
            </button>
          </div>
        )}
      </main>

      {isReady && <div className="aurora-confetti" aria-hidden="true" />}
    </div>
  );
}
