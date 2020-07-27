import React from "react";
import LinkCard from "../components/common/link-card";
import SearchForm from "../components/home/search-form";

const Home: React.FC = () => {
  return (
    <main className="h-full flex items-center justify-center text-center p-4">
      <div className="w-full md:w-4/5 lg:w-1/2 my-4">
        <div>
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
              Chuck Norris Facts Finder
            </h1>
          </div>
          <SearchForm />
        </div>
        <div className="py-10 flex justify-around items-center">
          <LinkCard to="/">Search by Category</LinkCard>
          <p className="text-brand-300 text-xl">or</p>
          <LinkCard to="/">I'm feeling lucky</LinkCard>
        </div>
      </div>
    </main>
  );
};

export default Home;
