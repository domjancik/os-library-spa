import React from 'react';
import { ILibrary } from '../../library/librarySlice';
import LibraryRow from './LibraryRow/LibraryRow';

import classes from './LibraryList.module.css';

interface Props {
    libraries: ILibrary[]
}

const LibraryList = ({ libraries }: Props) => (
  <table className={classes.LibraryList}>
    <thead>
      <tr>
        <th>Author</th>
        <th>Name</th>
        <th>Repository</th>
        <th>Popularity</th>
      </tr>
    </thead>
    <tbody>
      {libraries.map((library) => <LibraryRow key={library.uid} library={library} />)}
    </tbody>
  </table>
);

export default LibraryList;
