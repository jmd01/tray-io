import React, {useEffect, useState} from 'react'
import Draggable from "react-draggable"

import DataTrayItem from '../DataTrayItem'
import ConnectorList from '../ConnectorList'
import TitleBar from '../TitleBar'

import {Pane} from './styles'
import {DataTrayItemWrap} from '../DataTrayItem/styles'

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

    // When dragging, this stores the index of the dragged item
    const [draggableDataTrayItemIndex, setDraggableDataTrayItemIndex] = useState(null)

    // When dropped, this determines if dropped on the list panel
    const [isDroppable, setIsDroppable] = useState(false)

    // Stores the list of items dropped on the list panel
    const [connectorList, setConnectorList] = useState([])


    const handleDragStart = i => e => {
        setDraggableDataTrayItemIndex(i)
    }

    const handleDragEnd = e => {
        console.log('dragend', isDroppable)
        if (isDroppable) {
            setConnectorList(list => [
                ...list,
                dataTray[draggableDataTrayItemIndex]
            ])
        }
        setDraggableDataTrayItemIndex(null)
    }

    const handleMouseEnterConnectorList = () => {
        setIsDroppable(true)
    }
    const handleMouseLeaveConnectorList = () => {
        setIsDroppable(false)
    }

    // useEffect requires a simple variable to be used in the dependency list
    const dataTrayProp = props["data-tray"]
    useEffect(() => {
        // Ensure each item has a valid name, url and coords object structure
        const formatItem = (item) => {
            let xCoord
            let yCoord

            // Consider importing lodash to reduce this by a few lines
            if (typeof item === 'object' && item.hasOwnProperty('coords') && (typeof item.coords === 'object')) {
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
                <TitleBar />
                <div className="inner">
                    {dataTray.map((item, i) => (
                        <Draggable
                            key={i}
                            onStart={handleDragStart(i)}
                            onStop={handleDragEnd}
                            position={{x: 0, y: 0}} // reset position on dragend
                        >
                            <DataTrayItemWrap
                                style={{
                                    left: item.coords.x,
                                    top: item.coords.y
                                }}
                            >
                                {item.connector.name}
                                <img src={item.connector.iconURL} alt={item.connector.name} />
                            </DataTrayItemWrap>
                        </Draggable>
                    ))}
                    {draggableDataTrayItemIndex &&
                    <DataTrayItem item={dataTray[draggableDataTrayItemIndex]} />
                    }
                </div>
            </Pane>
            <ConnectorList
                handleMouseEnter={handleMouseEnterConnectorList}
                handleMouseLeave={handleMouseLeaveConnectorList}
                connectorList={connectorList}
            />

        </>
    )
}
export default Visualiser