import { any } from 'lodash/fp'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { fetchLibrary, reset, selectLibrary, update, updateLibrary } from '../librarySlice'

interface Props {
}

export const LibraryEdit = ({ }: Props) => {
    const library = useSelector(selectLibrary)
    const dispatch = useDispatch()
    const history = useHistory()
    const { uid } = useParams<{uid: string}>()

    useEffect(() => {
        if (uid == 'new') {
            dispatch(reset);
        } else {
            dispatch(fetchLibrary(uid))
        }
    }, [uid])

    const handleChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(update({ field, value: event.target.value }))
    };

    const goToIndex = () => history.push('/')
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        dispatch(updateLibrary(library, goToIndex))
    }
    const handleCancel = goToIndex

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" value={library.author} onChange={handleChange('author')}></input>
                </div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={library.name} onChange={handleChange('name')}></input>
                </div>
                <div>
                    <button type="submit">✔</button>
                    <button onClick={handleCancel}>❌</button>
                </div>
            </form>
        </div>
    )
}
