import styled from "styled-components";

export const LoginForm = styled.div`
  padding: 15px 50px;
  
  & h2 {
    margin-top: 0;
    text-align: center;
    font-size: 36px;
    border: 4px solid violet;
    text-transform: uppercase;
    color: yellow;
    padding: 10px;
    letter-spacing: 0.05em;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: violet;
  }
  & form {
    display: flex;
    flex-direction: column;
    border: none;
    width: 100%;
  }
  & label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: violet;
    font-weight: 500;;
  }
  & input {
    font-size: 14px;
    margin-top: 5px;
    padding: 5px;
    border: 2px solid violet;
    outline: none;
    line-height: 1.25;
    background-color: yellow;
    &:hover {
      box-shadow: 0px 0px 4px 0px rgba(250, 107, 246, 1);
      transition: box-shadow 400ms;
    }
    &:focus {
      box-shadow: 0px 0px 6px 0px rgba(250, 107, 246, 1)
      transition: box-shadow 600ms;
    }
  }
  & button {
    max-width: 100px;
    margin: 0 auto;
    padding: 5px 10px;
    border: 2px solid yellow;
    text-align: center;
    text-transform: uppercase;
    color: yellow;
    background: violet;
    font-size: 16px;
    &:hover {
      color: violet;
      border-color: violet;
      background-color: yellow;
      transition: color 400ms, border-color 400ms, background-color 400ms;
    }
  }
`;