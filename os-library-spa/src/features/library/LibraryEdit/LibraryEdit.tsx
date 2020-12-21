import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import {
  fetchLibrary, reset, selectLibrary, update, updateLibrary, insertLibrary,
} from '../librarySlice';

import classes from './LibraryEdit.module.css';

function LibraryEdit() {
  const library = useSelector(selectLibrary);
  const dispatch = useDispatch();
  const history = useHistory();
  const { uid } = useParams<{uid: string}>();

  const isNew = uid === 'new';

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(fetchLibrary(uid));
    }
  }, [uid]);

  const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(update({ field, value: event.target.value }));
  };

  const goToIndex = () => history.push('/');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const dispatchFunction = isNew ? insertLibrary : updateLibrary;

    dispatch(dispatchFunction(library, goToIndex));
  };
  const handleCancel = goToIndex;

  const title = isNew ? 'Add library' : 'Edit library';

  /* eslint-disable jsx-a11y/label-has-associated-control */
  return (
    <div className={classes.LibraryEdit}>
      <div className={classes.LibraryEditTitle}>{title}</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="author">
            Author
          </label>
          <input type="text" name="author" id="author" value={library.author} onChange={handleChange('author')} />
        </div>
        <div>
          <label htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" value={library.name} onChange={handleChange('name')} />
        </div>
        <div className={classes.LibraryEditButtons}>
          <Button type="submit">OK</Button>
          <Button type="button" onClick={handleCancel}>Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default LibraryEdit;
