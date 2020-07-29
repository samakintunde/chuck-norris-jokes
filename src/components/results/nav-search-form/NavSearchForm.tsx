import React, { useState } from "react";
import Input from "../../common/input";
import Button from "../../common/button";
import { FiSearch } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

type NavSearchFormProps = {
  categories: string[];
  handleSubmit: (event: React.FormEvent) => Promise<any>;
};

const NavSearchForm: React.FC<NavSearchFormProps> = (props) => {
  // PROPS
  const { categories, handleSubmit } = props;
  // STATE
  const [searching, setSearching] = useState(false);
  const { t, i18n } = useTranslation();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSearching(true);

    handleSubmit(event).then(() => {
      setSearching(false);
    });
  };

  const isRtl = () => {
    return i18n.language === "ar";
  };

  // STYLES
  const searchContainerClassNames = clsx({
    "relative flex-auto": true,
    "ml-2": isRtl(),
    "mr-2": !isRtl(),
  });

  const inputClassNames = clsx({
    "pr-24": !isRtl(),
    "pl-24": isRtl(),
  });

  const selectContainerClassNames = clsx({
    "absolute inset-y-0 flex items-center w-16": true,
    "right-0 mr-4": !isRtl(),
    "left-0 ml-4": isRtl(),
  });

  return (
    <form className="w-full" onSubmit={onSubmit}>
      <div className="flex items-center">
        <div className={searchContainerClassNames}>
          <Input name="query" className={inputClassNames} />
          <div className={selectContainerClassNames}>
            <select
              name="category"
              className="form-select h-full w-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm sm:leading-5"
              defaultValue="all"
            >
              {categories.map((category) => (
                <option value={category} key={category}>
                  {t(`search.categories.${category}`)}
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
