import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ILibrary } from '../../../library/librarySlice';
import { deleteLibrary, selectMaxDownloads } from '../../librariesSlice';
import DownloadBar from './DownloadBar/DownloadBar';

import classes from './LibraryRow.module.css';

interface Props {
    library: ILibrary
}

const LibraryRow = ({ library }: Props): ReactElement => {
  const dispatch = useDispatch();
  const history = useHistory();

  const maxDownloads = useSelector(selectMaxDownloads);

  const {
    author, name, repository, downloads, uid, uri,
  } = library;
  const cellTextData = [author, name, repository];

  const handleDelete = () => dispatch(deleteLibrary(uid!));
  const handleEdit = () => history.push(`/library/${uid}`);
  const handleDetail = () => window.open(uri, '_blank');

  return (
    <tr className={classes.LibraryRow}>
      {cellTextData.map((text, i) => <td className={classes[`Column${i}`]} key={text}>{text}</td>)}
      <td><DownloadBar amount={downloads / maxDownloads} /></td>
      <td><button type="button" onClick={handleDelete}>❌</button></td>
      <td><button type="button" onClick={handleEdit}>✏</button></td>
      <td><button type="button" disabled={!uri} onClick={handleDetail}>🌎</button></td>
    </tr>
  );
};

export default LibraryRow;
