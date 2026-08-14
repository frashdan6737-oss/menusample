"use client";

import { useMemo, useState } from "react";
import { MenuItem as MenuItemType } from "@/data/menu";

type ItemDetailSheetProps = {
  item: MenuItemType;
  categoryName: string;
  onClose: () => void;
  onAddToOrder: (
    item: MenuItemType,
    size: string,
    toppings: string[],
    total: number
  ) => void;
};

const toppingOptions = [
  "Extra avocado",
  "Chili flakes",
  "Honey drizzle",
  "Sea salt",
  "Nuts",
  "Berries",
];

const sizeOptions = [
  { label: "Small", priceDelta: 0 },
  { label: "Medium", priceDelta: 15 },
  { label: "Large", priceDelta: 25 },
];

function parsePrice(value: string) {
  return Number.parseInt(value.replace(/[^0-9]/g, ""), 10) || 0;
}

export default function ItemDetailSheet({
  item,
  categoryName,
  onClose,
  onAddToOrder,
}: ItemDetailSheetProps) {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [selectedSize, setSelectedSize] = useState("Medium");

  const basePrice = useMemo(() => parsePrice(item.price), [item.price]);
  const selectedSizeDelta =
    sizeOptions.find((option) => option.label === selectedSize)?.priceDelta ?? 0;
  const totalPrice = basePrice + selectedSizeDelta;

  const toggleTopping = (topping: string) => {
    setSelectedToppings((current) =>
      current.includes(topping)
        ? current.filter((value) => value !== topping)
        : [...current, topping]
    );
  };

  return (
    <div className="aurora-sheet-backdrop" onClick={onClose}>
      <div className="aurora-detail-sheet" onClick={(event) => event.stopPropagation()}>
        <div className="aurora-sheet-panel">
          <div className="aurora-sheet-scroll">
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="aurora-hero-image h-[250px] w-full object-cover"
              />

              <div className="absolute inset-x-0 top-0 flex items-center justify-between px-5 pt-5">
                <button
                  type="button"
                  aria-label="Close item details"
                  onClick={onClose}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/10 text-xl font-medium text-white backdrop-blur-sm transition hover:bg-black/20"
                >
                  ‹
                </button>

                <button
                  type="button"
                  aria-label="Toggle favourite"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-black/10 text-lg text-white backdrop-blur-sm transition hover:bg-black/20"
                >
                  ♡
                </button>
              </div>
            </div>

            <div className="px-5 pb-4 pt-5">
              <div className="mb-4 flex items-center gap-2">
                <span className="aurora-chip aurora-chip--filled">★ 4.7</span>
                <span className="aurora-chip aurora-chip--soft">{categoryName}</span>
              </div>

              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-[30px] font-bold leading-none tracking-[-0.04em] text-ink">
                  {item.name}
                </h2>
                <span className="text-[24px] font-bold tracking-tight text-brand">
                  {totalPrice} EGP
                </span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2 text-[13px] font-semibold">
                <span className="aurora-chip aurora-chip--muted">410 kcal</span>
                <span className="aurora-chip aurora-chip--muted">12 min prep</span>
              </div>

              <p className="text-[15px] leading-7 text-ink/60">{item.description}</p>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-ink">Toppings</h3>
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink/35">
                    Optional
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {toppingOptions.map((topping) => {
                    const isSelected = selectedToppings.includes(topping);

                    return (
                      <button
                        key={topping}
                        type="button"
                        onClick={() => toggleTopping(topping)}
                        className={
                          isSelected
                            ? "aurora-toggle aurora-toggle--selected"
                            : "aurora-toggle aurora-toggle--default"
                        }
                      >
                        {topping}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-[17px] font-bold text-ink">Portion Size</h3>
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink/35">
                    Pick one
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {sizeOptions.map((option) => {
                    const isSelected = selectedSize === option.label;

                    return (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setSelectedSize(option.label)}
                        className={
                          isSelected
                            ? "aurora-size-button aurora-size-button--selected"
                            : "aurora-size-button aurora-size-button--default"
                        }
                      >
                        <span className="block text-[15px] font-semibold">
                          {option.label}
                        </span>
                        {option.priceDelta > 0 ? (
                          <span className="mt-1 text-[11px] font-medium">
                            +{option.priceDelta} EGP
                          </span>
                        ) : (
                          <span className="mt-1 text-[11px] font-medium">Base</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 z-20 border-t border-black/[0.06] bg-[#f7f1ec]/95 px-4 pb-[max(18px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-sm">
              <button
                type="button"
                onClick={() => onAddToOrder(item, selectedSize, selectedToppings, totalPrice)}
                className="aurora-order-button w-full"
              >
                Add to Order · {totalPrice} EGP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
