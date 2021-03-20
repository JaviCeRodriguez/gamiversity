import React from 'react';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Home = () => {
    const Main = styled.main`
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
    `

    const StyledButton = styled(Button)`
        background-color: ${props => props.disabled ? "#ccc !important" : "#13699c"};
        color: ${props => props.disabled ? "black !important" : "white"};
        font-weight: bold;
        &:hover{
            background-color: #1369DD;
        }
    `

    return(
        <Main>
            <h1>Gamiversity - Tu vida estudiantil, como si fuera un juego</h1>
            <ButtonGroup variant="contained">
                <StyledButton>Resumen</StyledButton>
                <StyledButton>Objetivos</StyledButton>
                <StyledButton disabled>Login</StyledButton>
            </ButtonGroup>
        </Main>
    );
};

export default Home;