import { Clear, Search as SearchIcon } from '@material-ui/icons';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlatButton from '../../components/FlatButton/FlatButton';
import classes from './Search.module.css';
import { selectFilter, set } from './searchSlice';

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
      <div>
        {!value ? <SearchIcon color="primary" /> : (
          <FlatButton type="button" onClick={handleClear}>
            <Clear color="primary" />
          </FlatButton>
        )}

      </div>
      <input
        placeholder="Filter"
        type="text"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}

export default Search;
