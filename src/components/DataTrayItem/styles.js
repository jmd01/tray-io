import styled from 'styled-components'

export const DataTrayItemWrap = styled.div `
    border: 1px solid #dedede;
    display: inline-block;
    position: ${props => props.isListItem ? 'initial' : 'absolute'};
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

