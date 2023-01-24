import styled from "styled-components";

const TextBase = `
    font-family: 'Roboto Serif';
    font-style: 'normal';
    color: #ffffff;
    font-size: 200%;
    `
export const Container = styled.div`
  display: grid;
  width: 61%;
  grid-template-columns: 60% auto;
  grid-template-rows: 25rem;
  margin: 0 auto;
  background: #212121;
  border-radius: 25px;
  padding: 2rem;
`
export const Player = styled.iframe`
  height: 100%;
  width: 105%;
`

export const ChannelList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end
`
