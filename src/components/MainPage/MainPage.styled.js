import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    list-style-type: none;
  }
  & li { 
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  
  & p {
    padding: 5px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    text-align: center;
    & span {
      font-weight: 700;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  margin: 30px;
  padding: 10px 20px;
  font-size: 20px;
  border: 2px solid yellow;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: yellow;
  background: violet;
  &:hover,
  &:focus {
    scale: 1.05;
  }
  &.active {
    font-size: 24px;
    color: violet;
    background: yellow;
    border: violet;
  }
`



export const PageTitle = styled.h1`
  font-size: 80px;
  border: 4px solid violet;
  text-transform: uppercase;
  color: yellow;
  padding: 10px;
  letter-spacing: 0.05em;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: violet;
`;