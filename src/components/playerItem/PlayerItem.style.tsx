import styled from "styled-components";

const TextBase= `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    `

export const Channel = styled.button`
  width: 85%;
  background: #545454;
  height: 15%;
  border-radius: 12px;
  ${TextBase};
  text-align: start;
  img{
    border-radius: 100%;
    float: left;
    width: 3rem;
  }
  b{
    font-size: 1.5rem;
    padding-left: 0.25rem;
    font-weight: 500;
  } 
  div{
    color:#B8B8B8;
    padding-left: 3.4rem;
    padding-top: 0.1rem;
    font-size: 0.7rem;
  }
`