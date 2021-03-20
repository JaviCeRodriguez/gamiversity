import styled from "styled-components";
import Button from '@material-ui/core/Button';

export const Main = styled.main`
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

export const Figure = styled.figure`
    // height: 80%;
    img {
        width: 16rem;
        border-radius: 1rem;
    }
`

export const DataContainer = styled.section`
    width: 30rem;
`

export const DataWrapper = styled.div`
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

export const Icon = styled.label`
    color: ${props => props.red ? "red" : props.green ? "green" : "yellow"}
`

export const StyledButton = styled(Button)`
    background-color: #13C322;
    width: 100%;
    font-weight: 700;
    padding: 0.5rem 2rem;
    &:hover {
        background-color: #13D322;
        box-shadow: 0.3rem 0.3rem 0rem black;
    }
`