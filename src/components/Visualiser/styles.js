import styled from 'styled-components'

export const Pane = styled.div`
    width: 1000px;
    height: 1000px;
    border: 1px solid #000; 
    position: relative;
    margin: 0 auto
`

export const EventItem = styled.div `
    border: 1px solid #dedede;
    display: inline-block;
    position: absolute;
    cursor: pointer;
    text-align: center;
    padding: 3px;
    border-radius: 3px;
    background: #fafafa; 
    max-width: 150px;
    
    img {
        display: block;
        margin: 0 auto;
        max-width: 100%;
    }
`