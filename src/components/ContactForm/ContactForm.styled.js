import styled from 'styled-components';


export const Form = styled.form`{
    display: flex;
    flex-direction: column;
    align-items: center;
}`;

export const Label = styled.label`{
    margin: 20px 0;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: yellow;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: violet;
    letter-spacing: 0.05em;
}`;

export const Input = styled.input`{
    height: 40px;
    border: 2px solid violet;
    padding-left: 10px;
    color: violet;
    background-color: yellow;
        &:hover{
            border: 4px solid yellow;
            color: yellow;
            background-color: violet;
        }
}`;

export const Button = styled.button`{
    margin: 30px;
    font-size: 20px;
    padding: 10px 20px;
    color: yellow;
    background-color: violet;
    border: 2px solid yellow;
    text-transform: uppercase;
    font-weight: bold;
        &:hover{
            border: 2px solid violet;
            padding-left: 10px;
            color: violet;
            background-color: yellow;
            padding: 20px 30px;
        }
}`;