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
  align-items: center;
`

export const ContainerItem =styled.div`
  background: white;
  padding: 25px;
  border-radius: 5px;
  border: 3px solid black;
  ${TextBase}
`