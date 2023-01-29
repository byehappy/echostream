import styled from "styled-components";
const TextBase= `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    `

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  height: 100vw;
  background: rgba(0,0,0,0.25);
  overflow: hidden;
  top: 0;
  left: 0;
  flex-direction: row;
  justify-content: center;
  padding-top: 10rem;
  z-index: 999;
`

export const ContainerItem =styled.div`
  background: #393939;
  width: 50%;
  height: 30%;
  padding: 3rem;
  border-radius: 15px;
  border: 3px solid black;
  ${TextBase},
`
export const Player = styled.iframe`
  width: 100%;
  height: 100%;
`