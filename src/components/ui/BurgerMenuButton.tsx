import { Menu, X } from "lucide-react";

interface BurgerMenuButtonProps {
  isOpen: boolean;
  toggle: () => void;
}

const BurgerMenuButton: React.FC<BurgerMenuButtonProps> = ({
  isOpen,
  toggle,
}) => {
  return (
    <button
      onClick={toggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-menu"
      className="p-1 rounded-md custom-button-hover-transition"
    >
      {isOpen ? <X /> : <Menu />}
    </button>
  );
};

export default BurgerMenuButton;
