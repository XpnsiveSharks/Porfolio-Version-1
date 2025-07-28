/**
 * NavItem.tsx
 *
 * A reusable navigation list item component used in both desktop and mobile navigation.
 * 
 * Features:
 * - Handles optional `onClick` for interactivity (e.g., closing mobile menu or routing).
 * - Applies consistent styling across nav menus.
 * - Supports dark mode and hover feedback using Tailwind CSS.
 *
 * Usage:
 * <NavItem label="Home" onClick={handleNavigation} />
 */

import React from "react";

// Define the expected props for the NavItem component
type NavItemProps = {
  label: string; // Text content for the navigation item
  onClick?: () => void; // Optional click handler (e.g., to close menu or route to a page)
};

// Functional component declaration
const NavItem: React.FC<NavItemProps> = ({ label, onClick }) => {
  return (
    /**
     * Navigation item container
     * - `cursor-pointer`: indicates it's interactive
     * - `px-4 py-2`: padding for click area
     * - `rounded`: slightly rounded corners
     * - `hover:bg-custom-accentHover`: background feedback on hover
     * - `hover:text-custom-textPrimaryLight`: light text on hover (light mode)
     * - `dark:hover:text-custom-primaryText`: dark text on hover (dark mode)
     * - `transition-colors`: smooth color transitions
     */
    <li
      onClick={onClick} // Trigger provided function when clicked (optional)
      className="font-nunito text-size__bodytext px-4 py-2 rounded-[25px] secondary-button--hover-transition"
      role="menuitem" // Improves accessibility when used inside <ul role="menu">
      tabIndex={0} // Makes the item keyboard-navigable
      onKeyDown={(e) => {
        // Add basic keyboard accessibility (Enter or Space triggers click)
        if ((e.key === 'Enter' || e.key === ' ') && onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {label}
    </li>
  );
};

export default NavItem;
