import styled from "styled-components";
const TextBase= `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    font-size:1vw
    `

export const ContainerOverlay = styled.div`
  position: absolute;
  opacity: 90%;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-radius: calc(15 * 1px);
  background-color: #363636;
  transform: translateY(100%);
  transition: .2s ease-in-out;
`
export const ContainerHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: .5vw;
  border-radius: calc(15 * 1px);
  background-color: #363636;
  transform: translateY(-100%);
  transition: .2s ease-in-out;
`
export const Container = styled.div`
  background: #363636;
  position: relative;
  display: block;
  height: 15vw;
  border-radius: calc(15 * 1px);
  overflow: hidden;
  text-decoration: none;
  ${TextBase};
  :hover{${ContainerOverlay}{
    transform: translateY(0);
  }
    ${ContainerHeader}{
      transform: translateY(0);
    }
  }
  img{
    width: 21vw;
    height: 13vw;
  }
`
export const ContainerTitle=styled.div`
  margin: 0 0 .3em
`


export const ContainerDesr=styled.div`
  padding: 0 .6vw .6em;
  color: #D7BDCA;
  ${TextBase};
  display: -webkit-box;
  overflow: hidden;
`



