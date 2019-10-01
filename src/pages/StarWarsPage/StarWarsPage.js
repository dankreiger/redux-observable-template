import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { starWarsHttpBegin } from 'state/starWars/starWars.constants';
import {
  selectStarWarsItems,
  selectStarWarsLoading,
  selectStarWarsError
} from 'state/starWars/starWars.selectors';
import Spinner from 'components/Spinner/Spinner';

const StarWarsPage = () => {
  const dispatch = useDispatch();
  const starWarsLoading = useSelector(selectStarWarsLoading);
  const starWarsError = useSelector(selectStarWarsError);
  const starWarsList = useSelector(selectStarWarsItems);

  useEffect(() => {
    dispatch(starWarsHttpBegin('people'));
  }, [dispatch]);
  // !!TODO clean these conditionals up
  if (starWarsError) {
    // show error boundary
    throw new Error(starWarsError.message);
  }
  if (!starWarsList || starWarsLoading) {
    return <Spinner />;
  }
  return (
    <div>
      {starWarsList.map(item => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default StarWarsPage;
