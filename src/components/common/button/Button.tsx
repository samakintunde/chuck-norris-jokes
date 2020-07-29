import React from "react";
import clsx from "clsx";
import { FiLoader } from "react-icons/fi";

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  loading?: boolean;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, className, disabled, icon, loading, type, onClick } = props;

  const classNames = clsx({
    "py-2 px-8 text-white rounded-sm font-semibold transition-colors duration-300": true,
    "bg-brand hover:bg-brand-400": !disabled,
    "opacity-50 cursor-not-allowed": disabled,
    "inline-flex items-center": icon,
    // @ts-ignore
    [className]: className,
  });

  const iconClassNames = clsx({
    "mr-2": children,
  });

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {loading && (
        <span className="spinner">
          <FiLoader />
        </span>
      )}
      {icon && !loading && <span className={iconClassNames}>{icon}</span>}
      {children && <span>{children}</span>}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: true,
  type: "button",
};

export default Button;
