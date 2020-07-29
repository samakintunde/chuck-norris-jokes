import React, { useState } from "react";
import Button from "../../common/button";
import { FiArrowRight } from "react-icons/fi";
import factsService from "../../../services";
import { useHistory } from "react-router-dom";

type SearchFormProps = {
  handleSubmit: (event: React.FormEvent<HTMLElement>) => Promise<any>;
};

const SearchForm: React.FC<SearchFormProps> = (props) => {
  // PROPS
  const { handleSubmit } = props;
  // STATE
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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!valid) return;
    setSearching(true);

    handleSubmit(event)
      .then(() => {
        setSearching(false);
        setValid(true);
      })
      .catch(() => {
        setValid(true);
        setSearching(false);
        setQuery("");
      });
  };

  return (
    <form onSubmit={onSubmit}>
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
