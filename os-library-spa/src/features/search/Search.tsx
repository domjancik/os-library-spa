import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set, selectFilter } from './searchSlice';

import classes from './Search.module.css';

function Search() {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(set(event.target.value));
  };

  const handleClear = () => {
    dispatch(set(''));
  };

  return (
    <div className={classes.Search}>
      <div>🔍</div>
      <input
        placeholder="Filter"
        type="text"
        onChange={handleChange}
        value={value}
      />
      {value ? (
        <button type="button" onClick={handleClear}>
          ❌
        </button>
      ) : null}
    </div>
  );
}

export default Search;
