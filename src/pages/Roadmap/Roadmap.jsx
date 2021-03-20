import React from 'react';
import styled from "styled-components";

const Roadmap = () => {
    const Main = styled.main`
        background-color: #e4e4e4;
        border-radius: 0.5rem 0 0 0.5rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    `

    return (
        <Main>
            Soy Roadmap
        </Main>
    );
};

export default Roadmap;