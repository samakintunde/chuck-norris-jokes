import React from "react";

const Chip: React.FC = (props) => {
  return (
    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-brand-200 text-brand-800">
      {props.children}
    </span>
  );
};

export default Chip;
