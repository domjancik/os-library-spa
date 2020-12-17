import React, { useRef, useState } from 'react'
import { MeshProps, useFrame } from 'react-three-fiber'

// TODO use history to keep selected state
// TODO display overlay with information
// TODO display labels on packages

export const Box = (props: MeshProps) => {
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>() // Would put type but can't find Mesh as per react-three-fiber doc

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        if (!mesh) return
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })

    const baseColor = active ? 'red' : 'blue'
    const color = hovered ? 'hotpink' : baseColor

    return (
        <mesh
            {...props}
            ref={mesh}
            // scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick={(_event) => setActive(!active)}
            onPointerOver={(_event) => setHover(true)}
            onPointerOut={(_event) => setHover(false)}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}
