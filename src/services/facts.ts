import { IFact } from "../components/results/fact/Fact";

const JOKES_BASE_URL = "https://api.chucknorris.io";

export const fetchRandom = async () => {
  try {
    const response = await fetch(`${JOKES_BASE_URL}/jokes/random`);
    const data: IFact = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${JOKES_BASE_URL}/jokes/categories`);
    const data: string[] = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchRandomInCategory = async (category: string) => {
  try {
    const response = await fetch(
      `${JOKES_BASE_URL}/jokes/random?category=${category}`
    );
    const data: IFact = await response.json();

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchRandomWithText = async (query: string) => {
  try {
    const response = await fetch(
      `${JOKES_BASE_URL}/jokes/search?query=${query}`
    );
    const { result }: { result: IFact[] } = await response.json();

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const factsService = {
  fetchRandom,
  fetchRandomWithText,
  fetchCategories,
  fetchRandomInCategory,
};

export default factsService;
