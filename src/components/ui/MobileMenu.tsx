/**
 * MobileMenu.tsx
 *
 * This component renders a dropdown-style navigation menu for mobile devices.
 * It is shown only when `isOpen` is true and hidden on medium and larger screens (md+).
 *
 * Features:
 * - Keyboard accessibility via Escape key to close the menu.
 * - Uses a reusable `NavItem` component for consistency and scalability.
 * - Automatically closes the menu when a navigation item is clicked.
 *
 * Usage:
 * <MobileMenu isOpen={true} setIsOpen={fn} menuItems={["Home", "About"]} />
 */

import React, { useEffect } from "react";
import NavItem from "./NavItem"; // Reusable navigation item component

// Define prop types for the MobileMenu using TypeScript
type MobileMenuProps = {
  isOpen: boolean; // Controls the visibility of the menu
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>; // Function to toggle menu visibility
  menuItems: string[]; // Array of strings used as navigation labels
};

// Functional component for the mobile dropdown menu
const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  setIsOpen,
  menuItems,
}) => {
  /**
   * Adds keyboard support to close the menu when the Escape key is pressed.
   * This improves accessibility and mirrors expected user behavior on modals or overlays.
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false); // Close the menu
      }
    };

    // Add keydown listener when component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup the event listener when component unmounts or dependencies change
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 821px)"); // Tailwind 'md' breakpoint

    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false); // Close the mobile menu when screen is md or larger
      }
    };

    // Initial check in case the menu is open and screen resizes up
    if (mediaQuery.matches) {
      setIsOpen(false);
    }

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, [setIsOpen]);

  // If the menu is not open, return null to avoid rendering the component (performance optimization)
  if (!isOpen) return null;

  return (
    <>
      {/** * Menu container * - Only visible on small screens (`md:hidden`) * -
      Positioned below the fixed navbar (`top-20`) * - Visually styled with
      background, border radius, and shadow * - Uses `role="menu"` to help
      screen readers understand this is a menu */}
      {/* 🔹 Backdrop Overlay */}
      <div
        onClick={() => setIsOpen(false)} // Optional: close when clicking backdrop
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30 md:hidden"
        aria-hidden="true"
      />
      {/* 🔹 Mobile Menu Container */}
      <div
        id="mobile-menu"
        role="menu"
        className="md:hidden fixed top-20 left-5 right-5 z-40 bg-custom-surfaceCards dark:bg-custom-surfaceCardsLight rounded-lg shadow-lg p-4"
      >
        {/* List of navigation items, rendered using the reusable NavItem component */}
        <ul className="flex flex-col gap-4 text-custom-primaryText dark:text-custom-textPrimaryLight text-center">
          {menuItems.map((item, index) => (
            <NavItem
              key={index}
              label={item}
              onClick={() => setIsOpen(false)} // Close menu on item click (expected mobile UX)
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;
