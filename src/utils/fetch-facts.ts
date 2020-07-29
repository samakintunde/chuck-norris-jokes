import factsService from "../services";

export const fetchFacts = async (query: string, category: string) => {
  let factsResults;

  switch (true) {
    case query && category === "all":
      factsResults = await factsService.fetchRandomWithText(query);
      return factsResults;

    case (query && category !== "all") || (!query && category !== "all"):
      factsResults = await factsService.fetchRandomInCategory(category);
      return [factsResults];

    default:
      factsResults = await factsService.fetchRandom();
      return [factsResults];
  }
};
