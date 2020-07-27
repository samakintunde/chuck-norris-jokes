const JOKES_BASE_URL = "https://api.chucknorris.io";

interface RandomJoke {
  categories: [];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export const fetchRandom = async () => {
  try {
    const response = await fetch(`${JOKES_BASE_URL}/jokes/random`);
    const data: RandomJoke = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${JOKES_BASE_URL}/jokes/categories`);
    const data: string[] = await response.json();

    return data;
  } catch (error) {
    return [];
  }
};

export const fetchRandomInCategory = async (category: string) => {
  try {
    const response = await fetch(
      `${JOKES_BASE_URL}/jokes/random?category=${category}`
    );
    const data: RandomJoke = await response.json();

    return data;
  } catch (error) {
    return null;
  }
};

export const fetchRandomWithText = async (query: string) => {
  try {
    const response = await fetch(
      `${JOKES_BASE_URL}/jokes/search?query=${query}`
    );
    const data: RandomJoke = await response.json();

    if (!data.id) return null;

    return data;
  } catch (error) {
    return null;
  }
};

const jokesService = {
  fetchRandom,
  fetchRandomWithText,
  fetchCategories,
  fetchRandomInCategory,
};

export default jokesService;
