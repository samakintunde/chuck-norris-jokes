import React, { useState } from "react";
import Button from "../../common/button";
import { FiArrowRight } from "react-icons/fi";
import jokesService from "../../../services";

const SearchForm: React.FC = (props) => {
  // PROPS
  const [valid, setValid] = useState(false);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (!event.target.value) {
      return setValid(false);
    }
    setValid(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;
    setSearching(true);

    const joke = await jokesService.fetchRandomWithText(query);

    if (!joke) {
      setSearching(false);
      return setValid(true);
    }

    setSearching(false);
    setValid(true);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          name="query"
          value={query}
          className="py-4 px-4 text-xl font-bold md:text-center placeholder-brand-500 rounded-sm bg-brand-800 hover:bg-brand-700 text-brand-100 w-full"
          placeholder="Search..."
          type="text"
          disabled={searching}
          onChange={handleChange}
        />
        <div className="h-full absolute top-0 right-0 flex items-center">
          <Button
            className="bg-brand-800 h-full"
            type="submit"
            disabled={!query && !valid}
            loading={searching}
            icon={<FiArrowRight />}
            aria-label="Search"
          />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
