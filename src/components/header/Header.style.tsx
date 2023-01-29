import styled from "styled-components";
import {NavLink} from "react-router-dom";

const TextBase =`
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    `
const LogoText = `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  Height: 4vw;
  margin: 0 auto ;
  justify-content: flex-start;
  align-items:center;
  width:65%;
`
export const Logo = styled.div`
  ${LogoText};
  display:flex;
  align-items:center;
  white-space: nowrap;
  margin-right: 5%;
  font-size: 2vw;
`


export const ContainerPlace = styled.ul`
  padding-inline-start:0;
  list-style-type: none;
  display:flex;
`
export const ContainerItem = styled.li`
  ${TextBase};
  display:flex;
  align-items:center;
  white-space: nowrap;
  margin: 5%;
    color:${(isActive) => isActive ? 'white' : 'grey'};
    text-decoration: none;
  font-size: 1.5vw;
`
export const Links = styled(NavLink)`
  text-decoration: none;
  color:grey;
  &.active{
    color: white;
  }
`