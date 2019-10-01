import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  selectUrbanDictionaryItems,
  selectUrbanDictionaryLoading,
  selectUrbanDictionaryError
} from 'state/urbanDictionary/urbanDictionary.selectors';
import Spinner from 'components/Spinner/Spinner';
import { urbanDictionaryHttpBegin } from 'state/urbanDictionary/urbanDictionary.constants';

const UrbanDictionaryPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [pristine, setPristine] = useState(true);
  const urbanDictionaryItems = useSelector(selectUrbanDictionaryItems);
  const loading = useSelector(selectUrbanDictionaryLoading);
  const error = useSelector(selectUrbanDictionaryError);
  const dispatch = useDispatch();

  const handleSearchChange = e => {
    setInputValue(e.target.value);
  };
  console.log(error);
  useEffect(() => {
    dispatch(urbanDictionaryHttpBegin(inputValue));
    setPristine(false);
  }, [inputValue, dispatch]);

  const renderDictionaryPage = () => {
    if (error) {
      // show error boundary
      throw new Error(error.message);
    }
    if (loading) {
      return <Spinner />;
    }
    if (urbanDictionaryItems.length) {
      return urbanDictionaryItems.map(item => (
        <div
          key={item.defid}
          style={{ padding: '20px', background: '#fff', margin: '20px auto' }}
        >
          <a
            style={{ color: '#000', textDecoration: 'none' }}
            href={item.permalink}
          >
            <div>Word: {item.word}</div>
            <div>Definition: {item.definition}</div>
          </a>
        </div>
      ));
    }

    if (!pristine) {
      return <h1>no results</h1>;
    }
    return <></>;
  };
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <a href="https://rapidapi.com/community/api/urban-dictionary">
          Urban Dictionary API Key
        </a>{' '}
        necessary:
      </div>
      <input
        placeholder="Search dictionary"
        style={{ height: '50px', minWidth: '200px', fontSize: '1.1em' }}
        onChange={handleSearchChange}
        value={inputValue}
      />
      {renderDictionaryPage()}
    </div>
  );
};

UrbanDictionaryPage.defaultProps = {
  urbanDictionaryItems: [],
  error: null
};

export default UrbanDictionaryPage;
