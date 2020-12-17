import React, { useEffect, useState } from 'react'
import { has } from 'lodash/fp'

import { ILibrary } from '../../library/librarySlice'
import LibraryRow from './LibraryRow/LibraryRow'

import classes from './LibraryList.module.css'
import { Vector3 } from 'react-three-fiber'
import { Box } from '../../../shared/components/Box/Box'
import { LibraryBox } from './LibraryBox/LibraryBox'

interface Props {
    libraries: ILibrary[]
}

interface PositionDictionary {
    [key: string]: Vector3
}

const randomAround0 = (scale: number) => (Math.random() - 0.5) * scale
const createPosition = (scale: number): Vector3 => [randomAround0(scale), randomAround0(scale), randomAround0(scale)]
const addPosition =
    (uid: string, position: Vector3) =>
        (state: PositionDictionary): PositionDictionary => ({ ...state, [uid]: position })

export const LibraryList = ({ libraries }: Props) => {
    const [positions, setPositions] = useState<PositionDictionary>({})
    // const createLibraryBox = (library: ILibrary) => 

    // IDEA Maybe better to embed in Boxes themselves
    useEffect(() => {
        libraries.forEach(({ uid }) => {
            if (!has(uid!, positions)) setPositions(addPosition(uid!, createPosition(10)))
        })
    }, [libraries])

    const libraryBoxes = libraries.map(library => <LibraryBox library={library} position={positions[library.uid!]} />)

    return <>{libraryBoxes}</>
}
