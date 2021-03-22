import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const Main = styled.main`
    position: relative;
    background-color: #e4e4e4;
    border-radius: 0.5rem 0 0 0.5rem;
    font-family: 'Blinker', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: 'Mukta Vaani', sans-serif;
    }
    em {
        position: absolute;
        bottom: 0.3rem;
        a {
            text-decoration: none;
            font-weight: 600;
            color: black;
            &:hover {
                color: #13699c;
            }
        }
    }
`

export const StyledButton = styled(Button)`
background-color: ${props => props.disabled ? "#ccc !important" : "#13699c"};
    color: ${props => props.disabled ? "black !important" : "white"};
    font-weight: bold;
    &:hover{
        background-color: #1369DD;
    }
`
    
export const HandleSection = styled.section`
    display: ${props => props.hidden ? 'hidden' : 'flex'};
    flex-direction: column;
    width: 90%;
    padding: 3rem 2.2rem;
    li {
        list-style-type: circle;
        padding: 0.3rem 0;
        &:hover {
            list-style-type: disc;
        }
        b {
            font-weight: 600;
        }
    }
`