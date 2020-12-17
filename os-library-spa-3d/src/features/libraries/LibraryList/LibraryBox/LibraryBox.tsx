import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { MeshProps } from 'react-three-fiber'
import { Box } from '../../../../shared/components/Box/Box'
import { ILibrary } from '../../../library/librarySlice'
import { selectMaxDownloads } from '../../librariesSlice'

interface Props extends MeshProps {
    library: ILibrary
}

export const LibraryBox = ({ library, position }: Props) => {
    const history = useHistory()
    const { uid: selectedUid } = useParams<{uid: string}>()

    const { downloads, uid } = library

    const maxDownloads = useSelector(selectMaxDownloads)
    const popularity = downloads / maxDownloads

    const active = uid === selectedUid

    return (
        <Box
            active={active}
            position={position}
            scale={[popularity, popularity, popularity]}
            onClick={(_event) => {
                console.table(library)
                history.push(`/library/${uid}`)
            }} />
    )
}
