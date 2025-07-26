import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const ThemeButton: React.FC<ButtonProps> = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-2 py-2 rounded-full bg-accent text-custom-primaryText dark:text-slate-950 hover:bg-custom-accent transition ${className}`}
    >
      {children}
    </button>
  );
};

export default ThemeButton;

