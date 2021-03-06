import React, { ReactElement, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../search/searchSlice';
import { fetchLibraries, selectLibraries } from './librariesSlice';
import LibraryList from './LibraryList/LibraryList';

function Libraries(): ReactElement {
  const libraries = useSelector(selectLibraries);
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter).toLocaleLowerCase();

  useEffect(() => {
    dispatch(fetchLibraries());
  }, []);

  if (libraries === undefined) return <div>Loading</div>;

  const filteredLibraries = libraries
    .filter(({ name, author }) => name.toLocaleLowerCase().includes(filter)
        || author.toLocaleLowerCase().includes(filter));

  return (
    <>
      <LibraryList libraries={filteredLibraries} />
    </>
  );
}

export default Libraries;
