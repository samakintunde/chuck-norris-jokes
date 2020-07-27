import React from "react";

type InputProps = {
  name?: string;
  onChange?: () => void;
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      name={props.name}
      onChange={props.onChange}
      className="py-2 px-4 rounded-sm text-gray-700 w-full"
      type="text"
    />
  );
};

export default Input;
