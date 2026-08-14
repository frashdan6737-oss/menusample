"use client";

import { useMemo, useState } from "react";
import { MenuCategory, MenuItem as MenuItemType } from "@/data/menu";
import MenuHeader from "./MenuHeader";
import CategoryNavigation from "./CategoryNavigation";
import MenuItemCard from "./MenuItem";
import ItemDetailSheet from "./ItemDetailSheet";
import OrderTracking from "./OrderTracking";

type MenuProps = {
  categories: MenuCategory[];
};

export default function Menu({ categories }: MenuProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id);
  const [selectedItem, setSelectedItem] = useState<MenuItemType | null>(null);
  const [trackingOrder, setTrackingOrder] = useState<{
    item: MenuItemType;
    selectedSize: string;
    total: number;
  } | null>(null);

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === activeCategoryId) ?? categories[0],
    [categories, activeCategoryId]
  );

  const handleAddToOrder = (
    item: MenuItemType,
    selectedSize: string,
    _toppings: string[],
    total: number
  ) => {
    setSelectedItem(null);
    setTrackingOrder({ item, selectedSize, total });
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="mx-auto max-w-6xl">
        <MenuHeader />

        <main className="flex flex-row gap-4 px-4 sm:gap-6 md:gap-10 md:px-8 lg:px-10">
          <CategoryNavigation
            categories={categories}
            activeCategoryId={activeCategory.id}
            onSelectCategory={setActiveCategoryId}
          />

          <section
            key={activeCategory.id}
            className="menu-fade-in min-w-0 flex-1 divide-y divide-black/[0.06] pb-16"
          >
            {activeCategory.items.length > 0 ? (
              activeCategory.items.map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))
            ) : (
              <p className="py-16 text-center text-sm text-ink/40">
                New {activeCategory.name.toLowerCase()} items coming soon.
              </p>
            )}
          </section>
        </main>
      </div>

      {selectedItem && (
        <ItemDetailSheet
          item={selectedItem}
          categoryName={activeCategory.name}
          onClose={() => setSelectedItem(null)}
          onAddToOrder={handleAddToOrder}
        />
      )}

      {trackingOrder && (
        <OrderTracking
          item={trackingOrder.item}
          selectedSize={trackingOrder.selectedSize}
          total={trackingOrder.total}
          onDone={() => setTrackingOrder(null)}
        />
      )}
    </div>
  );
}
