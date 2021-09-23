import styled from "styled-components"

export const Nav = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
`

export const Container = styled('div')`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  padding: 2rem;
  max-width: 1000px;
  width: 100%;

  svg {
    cursor: pointer;
    height: 1.4rem;
  }
`

export const Menu = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    overflow: hidden;
    border-radius: 1rem;
    margin-top: 1rem;
    box-shadow: -4px 8px 15px 1px rgba(0, 0, 0, 0.07);
    max-height: ${props => props.isOpen ? "300px" : "0"};
    width: 100%;
    transition: max-height .3s ease-in-out;
  }
`

export const LinkWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1.5rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const MenuLink = styled('a')`
  border-radius: .5rem;
  color: #858586;
  font-size: .9rem;
  font-weight: 500;
  padding: .7rem 1.5rem;
  text-decoration: none;
  transition: all .2s ease;

  &:hover {
    color: #7781d4;
    background: #e7e9fc;
  }
`

export const Button = styled('button')`
  background: #f774c5;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 13px 24px -7px #ecb6d7;
  color: #fff;
  cursor: pointer;
  font-size: .7rem;
  margin-left: .5rem;
  padding: .8rem 1.1rem;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 7px 16px -11px #ecb6d7;
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    //display: none;
  }
`

export const Hamburger = styled('div')`
  display: none;
  flex-direction: column;

  span {
    background: #f774c5;
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }

  @media (max-width: 768px) {
    display: flex;
  }

`
