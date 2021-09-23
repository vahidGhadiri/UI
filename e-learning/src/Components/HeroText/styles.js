import styled from "styled-components";

export const Container = styled("div")`
  padding: 1rem;

  h5 {
    color: #515151;
    font-weight: 500;
    font-size: .9rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 900;

    &:nth-of-type(1) {
      color: #af60ff;
      font-weight: 700;
    }

    &:nth-of-type(2) {
      color: #8849c7;
    }

    &:nth-of-type(3) {
      color: #651fac;
    }

    &:nth-of-type(4) {
      color: #3c0473;
    }
  }
`

export const BtnContainer = styled('div')`
  margin-top: 2rem;

  button {
    background-color: #81d1ff;
    border: none;
    padding: .9rem 1.1rem;
    color: #fff;
    border-radius: 1rem;
    box-shadow: 0 13px 24px -7px #81d1ff;
    transition: all .3s ease-in-out;
    margin: .5rem;
    font-size: .8rem;
    cursor: pointer;

    &:hover {
      box-shadow: 0 17px 16px -11px #81d1ff;
      transform: translateY(-5px);
    }

    &:first-child {
      color: #38b3ff;
      border: 3px solid #81d1ff;
      background: transparent;
    }
  }
`