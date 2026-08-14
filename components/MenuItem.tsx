import { MenuItem as MenuItemType } from "@/data/menu";

type MenuItemProps = {
  item: MenuItemType;
  onClick?: () => void;
};

/**
 * Single menu item row: name, full description, and price stacked on the
 * left; a tall portrait image placeholder on the right. No borders or
 * shadows on the row itself — separation comes from the divider between rows.
 */
export default function MenuItem({ item, onClick }: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="menu-item-button flex w-full items-start justify-between gap-5 py-8 text-left transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="min-w-0 flex-1">
        <h3 className="text-[19px] font-bold tracking-tight text-ink">
          {item.name}
        </h3>
        <p className="mt-3 max-w-[26ch] text-[15px] leading-relaxed text-ink/45">
          {item.description}
        </p>
        <p className="mt-6 text-[19px] font-bold text-brand">{item.price}</p>
      </div>

      {item.image ? (
        <div className="relative aspect-[3/5] w-28 shrink-0 overflow-hidden rounded-[22px] sm:w-32">
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          role="img"
          aria-label={`${item.name} image placeholder`}
          className="flex aspect-[3/5] w-28 shrink-0 items-center justify-center rounded-[22px] bg-black/[0.035] text-black/15 sm:w-32"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9" fill="currentColor">
            <circle cx="8" cy="7" r="2" />
            <path d="M2 19l6-7 4 4 4-5 6 8H2Z" />
          </svg>
        </div>
      )}
    </button>
  );
}
