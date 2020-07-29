import React, { useEffect, useState } from "react";
import NavSearchForm from "../components/results/nav-search-form";
import Facts from "../components/results/facts";
import factsService from "../services";
import { IFact } from "../components/results/fact/Fact";
import { useLocation } from "react-router-dom";
import { isObject } from "../utils";

const Search = () => {
  const location = useLocation();
  const [categories, setCategories] = useState(["all"]);
  const [results, setResults] = useState<IFact[]>(
    // @ts-ignore
    location.state?.results || []
  );

  const handleSearchFormSubmit = async (event: React.FormEvent) => {
    // @ts-ignore
    const query = event.target["query"].value;
    // @ts-ignore
    const category = event.target["category"].value;
    // @ts-ignore
    event.target.reset();

    // Query random with text
    if (query && category !== "all") {
      const factsResults = await factsService.fetchRandomWithText(query);
      // @ts-ignore
      return setResults(factsResults);
      // Query random in category
    } else if (category !== "all") {
      const factsResult = await factsService.fetchRandomInCategory(category);
      // @ts-ignore
      return setResults([factsResult]);
    } else {
      const factsResult = await factsService.fetchRandom();
      // @ts-ignore
      return setResults([factsResult]);
    }
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
        setResults([fact]);
      });
    }
  }, []);

  return (
    <div className="p-4">
      <NavSearchForm
        categories={categories}
        handleSubmit={handleSearchFormSubmit}
      />
      <div className="pt-8">
        <Facts facts={results} />
      </div>
    </div>
  );
};

export default Search;
