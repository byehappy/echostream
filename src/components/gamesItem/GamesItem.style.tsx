import { NavLink } from "react-router-dom";
import styled from "styled-components";
const TextBase= `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    `

export const Container = styled(NavLink)`
  ${TextBase};
  display: flex;
  flex-flow: row wrap;
  width: 11rem;
  overflow: hidden;
  margin: 1%;
  box-shadow: 0 5px 10px rgb(0 0 0 / 80%);
  transform-origin: center top;
  transform-style: preserve-3d;
  transform: translateZ(0);
  transition: 0.3s;
  position: relative;
  img{
    min-height: 100%;
  }
  h2{    bottom: 0;
    left: 0;
    right: 0;
    padding: 30px;
    font-size: 20px;
    background: none;
    color: #fff;
    transform: translateY(100%);
    transition: 0.3s;
    position: absolute;
    text-shadow: 5px 0 5px #282c34;
    &:after{
      content: '';
      z-index: 10;
      top: -90%;
      left: -20px;
      opacity: .1;
      transform: rotate( 45deg );
      background: linear-gradient( to top, transparent, #fff 15%, rgba( #fff, .5 ) );
      transition: .3s;
    }
  }
  
  &:hover, &:focus, &:active{
    box-shadow: 0 8px 16px 3px rgba( #000, .6 );
    transform: translateY( -3px ) scale( 1.05 ) rotateX( 15deg );
    h2{transform: none}
    &:after{
      transform: rotate( 25deg );
      top: -40%;
      opacity: .15;
    }
  }
`