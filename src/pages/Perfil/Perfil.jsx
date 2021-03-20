import React from 'react';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        // height: 80%;
        img {
            width: 16rem;
            border-radius: 1rem;
        }
    `

    const DataContainer = styled.section`
        width: 30rem;
    `

    const DataWrapper = styled.div`
        display: flex;
        border: 0.1rem solid black;
        border-radius: 0.3rem;
        padding: 0.3rem 0.8rem;
        margin: 0.5rem 0;
        flex-direction: ${props => props.row ? "row" : "column"};
        justify-content: ${props => props.row ? "space-evenly" : "center"};
        align-items: ${props => props.row ? "center" : "self-start"};

        p {
            line-height: 10%;
            label {
                font-weight: 600;
            }
        }

        form {
            width: 100%;
            height: 9rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            label {
                font-weight: 700;
            }
            .fields {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }
        }
    `

    const Icon = styled.label`
        color: ${props => props.red ? "red" : props.green ? "green" : "yellow"}
    `

    const StyledButton = styled(Button)`
        background-color: #13C322;
        width: 100%;
        font-weight: 700;
        padding: 0.5rem 2rem;
        &:hover {
            background-color: #13D322;
            box-shadow: 0.3rem 0.3rem 0rem black;
        }
    `

    const perfil = cuenta[0]; // TODO: en lugar de un valor numérico fijo, obtener un id de colección

    return (
        <Main>
            <Figure>
                <img src={Foto} alt='Foto' />
            </Figure>
            <DataContainer>
                <DataWrapper row>
                    <p><Icon red><GiGlassHeart /></Icon> <label>Vida:</label> {perfil.life}</p>
                    <p><Icon green><GiMeditation /></Icon> <label>XP:</label> {perfil.exp}</p>
                    <p><Icon yellow><GiDespair /></Icon> <label>Estrés:</label> {perfil.stress}</p>
                </DataWrapper>
                <DataWrapper>
                    <p><label>Nombre: </label>{perfil.name}</p>
                    <p><label>Edad: </label>{perfil.age} años</p>
                    <p><label>Ubicación: </label>{perfil.location}</p>
                    <p><label>Carrera: </label>{perfil.career}</p>
                    <p><label>Duración: </label>{perfil.duration} meses</p>
                    <p><label>Materias: </label>{perfil.subjects.length}</p>
                </DataWrapper>
                <DataWrapper>
                    <form autoComplete='off' noValidate>
                        <label>Agregar materias </label>
                        <div className='fields'>
                            <TextField id="outlined-basic" label="Materia" variant="outlined" size="small" />
                            <TextField id="outlined-basic" label="Cuatrimestre" variant="outlined" size="small" />
                        </div>
                        <StyledButton>Agregar al roadmap</StyledButton>
                    </form>
                </DataWrapper>
            </DataContainer>
        </Main>
    );
};

export default Perfil;