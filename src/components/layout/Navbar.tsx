// Importing necessary dependencies and components
import { useState } from "react"; // React Hook for managing component state
import { Sun, Moon } from "lucide-react"; // Lucide icons used for UI representation
import { useTheme } from "../../hooks/useTheme"; // Custom hook for handling light/dark mode toggle
import MobileMenu from "../ui/MobileMenu"; // Separate mobile dropdown menu component for cleaner separation of concerns
import NavItem from "../../components/ui/NavItem"; // Adjust path as needed
import BurgerMenuButton from "../../components/ui/BurgerMenuButton";

import Logo from "../ui/Logo";
// Define Navbar component using React.FC (functional component typing for TypeScript)
const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme(); // Destructure the current theme and toggle function from custom theme hook
  const [isOpen, setIsOpen] = useState(false); // Manage the open/closed state of the mobile menu

  // List of navigation items shown in both desktop and mobile views
  const menuItems = ["Home", "Services", "About", "Projects", "Contact"];

  return (
    <>
      {/* Desktop Navbar - Hidden on smaller screens (responsive via Tailwind `md:flex`) */}
      <nav
        className="hidden md:flex fixed top-5 left-5 right-5 z-50 h-16 bg-custom-surfaceCards dark:bg-custom-surfaceCardsLight rounded-[10px] items-center justify-between px-6 shadow-md"
        role="navigation"
        aria-label="Primary"
      >
        {/* Brand Logo Section for large screen*/}
        <Logo />
        {/* Navigation Links for Large Screen*/}
        <ul
          className="flex space-x-6"
          role="list"
        >
          {menuItems.map((item, index) => (
            <NavItem key={index} label={item} />
          ))}
        </ul>

        {/* Theme Toggle Button (Sun for light mode, Moon for dark mode) */}
        <button onClick={toggleTheme} className="secondary-button--hover-transition">
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </nav>

      {/* Mobile Topbar - Only shown on smaller screens (using `md:hidden`) */}
      <div className="flex md:hidden fixed top-5 left-5 right-5 z-50 h-12 bg-custom-surfaceCards dark:bg-slate-100 rounded-[10px] items-center justify-between px-6 shadow-md">
        {/* Brand Logo for mobile */}
        <Logo />
        
        {/* Theme toggle and hamburger menu button */}
        <div className="flex items-center space-x-4">
          {/* Theme toggle for mobile */}
          <button onClick={toggleTheme} className="secondary-button--hover-transition">
            {theme === "dark" ? <Moon /> : <Sun />}
          </button>

          {/* Hamburger menu button - toggles mobile dropdown menu */}
          <BurgerMenuButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>

      </div>
      {/* Mobile Menu Dropdown - Controlled by `isOpen` state */}
      <MobileMenu
        isOpen={isOpen} // Whether the mobile menu is visible
        setIsOpen={setIsOpen} // Pass setter to allow closing from inside the component
        menuItems={menuItems} // Provide the same nav items as desktop
      />
    </>
  );
};

export default Navbar;
