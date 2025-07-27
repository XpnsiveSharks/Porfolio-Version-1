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
      className={`p-1 md:p-2 rounded-full bg-accent custom-button-hover-transition ${className}`}
    >
      {children}
    </button>
  );
};

export default ThemeButton;

