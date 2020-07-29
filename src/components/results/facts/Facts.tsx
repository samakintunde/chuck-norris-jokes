import React from "react";
import Fact, { IFact } from "../fact/Fact";
import { useTranslation } from "react-i18next";

type FactsProps = {
  facts: IFact[];
};

const Facts: React.FC<FactsProps> = (props) => {
  const { t } = useTranslation();

  return (
    <section>
      {props.facts.length > 0 && (
        <div className="flex justify-between pb-8">
          <p className="font-bold" data-cy="results-title">
            {t("search.headings.result", { count: props.facts.length })}
          </p>
          <small data-cy="facts-title">
            {t("search.headings.fact", { count: props.facts.length })}
          </small>
        </div>
      )}
      <ul data-cy="facts" dir="ltr">
        {props.facts.map((result, index) => (
          <li
            data-cy="fact"
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
