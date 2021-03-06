// node environments

export const PRODUCTION = process.env.NODE_ENV === 'production';

// third party apis
const {
  REACT_APP_URBAN_API_KEY,
  REACT_APP_URBAN_API_HOST,
  REACT_APP_URBAN_URL,
} = process.env;

export const URBAN_DICTIONARY = {
  REACT_APP_URBAN_API_KEY,
  REACT_APP_URBAN_API_HOST,
  REACT_APP_URBAN_URL,
};

export const hasUrbanDictionaryKeys = [
  REACT_APP_URBAN_API_KEY,
  REACT_APP_URBAN_API_HOST,
  REACT_APP_URBAN_URL,
].every(Boolean);
