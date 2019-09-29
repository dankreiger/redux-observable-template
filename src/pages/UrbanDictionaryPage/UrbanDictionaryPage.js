import React, { useState, useEffect } from 'react';
import { any, func, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import { fetchUrbanDictionaryBegin } from 'state/urbanDictionary/urbanDictionary.actions';
import { createStructuredSelector } from 'reselect';
import {
  selectUrbanDictionaryItems,
  selectUrbanDictionaryLoading,
  selectUrbanDictionaryError
} from 'state/urbanDictionary/urbanDictionary.selectors';
import Spinner from 'components/Spinner/Spinner';
const UrbanDictionaryPage = ({
  fetchUrbanDictionaryBegin,
  urbanDictionaryItems,
  loading,
  error
}) => {
  const [inputValue, setInputValue] = useState('');
  const [pristine, setPristine] = useState(true);
  const handleSearchChange = e => {
    setInputValue(e.target.value);
  };
  console.log(error);
  useEffect(() => {
    fetchUrbanDictionaryBegin(inputValue);
    setPristine(false);
  }, [inputValue, fetchUrbanDictionaryBegin]);

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
          <a href={item.permalink}>
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
UrbanDictionaryPage.propTypes = {
  urbanDictionaryItems: array,
  fetchUrbanDictionaryBegin: func.isRequired,
  loading: bool.isRequired,
  error: any
};

UrbanDictionaryPage.defaultProps = {
  urbanDictionaryItems: [],
  error: null
};

const mapStateToProps = createStructuredSelector({
  urbanDictionaryItems: selectUrbanDictionaryItems,
  loading: selectUrbanDictionaryLoading,
  error: selectUrbanDictionaryError
});

export default connect(
  mapStateToProps,
  { fetchUrbanDictionaryBegin }
)(UrbanDictionaryPage);
