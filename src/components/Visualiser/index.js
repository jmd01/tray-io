import React, {useEffect, useState} from 'react'
import {Pane, EventItem} from './styles'

const initItem = {
    coords: {
        x: 0,
        y: 0,
    },
    connector: {
        iconURL: null,
        name: 'No name'
    },
    trayTrollSays: null
}

function Visualiser(props) {
    // Event items array populated from the "data-tray" prop
    const [dataTray, setDataTray] = useState([])

    // useEffect requires a simple variable to be used in the dependency list
    const dataTrayProp = props["data-tray"]

    useEffect(() => {

        // Ensure each item has a valid name, url and coords object structure
        const formatItem = (item) => {
            let xCoord
            let yCoord

            // Consider importing lodash to reduce this by a few lines
            if (item.hasOwnProperty('coords') && (typeof item.coords === 'object')) {
                xCoord = item.coords.hasOwnProperty('x') ?
                    Math.abs(item.coords.x) : initItem.coords.x
                yCoord = item.coords.hasOwnProperty('y') ?
                    Math.abs(item.coords.y) : initItem.coords.y
            }

            return {
                ...initItem,
                ...item,
                coords: {
                    x: xCoord,
                    y: yCoord
                },
                connector: {
                    ...initItem.connector,
                    ...item.connector
                },
            }
        }

        setDataTray(items => [
            ...items,
            formatItem(dataTrayProp)
        ])

    }, [dataTrayProp])

    return (
        <>
            <h1>Visualiser</h1>
            <Pane>
                {dataTray.map((item, i) => (
                    <EventItem
                        key={i}
                        style={{
                            left: item.coords.x,
                            top: item.coords.y
                        }}
                    >
                        {item.connector.name}
                        <img src={item.connector.iconURL} alt={item.connector.name} />
                    </EventItem>
                ))}

            </Pane>
        </>
    )
}
export default Visualiser