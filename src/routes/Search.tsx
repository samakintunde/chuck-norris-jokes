import React, { useEffect, useState } from "react";
import NavSearchForm from "../components/results/nav-search-form";
import Facts from "../components/results/facts";
import factsService from "../services";
import { IFact } from "../components/results/fact/Fact";
import { useLocation } from "react-router-dom";
import { isObject, fetchFacts } from "../utils";
import { debounce } from "../utils/debounce";
import tinykeys from "tinykeys";

const Search = () => {
  const location = useLocation();
  const [categories, setCategories] = useState(["all"]);
  const [results, setResults] = useState<IFact[]>(
    // @ts-ignore
    location.state?.results || []
  );
  const [searched, setSearched] = useState(false);

  const handleSearchFormSubmit = async (event: React.FormEvent) => {
    setSearched(true);
    // @ts-ignore
    const query = event.target["query"].value;
    // @ts-ignore
    const category = event.target["category"].value;
    // @ts-ignore
    event.target.reset();

    const factsResults = await fetchFacts(query, category);
    return setResults(factsResults);
  };

  const debouncedFetchRandom = debounce(async function() {
    const fact = await fetchFacts("", "all");
    setSearched(true);
    setResults(fact);
  }, 300);

  useEffect(() => {
    const getCategories = async () => {
      const factsCategories = await factsService.fetchCategories();
      setCategories(["all", ...factsCategories]);
    };

    getCategories();

    if (
      isObject(location.state) &&
      // @ts-ignore
      location.state?.random
    ) {
      setSearched(true);
      fetchFacts("", "all").then((fact) => {
        setResults(fact);
      });
    }

    tinykeys(window, {
      "Shift+R": debouncedFetchRandom,
    });
  }, [debouncedFetchRandom, location.state]);

  const renderNullProducts = () => {
    if (searched && results.length < 0) {
      return <p className="text-2xl">No results found.</p>;
    } else {
      return (
        <p className="text-2xl">
          Press <span className="font-bold text-brand-300">"Shift + R"</span>{" "}
          for a random fact
        </p>
      );
    }
  };

  return (
    <div>
      <NavSearchForm
        categories={categories}
        handleSubmit={handleSearchFormSubmit}
      />
      {results.length > 0 ? (
        <div className="pt-8">
          <Facts facts={results} />
        </div>
      ) : (
        <div className="text-center pt-8 my-12 text-brand-500">
          {renderNullProducts()}
        </div>
      )}
    </div>
  );
};

export default Search;
