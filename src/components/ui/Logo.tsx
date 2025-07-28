/**
 * Logo.tsx
 *
 * A lightweight and responsive logo component that conditionally displays
 * different images based on the current theme (light or dark mode).
 *
 * Features:
 * - Uses Tailwind CSS utility classes to toggle visibility between logos.
 * - Optimized with `loading="lazy"` for performance.
 * - Maintains a consistent size and aspect ratio.
 *
 * Best For:
 * - Navbar headers
 * - Footers
 * - Any branding areas that need to adapt to theme changes.
 */

// Stateless functional component that returns the appropriate logo based on current theme
const Logo = () => (
  /**
   * Container for the logo images
   * - `relative`: allows for future enhancements like absolute overlays or icons
   */
  <div className="relative cursor-pointer ml-2">
    {/* 
      Light Mode Logo
      - `block` makes it visible by default
      - `dark:hidden` hides it when dark mode is active
      - `loading="lazy"` defers loading until the image is close to the viewport
    */}
    <img
      loading="lazy"
      width="36"
      height="36"
      src="/images/MA_logo.png"
      alt="Light Logo"
      className="h-7 md:h-9 w-auto block dark:hidden"
    />

    {/* 
      Dark Mode Logo
      - Hidden by default with `hidden`
      - Shown only when dark mode is active using `dark:block`
    */}
    <img
      loading="lazy"
      width="36"
      height="36"
      src="/images/MA_logo_googlyEyes.png"
      alt="Dark Logo"
      className="h-7 md:h-9 w-auto hidden dark:block"
    />
  </div>
);

export default Logo;
