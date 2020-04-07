import styled from 'styled-components'

export const ListWrapper = styled.div`
    width: 1000px;
    min-height: 200px;
    margin-top: 20px;
    border: 1px solid #000; 
    position: relative;
    
    ul {
        list-style-type: none;
        
        li {
            display: inline-block;
            margin-right: 10px;
        }
    }
`