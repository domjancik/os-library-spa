import React from 'react'
import { ILibrary } from '../../library/librarySlice'
import LibraryRow from './LibraryRow/LibraryRow'

import classes from './LibraryList.module.css'

interface Props {
    libraries: ILibrary[]
}

export const LibraryList = ({ libraries }: Props) => {
    return (
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
                {libraries.map(library => <LibraryRow key={library.uid} library={library} />)}
            </tbody>
        </table>
    )
}
