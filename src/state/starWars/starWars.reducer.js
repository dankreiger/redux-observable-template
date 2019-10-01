import { starWarsHttpReducer } from './starWars.constants';

const starWars = (state = {}, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

export default starWarsHttpReducer(starWars);
