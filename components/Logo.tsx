type LogoProps = {
  className?: string;
};

/**
 * Aurora Café brand mark: a small steaming-cup glyph over a bold serif
 * wordmark with a letter-spaced "· CAFÉ ·" subtitle underneath.
 */
export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 text-brand"
      >
        <path d="M9 3.5c-.5.6-.5 1.2 0 1.8M12.5 3.5c-.5.6-.5 1.2 0 1.8" />
        <path d="M5 9h11a2.5 2.5 0 0 1 0 5h-.6" />
        <path d="M5 9v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9" />
      </svg>
      <h1 className="mt-1 font-serif text-[22px] font-semibold uppercase leading-none tracking-wide text-brand">
        Aurora
      </h1>
      <p className="mt-1 text-[9px] font-medium uppercase leading-none tracking-[0.35em] text-brand/70">
        · Café ·
      </p>
    </div>
  );
}
