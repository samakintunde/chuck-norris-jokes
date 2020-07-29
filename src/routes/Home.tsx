import React from "react";
import LinkCard from "../components/common/link-card";
import SearchForm from "../components/home/search-form";
import factsService from "../services";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const handleSearchFormSubmit = async (event: React.FormEvent) => {
    // @ts-ignore
    const query = event.target["query"].value;
    // @ts-ignore
    event.target.reset();

    const factsResults = await factsService.fetchRandomWithText(query);

    return history.push("/search", {
      results: factsResults,
    });
  };

  return (
    <main className="h-full flex items-center justify-center text-center">
      <div className="w-full">
        <div className="my-6">
          <SearchForm handleSubmit={handleSearchFormSubmit} />
        </div>
        <div
          className="py-10 flex flex-col md:flex-row justify-around items-center"
          data-cy="search-actions"
        >
          <LinkCard to="/search">{t("home.actions.by_category")}</LinkCard>
          <p className="text-brand-300 text-xl m-4">{t("home.actions.or")}</p>
          <LinkCard
            to={{
              pathname: "/search",
              state: {
                random: true,
              },
            }}
          >
            {t("home.actions.feeling_lucky")}
          </LinkCard>
        </div>
      </div>
    </main>
  );
};

export default Home;
