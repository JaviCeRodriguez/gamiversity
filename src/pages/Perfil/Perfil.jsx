import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { GiGlassHeart, GiMeditation, GiDespair } from 'react-icons/gi';
import { Main, DataContainer, DataWrapper, Figure, StyledButton, Icon } from './Perfil.styled';
import Foto from '../../assets/img/foto.png';

const Perfil = (props) => {
    const { user } = props

    const initialValues = {
        subject: '',
        quarter: '',
    };

    const [values, setValues] = useState(initialValues);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        // user.subjects.push(values);
        console.log(values)
        setValues({ ...initialValues });
    }
    
    return (
        <Main>
            <Figure>
                <img src={Foto} alt='Foto' />
            </Figure>
            <DataContainer>
                <DataWrapper row>
                    <p><Icon red><GiGlassHeart /></Icon> <label>Vida:</label> {user.life}</p>
                    <p><Icon green><GiMeditation /></Icon> <label>XP:</label> {user.exp}</p>
                    <p><Icon yellow><GiDespair /></Icon> <label>Estrés:</label> {user.stress}</p>
                </DataWrapper>
                <DataWrapper>
                    <p><label>Nombre: </label>{user.name}</p>
                    <p><label>Edad: </label>{user.age} años</p>
                    <p><label>Ubicación: </label>{user.location}</p>
                    <p><label>Carrera: </label>{user.career}</p>
                    <p><label>Duración: </label>{user.duration} meses</p>
                    <p><label>Materias: </label>{user.subjects.length}</p>
                </DataWrapper>
                <DataWrapper>
                    <form autoComplete='off' noValidate onSubmit={handleSumbit} >
                        <label>Agregar materias </label>
                        <div className='fields'>
                            <TextField 
                                onChange={handleInput} 
                                name='subject' 
                                value={values.subject} 
                                id="outlined-basic" 
                                label="Materia" 
                                variant="outlined" 
                                size="small" 
                            />
                            <TextField 
                                onChange={handleInput} 
                                name='quarter' 
                                value={values.quarter} 
                                id="outlined-basic" 
                                label="Cuatrimestre" 
                                variant="outlined" 
                                size="small" 
                            />
                        </div>
                        <StyledButton type='submit'>Agregar al roadmap</StyledButton>
                    </form>
                </DataWrapper>
            </DataContainer>
        </Main>
    );
};

export default Perfil;