import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { GiGlassHeart, GiMeditation, GiDespair } from 'react-icons/gi';
import { Main, DataContainer, DataWrapper, Figure, StyledButton, Icon } from './Perfil.styled';
import Foto from '../../assets/img/foto.png';
import { db } from '../../lib/firebase';

const Perfil = () => {
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

    const [user, setUser] = useState([]);

    const userName = "javo" // Hardcodeado porque no implementé autenticación

    const getUser = async () => {
        db.get().then(snapshot => {
            const userData = snapshot.docs.map(doc => 
                doc.data().name === userName ?   
                    {
                        id: doc.id,
                        ...doc.data()
                    } : ''
            )
            setUser(userData);
        });
    }

    useEffect(() => {
        getUser();
    // eslint-disable-next-line
    }, [])
    
    return (
        <Main>
            <Figure>
                <img src={Foto} alt='Foto' />
            </Figure>
            <DataContainer>
                <DataWrapper row>
                    <p><Icon red><GiGlassHeart /></Icon> <label>Vida:</label> {user[0].life}</p>
                    <p><Icon green><GiMeditation /></Icon> <label>XP:</label> {user[0].exp}</p>
                    <p><Icon yellow><GiDespair /></Icon> <label>Estrés:</label> {user[0].stress}</p>
                </DataWrapper>
                <DataWrapper>
                    <p><label>Nombre: </label>{user[0].name}</p>
                    <p><label>Edad: </label>{user[0].age} años</p>
                    <p><label>Ubicación: </label>{user[0].location}</p>
                    <p><label>Carrera: </label>{user[0].career}</p>
                    <p><label>Duración: </label>{user[0].duration} meses</p>
                    <p><label>Materias: </label>{user[0].subjects.length}</p>
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
