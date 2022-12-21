import styled from "styled-components";

export const Description = styled.div`
display:flex;
justify-content:center;
align-items: center;
flex-direction: column;
    & h3{
        font-size: 30px;
        border: 4px solid violet;
        text-transform: uppercase;
        color: yellow;
        padding: 10px;
        letter-spacing: 0.05em;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: violet;
    }
    & p{
        font-size: 20px;
        color: yellow;
        text-transform: uppercase;
    }
`