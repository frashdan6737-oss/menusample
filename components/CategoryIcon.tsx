type CategoryIconProps = {
  icon: string;
  className?: string;
};

/**
 * Line-icon set matching each menu category: croissant, burger, serving
 * cloche, and a slice of cake.
 */
export default function CategoryIcon({ icon, className = "h-5 w-5" }: CategoryIconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
  };

  switch (icon) {
    case "breakfast":
      // Croissant
      return (
        <svg {...common}>
          <path d="M4 15.5C6 8 12 4 19 4.5c1.2 3.5-.2 7-3.2 9.4 1-.2 2-.1 2.9.4-.4 1.2-1.3 2.1-2.5 2.5-4.5 1.7-9 1.9-12.2-1.3Z" />
          <path d="M8 12c1-1.4 2.4-2.4 4-3M10 14.8c1.1-1.3 2.6-2.2 4.2-2.6" />
        </svg>
      );
    case "lunch":
      // Burger
      return (
        <svg {...common}>
          <path d="M4 10.5c0-3 3.6-5.5 8-5.5s8 2.5 8 5.5" />
          <path d="M3.5 10.5h17a1 1 0 0 1 1 1.2c-.3 1.2-1.4 2-2.6 2H5.1c-1.2 0-2.3-.8-2.6-2a1 1 0 0 1 1-1.2Z" />
          <path d="M4.5 15.5h15" />
          <path d="M5 18h14a1.5 1.5 0 0 1 0 2H5a1.5 1.5 0 0 1 0-2Z" />
        </svg>
      );
    case "dinner":
      // Serving cloche
      return (
        <svg {...common}>
          <path d="M4 16a8 8 0 0 1 16 0" />
          <path d="M3 16h18" />
          <path d="M3 19h18" />
          <path d="M12 6.5V4" />
          <circle cx="12" cy="3.2" r="0.9" />
        </svg>
      );
    case "desserts":
      // Cake slice
      return (
        <svg {...common}>
          <path d="M3 20 12 6l9 14Z" />
          <path d="M3 20h18" />
          <path d="M6.7 15h10.6M8.6 12h6.8" />
          <circle cx="12" cy="4" r="0.9" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
