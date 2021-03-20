import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Main, StyledButton } from './Home.styled';

const Home = () => {
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