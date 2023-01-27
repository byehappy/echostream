import { NavLink } from "react-router-dom";
import styled from "styled-components";
const TextBase= `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    `

export const Container = styled(NavLink)`
  ${TextBase};
  word-wrap: break-word;
  width: 12.5rem;
`