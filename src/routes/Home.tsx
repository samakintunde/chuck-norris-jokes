import React, { useState } from "react";
import LinkCard from "../components/common/link-card";
import SearchForm from "../components/home/search-form";
import { IFact } from "../components/results/fact/Fact";
import factsService from "../services";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const [results, setResults] = useState<IFact[]>([]);
  const history = useHistory();

  const handleSearchFormSubmit = async (event: React.FormEvent) => {
    // @ts-ignore
    const query = event.target["query"].value;
    // @ts-ignore
    // const category = event.target["category"].value;
    // @ts-ignore
    event.target.reset();

    const factsResults = await factsService.fetchRandomWithText(query);

    // @ts-ignore
    setResults(factsResults);

    return history.push("/search", {
      results: factsResults,
    });
  };

  return (
    <main className="h-full flex flex-col items-center justify-center text-center">
      <div className="w-full">
        <div>
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Chuck Norris Facts Finder
            </h1>
          </div>
          <SearchForm handleSubmit={handleSearchFormSubmit} />
        </div>
        <div
          className="py-10 flex flex-col md:flex-row justify-around items-center"
          data-cy="search-actions"
        >
          <LinkCard to="/search">Search by Category</LinkCard>
          <p className="text-brand-300 text-xl m-4">or</p>
          <LinkCard
            to={{
              pathname: "/search",
              state: {
                random: true,
              },
            }}
          >
            I'm feeling lucky
          </LinkCard>
        </div>
      </div>
    </main>
  );
};

export default Home;
