// Style your elements here
import styled from 'styled-components'

export const Main = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #161617, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
`
export const Img = styled.img`
  height: 100px;
  width: 100px;
  margin: 20px 0px 10px 0px;
`
export const ParaText = styled.p`
    font-size: 23px;
    color: #e2e8f0;
    font-family: 'Roboto';
    ,
`
export const Button = styled.button`
  background-color: #06b6d4;
  padding: 8px 15px;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  outline: none;
`
