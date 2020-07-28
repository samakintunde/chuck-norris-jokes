import React from "react";
import Fact, { IFact } from "../fact/Fact";

type FactsProps = {
  facts: IFact[];
};

const Facts: React.FC<FactsProps> = (props) => {
  return (
    <section>
      {props.facts.length > 0 && (
        <div className="flex justify-between pb-8">
          <p className="font-bold">Result(s)</p>
          <small>
            <span className="font-bold">{props.facts.length}</span> facts
          </small>
        </div>
      )}
      <ul>
        {props.facts.map((result, index) => (
          <li
            className={index > 0 ? "py-4 border-brand-800 border-t" : "pb-4"}
            key={result.id}
          >
            <Fact fact={result} key={result.id} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Facts;
