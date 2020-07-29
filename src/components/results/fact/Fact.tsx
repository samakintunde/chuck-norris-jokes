import React from "react";
import Chip from "../chip";

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
  const { categories, icon_url, url, value } = props.fact;

  return (
    <article>
      <div className="flex">
        <img
          className="h-16 w-16 mr-4"
          src={icon_url}
          alt="Chuck Norris Icon"
        />

        <div className="flex flex-col">
          <p>
            {categories.map((category, index) => (
              <span className={index === 1 ? "ml-2" : ""} key={category}>
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
