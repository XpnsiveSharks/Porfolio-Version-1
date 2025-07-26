import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import ThemeButton from "../../components/ui/ThemeButton"
const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="h-15 bg-custom-surfaceCards flex items-center justify-between px-6 m-5 dark:bg-slate-100">
      {/* Logo + Name */}
      <div className="flex items-center">
        <img
          src="src/assets/images/MA_logo.png"
          alt="Marynelle's pixilated avatar"
          className="h-7 w-auto"
        />
        <p className="hidden sm:block ml-1 text-custom-mutedText font-black font-bebasNeue text-[20px]">
          MARYNELLE
        </p>
      </div>

      {/* Navigation Menu */}
      <div className="">
        <ul className="flex space-x-6 text-custom-primaryText font-medium text-[16px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Services</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Projects</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div>
        <ThemeButton onClick={toggleTheme}>
            {theme === "dark" ? <Moon /> : <Sun />}
        </ThemeButton>
      </div>
    </nav>
  );
};

export default Navbar;
