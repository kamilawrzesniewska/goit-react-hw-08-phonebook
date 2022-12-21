import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  padding: 20px;
  text-align: center;
  color: violet;
  text-transform: uppercase;
`;

export const ForwardingLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;
  color: violet;
  &:hover,
  &:focus {
    color: yellow;
    scale: 2;
  }
`;