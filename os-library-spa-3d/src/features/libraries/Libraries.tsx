import React, { ReactElement, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../search/searchSlice';
import { fetchLibraries, selectLibraries } from './librariesSlice'
import { LibraryList } from './LibraryList/LibraryList';

interface Props {

}

export function Libraries({ }: Props): ReactElement {
    const libraries = useSelector(selectLibraries);
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter).toLocaleLowerCase();

    useEffect(() => {
        dispatch(fetchLibraries());
    }, [])

    if (libraries === undefined) return <></>;

    const filteredLibraries = libraries.filter(({ name, author }) =>
        name.toLocaleLowerCase().includes(filter)
        || author.toLocaleLowerCase().includes(filter)
    )

    return (
        <LibraryList libraries={filteredLibraries} />
    )
}
