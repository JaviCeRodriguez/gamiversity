import React from 'react';
import styled from "styled-components";
import { GiGlassHeart, GiMeditation, GiDespair } from 'react-icons/gi';
import { cuenta } from '../../database/cuenta-hardcodeada'
import Foto from '../../assets/img/foto.png';

const Perfil = () => {
    const Main = styled.main`
        background-color: #e4e4e4;
        border-radius: 0.5rem 0 0 0.5rem;
        font-family: 'Blinker', sans-serif;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    `

    const Figure = styled.figure`
        height: 80%;
        img {
            width: 14rem;
            border-radius: 1rem;
        }
    `

    const DataContainer = styled.section`
        width: 30rem;
    `

    const DataWrapper = styled.div`
        display: flex;
        flex-direction: ${props => props.row ? "row" : "column"};
        justify-content: ${props => props.row ? "space-evenly" : "center"};
        align-items: ${props => props.row ? "center" : "self-start"};
    `

    const Icon = styled.label`
        color: ${props => props.red ? "red" : props.green ? "green" : "yellow"}
    `

    const perfil = cuenta[0];

    return (
        <Main>
            <Figure>
                <img src={Foto} alt='Foto' />
            </Figure>
            <DataContainer>
                <DataWrapper row>
                    <p><Icon red><GiGlassHeart /></Icon> Vida: <label>{perfil.life}</label></p>
                    <p><Icon green><GiMeditation /></Icon> XP: <label>{perfil.exp}</label></p>
                    <p><Icon yellow><GiDespair /></Icon> Estrés: <label>{perfil.stress}</label></p>
                </DataWrapper>
                <DataWrapper>
                    <p>Nombre: <label>{perfil.name}</label></p>
                    <p>Edad: <label>{perfil.age} años</label></p>
                    <p>Ubicación: <label>{perfil.location}</label></p>
                    <p>Carrera: <label>{perfil.career}</label></p>
                    <p>Duración: <label>{perfil.duration}</label> meses</p>
                    <p>Materias: <label>{perfil.subjects.length}</label></p>
                </DataWrapper>
                <DataWrapper>

                </DataWrapper>
            </DataContainer>
        </Main>
    );
};

export default Perfil;