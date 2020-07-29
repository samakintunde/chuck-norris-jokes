import React, { useState } from "react";
import Input from "../../common/input";
import Button from "../../common/button";
import { FiSearch } from "react-icons/fi";

type NavSearchFormProps = {
  categories: string[];
  handleSubmit: (event: React.FormEvent) => Promise<any>;
};

const NavSearchForm: React.FC<NavSearchFormProps> = (props) => {
  // PROPS
  const { categories, handleSubmit } = props;
  // STATE
  const [searching, setSearching] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearching(true);

    handleSubmit(event).then(() => {
      setSearching(false);
    });
  };

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex items-center">
        <div className="relative flex-auto mr-2">
          <Input name="query" className="pr-14" />
          <div className="absolute inset-y-0 right-0 mr-4 flex items-center">
            <select
              name="category"
              className="form-select h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
              defaultValue="all"
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <Button
          type="submit"
          className="h-auto px-2 py-3"
          loading={searching}
          icon={<FiSearch />}
        />
      </div>
    </form>
  );
};

export default NavSearchForm;
