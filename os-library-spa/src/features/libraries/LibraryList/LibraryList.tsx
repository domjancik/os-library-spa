import React from 'react';
import { isEmpty } from 'lodash/fp';
import { ILibrary } from '../../library/librarySlice';
import LibraryRow from './LibraryRow/LibraryRow';

import classes from './LibraryList.module.css';

interface Props {
    libraries: ILibrary[]
}

const LibraryList = ({ libraries }: Props) => (!isEmpty(libraries) ? (
  <table className={classes.LibraryList}>
    <thead>
      <tr>
        <th>Author</th>
        <th>Name</th>
        <th>Repository</th>
        <th>Popularity</th>
        <th>Delete</th>
        <th>Edit</th>
        <th>Detail</th>
      </tr>
    </thead>
    <tbody>
      {libraries.map((library) => <LibraryRow key={library.uid} library={library} />)}
    </tbody>
  </table>
) : <div className={classes.LibraryListEmpty}><div>No libraries found</div></div>);

export default LibraryList;
