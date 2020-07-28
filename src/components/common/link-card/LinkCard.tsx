import React from "react";
import { Link } from "react-router-dom";

type LinkCardProps = {
  to: string | Object;
};

const LinkCard: React.FC<LinkCardProps> = (props) => {
  const { children, to } = props;

  return (
    <Link to={to}>
      <div className="rounded-sm border border-brand-600 min-h-10 px-8 md:px-12 py-4 md:py-6 hover:bg-brand-800">
        <p className="text">{children}</p>
      </div>
    </Link>
  );
};

export default LinkCard;
