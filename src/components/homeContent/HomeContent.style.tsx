import styled from "styled-components";

export const TextBase = `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    font-size: 175%;
`

export const Container = styled.div`
  margin: 3% auto;
  width: 65%;
  display: grid;
  grid-template-columns: 75% 25%;
  text-align: left;
`

export const ContainerItem = styled.div`
    ${TextBase};
    h4{margin-top: 1.5%;
      color: #BEBEBE}
`