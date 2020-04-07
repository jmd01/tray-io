import React from 'react'

import {DataTrayItemWrap} from './styles'

function DataTrayItem ({item, isListItem = false}) {
    return (
        <DataTrayItemWrap
            style={{
                left: item.coords.x,
                top: item.coords.y
            }}
            isListItem={isListItem}
        >
            {item.connector.name}
            <img src={item.connector.iconURL} alt={item.connector.name} />
        </DataTrayItemWrap>
    )
}
export default DataTrayItem