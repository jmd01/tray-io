import React from 'react'

import DataTrayItem from '../DataTrayItem'
import {ListWrapper} from './styles'

function ConnectorList(
    {
        handleMouseEnter,
        handleMouseLeave,
        connectorList = []
    }
) {
    return (
        <>
            <ListWrapper
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ul>
                    {connectorList.map((item, i) => (
                        <li key={i}>
                            <DataTrayItem item={item} isListItem />
                        </li>
                    ))}
                </ul>

            </ListWrapper>
        </>
    )
}
export default ConnectorList