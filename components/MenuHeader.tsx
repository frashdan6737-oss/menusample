"use client";

import Logo from "./Logo";

/**
 * Top navigation bar: outlined circular back button, centered Aurora Café
 * wordmark, and a bare grid icon on the right — with a hairline divider
 * closing off the header, matching the reference exactly.
 */
export default function MenuHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-black/[0.06] bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4 md:px-8 lg:px-10">
        <Logo />
      </div>
    </header>
  );
}
