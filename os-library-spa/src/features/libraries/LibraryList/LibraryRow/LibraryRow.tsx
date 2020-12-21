import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Edit, DeleteForever, Link as LinkIcon } from '@material-ui/icons';

import Button from '../../../../components/Button/Button';
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

  const linkDisabled = !uri;

  return (
    <tr className={classes.LibraryRow}>
      {cellTextData.map((text, i) => <td className={classes[`Column${i}`]} key={text}>{text}</td>)}
      <td className={classes.PopColumn}><DownloadBar amount={downloads / maxDownloads} /></td>
      <td className={classes.DeleteColumn}><Button type="button" onClick={handleDelete}><DeleteForever color="primary" /></Button></td>
      <td className={classes.EditColumn}><Button type="button" onClick={handleEdit}><Edit color="primary" /></Button></td>
      <td className={classes.DetailColumn}><Button type="button" disabled={!uri} onClick={handleDetail}><LinkIcon color={linkDisabled ? 'disabled' : 'primary'} /></Button></td>
    </tr>
  );
};

export default LibraryRow;
