import styled from 'styled-components'

export const ListWrapper = styled.div`
    width: 1000px;
    min-height: 200px;
    border: 1px solid #000; 
    position: relative;
    margin: 50px auto;
    
    .inner {
        padding: 10px;
    }
    
    ul {
        list-style-type: none;
        
        li {
            display: inline-block;
            margin-right: 10px;
        }
    }
`