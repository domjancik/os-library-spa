import React, { FunctionComponent } from 'react'
import { Box } from '../../Box/Box'

export const BaseScene: FunctionComponent = ({children}) => {
    return (
        <>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            {children}
        </>
    )
}
