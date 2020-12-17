import React from 'react'
import { useSelector } from 'react-redux'
import { MeshProps } from 'react-three-fiber'
import { Box } from '../../../../shared/components/Box/Box'
import { ILibrary } from '../../../library/librarySlice'
import { selectMaxDownloads } from '../../librariesSlice'

interface Props extends MeshProps {
    library: ILibrary
}

export const LibraryBox = ({ library: { downloads }, position }: Props) => {
    const maxDownloads = useSelector(selectMaxDownloads)
    const popularity = downloads / maxDownloads

    return (
        <Box position={position} scale={[popularity, popularity, popularity]} />
    )
}
