import React, {useEffect, useState} from 'react'
import {format} from 'date-fns'

import {TitleBarWrap} from './styles'

function TitleBar() {
    const [currentTime, setCurrentTime] = useState(null)

    // Update timer every 0.1 seconds
    useEffect(() => {
        setTimeout(() => {
            setCurrentTime(format(Date.now(), 'HH:mm:ss:SS'))
        }, 100)

    },[currentTime])


    return (
        <TitleBarWrap>
            <div>John's visualizer</div>
            <div>{currentTime}</div>
        </TitleBarWrap>
    )
}
export default TitleBar