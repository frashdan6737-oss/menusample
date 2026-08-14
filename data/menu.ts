export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  /** Icon key used to pick the matching icon in <CategoryIcon /> */
  icon: string;
  items: MenuItem[];
};

export const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    icon: "breakfast",
    items: [
      {
        id: "b1",
        name: "Avocado Toast",
        description:
          "Sourdough bread, avocado, cherry tomatoes, olive oil and chili flakes.",
        price: "225 EGP",
        image: "/images/breakfast-avocado-toast.jpg",
      },
      {
        id: "b2",
        name: "Protein Pancakes",
        description: "Fluffy pancakes with protein, banana, honey and almonds.",
        price: "275 EGP",
        image: "/images/breakfast-protein-pancakes.jpg",
      },
      {
        id: "b3",
        name: "Greek Yogurt Bowl",
        description: "Greek yogurt, granola, mixed berries and honey.",
        price: "200 EGP",
        image: "/images/breakfast-greek-yogurt-bowl.jpg",
      },
    ],
  },
  {
    id: "lunch",
    name: "Lunch",
    icon: "lunch",
    items: [
      {
        id: "l1",
        name: "Chicken Caesar Wrap",
        description: "Grilled chicken, romaine lettuce, parmesan cheese, and creamy Caesar dressing in a spinach wrap.",
        price: "425 EGP",
        image: "/images/lunch-caesar-wrap.jpg",
      },
      {
        id: "l2",
        name: "Margherita Pizza",
        description: "Classic pizza with fresh mozzarella, tomatoes, basil, and a drizzle of olive oil.",
        price: "600 EGP",
        image: "/images/lunch-margherita-pizza.jpg",
      }
    ],
  },
  {
    id: "dinner",
    name: "Dinner",
    icon: "dinner",
    items: [
      {
        id: "d1",
        name: "Grilled Salmon",
        description: "Freshly grilled salmon served with asparagus and lemon butter sauce.",
        price: "925 EGP",
        image: "/images/dinner-grilled-salmon.jpg",
      },
      {
        id: "d2",
        name: "Truffle Mushroom Pasta",
        description: "Fettuccine pasta in a rich truffle cream sauce with roasted wild mushrooms.",
        price: "800 EGP",
        image: "/images/dinner-truffle-pasta.jpg",
      }
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    icon: "desserts",
    items: [
      {
        id: "ds1",
        name: "Classic Tiramisu",
        description: "Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.",
        price: "325 EGP",
        image: "/images/dessert-tiramisu.jpg",
      },
      {
        id: "ds2",
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a gooey molten center, served with vanilla bean ice cream.",
        price: "350 EGP",
        image: "/images/dessert-lava-cake.jpg",
      }
    ],
  }
];
