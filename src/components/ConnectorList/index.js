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
                <div className="inner">
                    <h2>Interesting connector list</h2>
                    <ul>
                        {connectorList.map((item, i) => (
                            <li key={i}>
                                <DataTrayItem item={item} isListItem />
                            </li>
                        ))}
                    </ul>
                </div>

            </ListWrapper>
        </>
    )
}
export default ConnectorList