import styled from "styled-components"
import Tilt from "react-tilt"

export const Container = styled('div')`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${props => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`

export const Wrapper = styled('div')`
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`

export const InnerWrapper = styled('div')`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`

export const TiltWrapper = styled(Tilt)`
  width: 60%;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Left = styled('div')`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`