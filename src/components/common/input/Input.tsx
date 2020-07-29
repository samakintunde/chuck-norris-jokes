import React from "react";
import clsx from "clsx";

type InputProps = {
  className?: string;
  name?: string;
  onChange?: () => void;
};

const Input: React.FC<InputProps> = (props) => {
  const { className, name, onChange } = props;

  const classNames = clsx({
    "py-2 px-4 rounded-sm text-gray-700 w-full": true,
    // @ts-ignore
    [className]: className,
  });

  return (
    <input name={name} onChange={onChange} className={classNames} type="text" />
  );
};

export default Input;
