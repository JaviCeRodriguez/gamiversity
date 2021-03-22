import React from 'react';
import { Main, Icon } from './Roadmap.syled';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { MdCancel } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

const Roadmap = (props) => {
    const { user } = props
    let countId = 0;

    return (
        <Main>
            <header>
                <h1>Tu propia aventura es tu plan de estudio 🤓</h1>
                <h3>Sigue avanzando y subirás tus estadísticas!</h3>
            </header>
            <section>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="Plan de estudio">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center"><b>Cuatrimeste</b></TableCell>
                            <TableCell align="center"><b>Materia</b></TableCell>
                            <TableCell align="center"><b>Notas cursada</b></TableCell>
                            <TableCell align="center"><b>Aprobó / Recursó</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.subjects.map((sub) => (
                            <TableRow key={`${++countId}` + user.id}>
                                <TableCell component="th" scope="row">
                                    {sub.quarter}
                                </TableCell>
                                <TableCell align="center">{sub.subject}</TableCell>
                                <TableCell align="center">
                                    {sub.finalScore.join(', ')}
                                </TableCell>
                                <TableCell align="center">
                                    <FormControlLabel
                                        control={<Checkbox icon={<Icon><FaCheckCircle /></Icon>} 
                                        checkedIcon={<Icon checkA ><FaCheckCircle/></Icon>} 
                                        name="checkedA" />}
                                    />
                                    <FormControlLabel
                                        control={<Checkbox icon={<Icon><MdCancel /></Icon>} 
                                        checkedIcon={<Icon checkR><MdCancel/></Icon>} 
                                        name="checkedR" />}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </section>
        </Main>
    );
};

export default Roadmap;