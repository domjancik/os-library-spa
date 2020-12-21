import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectFilter } from '../search/searchSlice';
import { fetchLibraries, selectLibraries } from './librariesSlice';
import LibraryList from './LibraryList/LibraryList';

function Libraries(): ReactElement {
  const libraries = useSelector(selectLibraries);
  const dispatch = useDispatch();
  const history = useHistory();
  const filter = useSelector(selectFilter).toLocaleLowerCase();

  useEffect(() => {
    dispatch(fetchLibraries());
  }, []);

  if (libraries === undefined) return <div>Loading</div>;

  const handleNew = () => history.push('/library/new');

  const filteredLibraries = libraries
    .filter(({ name, author }) => name.toLocaleLowerCase().includes(filter)
        || author.toLocaleLowerCase().includes(filter));

  return (
    <>
      <div>
        <button type="button" onClick={handleNew}>➕</button>
      </div>
      <div>
        <LibraryList libraries={filteredLibraries} />
      </div>
    </>
  );
}

export default Libraries;
