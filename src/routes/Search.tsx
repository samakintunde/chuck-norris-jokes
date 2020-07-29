import React, { useEffect, useState } from "react";
import NavSearchForm from "../components/results/nav-search-form";
import Facts from "../components/results/facts";
import factsService from "../services";
import { IFact } from "../components/results/fact/Fact";
import { useLocation } from "react-router-dom";
import { isObject, fetchFacts } from "../utils";

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

  useEffect(() => {
    const getCategories = async () => {
      const factsCategories = await factsService.fetchCategories();
      setCategories([...categories, ...factsCategories]);
    };

    getCategories();

    if (
      isObject(location.state) &&
      // @ts-ignore
      location.state?.random
    ) {
      factsService.fetchRandom().then((fact) => {
        setSearched(true);
        setResults([fact]);
      });
    }
  }, []);

  const renderNullProducts = () => {
    if (searched && results.length < 0) {
      return <p className="text-2xl">No results found.</p>;
    } else {
      return <p className="text-2xl">Please, enter a search query</p>;
    }
  };

  return (
    <div>
      <NavSearchForm
        categories={categories}
        handleSubmit={handleSearchFormSubmit}
      />
      {searched && results.length > 0 ? (
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
