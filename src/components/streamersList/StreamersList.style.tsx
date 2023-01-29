import styled from "styled-components";

export const Container= styled.ul`
  padding-top: 2.5%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1vw));
  gap: 1vw;
  margin:auto;
  width: 65%;
  justify-content:  flex-start;
  flex-wrap: wrap;
  list-style-type: none;
  p{
    font-family: 'Roboto Serif';
    font-size: 200%;
    text-align: center;
    color: white;
  }
`