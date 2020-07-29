import React from "react";
import Chip from "../chip";
import clsx from "clsx";

export interface IFact {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

type FactProps = {
  fact: IFact;
};

const Fact: React.FC<FactProps> = (props) => {
  const { categories, icon_url, value } = props.fact;

  const imageClassNames = clsx({
    "h-16 w-16 mr-4": true,
  });

  return (
    <article>
      <div className="flex">
        <img
          className={imageClassNames}
          src={icon_url}
          alt="Chuck Norris Icon"
        />

        <div className="flex flex-col">
          <p>
            {categories.map((category, index) => (
              <span
                data-cy="category"
                className={index === 1 ? "ml-2" : ""}
                key={category}
              >
                <Chip>{category}</Chip>
              </span>
            ))}
          </p>
          <p className="text-brand-100">{value}</p>
        </div>
      </div>
    </article>
  );
};

export default Fact;
