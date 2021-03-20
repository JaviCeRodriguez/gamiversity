import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom"
import styled from "styled-components";
import { GiCoffeeMug, GiMountainRoad, GiSettingsKnobs } from 'react-icons/gi';

const Menu = () => {
    const MenuStyle = styled.nav`
        background-color: #ffc107;
        border-left: 0.1rem solid black;
        border-radius: 0 0.5rem 0.5rem 0;
        width: 4rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    `

    const LinkStyle = styled(Link)`
        font-size: 2rem;
        color: black;
        transition-duration: 500ms;
        &:hover {
            color: #FFF;
        }
    `

    return(
        <MenuStyle>
            <Router>
                <LinkStyle to='/'> <GiCoffeeMug /> </LinkStyle>
                <LinkStyle to='/roadmap'> <GiMountainRoad /> </LinkStyle>
                <LinkStyle to='/perfil'> <GiSettingsKnobs /> </LinkStyle>
            </Router>
        </MenuStyle>
    );
};

export default Menu;

// GiCoffeeMug
// GiMountainRoad
// GiSettingsKnobs