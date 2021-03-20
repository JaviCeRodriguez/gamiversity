import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { GiGlassHeart, GiMeditation, GiDespair } from 'react-icons/gi';
import { cuenta } from '../../database/cuenta-hardcodeada';
import { Main, DataContainer, DataWrapper, Figure, StyledButton, Icon } from './Perfil.styled';
import Foto from '../../assets/img/foto.png';
import db from '../../lib/firebase';

const Perfil = () => {
    const perfil = cuenta[0]; // TODO: en lugar de un valor numérico fijo, obtener un id de colección

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

        perfil.subjects.push(values);
        setValues({ ...initialValues });
    }

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Hook to handle the initial fetching of posts
    
        db.collection("usuarios")
          .orderBy("name", "desc")
          .get()
          .then((querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
    
            setPosts(data);
          });
      }, []);

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
                    <div>
                        {posts.map((post) => (
                            <div>
                                <p>{post.name}</p>
                                <p>{post.id}</p>
                            </div>
                        ))}
                    </div>
                    {/* <p><label>Nombre: </label>{perfil.name}</p>
                    <p><label>Edad: </label>{perfil.age} años</p>
                    <p><label>Ubicación: </label>{perfil.location}</p>
                    <p><label>Carrera: </label>{perfil.career}</p>
                    <p><label>Duración: </label>{perfil.duration} meses</p>
                    <p><label>Materias: </label>{perfil.subjects.length}</p> */}
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
                        <StyledButton>Agregar al roadmap</StyledButton>
                    </form>
                </DataWrapper>
            </DataContainer>
        </Main>
    );
};

export default Perfil;