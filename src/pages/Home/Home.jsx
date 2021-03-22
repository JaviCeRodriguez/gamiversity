import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Main, StyledButton, HandleSection } from './Home.styled';

const Home = () => {
    const [ resumen, setResumen ] = useState(true);
    const [ objetivos, setObjetivos ] = useState(false);
    
    const handleClickResumen = () => {
        setObjetivos(false);
        setResumen(true);
    }

    const handleClickObjetivos = () => {
        setResumen(false);
        setObjetivos(true);
    }

    return(
        <Main>
            <h1>Gamiversity - Tu vida estudiantil, como si fuera un juego</h1>
            <ButtonGroup variant="contained">
                <StyledButton onClick={handleClickResumen}>Resumen</StyledButton>
                <StyledButton onClick={handleClickObjetivos}>Objetivos</StyledButton>
                <StyledButton disabled>Login</StyledButton>
            </ButtonGroup>
            {
                resumen ? 
                    <HandleSection>
                        <p>
                            <h3>¿Qué es Gamiversity? 👀</h3>
                            Gamiversity es el lugar indicado para que puedas gamificar tu vida universitaria y obtener logros
                            por aprobar materias. Acá te dejamos un resumen del funcionamiento de la plataforma:
                            <ul>
                                <li><b>Aprobás una materia</b> 👉 subís exp y vida, el stress baja un poco</li>
                                <li><b>Aprobás todas las materias de un cuatrimeste</b> 👉 subís el doble de exp y vida, el stress baja el doble</li>
                                <li><b>Recursas una materia</b> 👉 obtienes poca exp y baja la vida, el stress aumenta bastante</li>
                            </ul>
                        </p>
                    </HandleSection> :
                    <HandleSection hidden>Si ves esto, no deberías</HandleSection> 
            }
            { 
                objetivos ? 
                    <HandleSection>
                        <p>
                            <h3>¿Cuáles son los objetivos de Gamiversity? 🤔</h3>
                            <ul>
                                <li><b>El objetivo principal es que sea más llevadera las cursadas</b>: Que te puedas plantear un ambiente más agradable para
                                    colocarte metas y aprobar.</li>
                                <li><b>Lograr una competencia contra uno mismo</b>: La mayoría de nosotros fuimos o somos estudiantes y a veces no tenemos
                                    ganas de seguir estudiando. Con este método, podrás obtener mejores resultados y "vencer" a uno mismo.
                                </li>
                                <li><b>Podés tener un control de tu plan de estudios</b>: A veces el sistema de la facultad (SIU, por ejemplo) no funciona.
                                    Entonces, podrás ver la cantidad de materias aprobadas, sin tener que ver tus notas antes.
                                </li>
                            </ul>
                        </p>
                    </HandleSection> : 
                    <HandleSection hidden>Si ves esto, no deberías</HandleSection> 
            }
        </Main>
    );
};

export default Home;