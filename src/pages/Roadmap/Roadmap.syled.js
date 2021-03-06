import styled from "styled-components";

export const Main = styled.main`
    background-color: #e4e4e4;
    border-radius: 0.5rem 0 0 0.5rem;
    font-family: 'Blinker', sans-serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    header{
        text-align: center;
        h1 {
            font-weight: 600;
        }
        h3 {
            font-weight: 600;
        }
    }
`

export const Icon = styled.label`
    color: ${props => props.checkA ? "green" : props.checkR ? "red" : "gray"};
    font-size: 1.2rem;
`