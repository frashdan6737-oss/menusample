"use client";

import { MenuCategory } from "@/data/menu";
import CategoryIcon from "./CategoryIcon";

type CategoryNavigationProps = {
  categories: MenuCategory[];
  activeCategoryId: string;
  onSelectCategory: (id: string) => void;
};

/**
 * Vertical category rail, left-aligned with a hairline divider separating it
 * from the item list. Rounded-square icon tiles: soft peach fill for the
 * active category, flat light-gray tiles for the rest.
 */
export default function CategoryNavigation({
  categories,
  activeCategoryId,
  onSelectCategory,
}: CategoryNavigationProps) {
  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-[89px] flex h-fit w-24 shrink-0 flex-col gap-6 border-r border-black/[0.06] py-6 pr-3 sm:w-28"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategoryId;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onSelectCategory(category.id)}
            aria-pressed={isActive}
            className="flex w-full shrink-0 flex-col items-center gap-2"
          >
            <span
              className={`flex h-[72px] w-[72px] items-center justify-center rounded-[22px] transition-all duration-200 sm:h-20 sm:w-20 ${
                isActive
                  ? "bg-brand-light text-brand-active"
                  : "bg-black/[0.045] text-ink"
              }`}
            >
              <CategoryIcon icon={category.icon} className="h-7 w-7 sm:h-8 sm:w-8" />
            </span>
            <span
              className={`text-[13px] font-semibold transition-colors ${
                isActive ? "text-brand-active" : "text-ink/45"
              }`}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
