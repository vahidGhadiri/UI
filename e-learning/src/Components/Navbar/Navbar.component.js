import React, {useState} from "react"

import {Button, Container, Hamburger, Menu, LinkWrapper, MenuLink, Nav} from "./styles"
import {ReactComponent as LogoIcon} from "../../Assets/images/logo.svg";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Nav>
            <Container>
                <LogoIcon/>
                <Hamburger onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </Hamburger>
                <Menu isOpen={isOpen}>
                    <LinkWrapper>
                        <MenuLink href="#">Search</MenuLink>
                        <MenuLink href="#">Login</MenuLink>
                        <Button href="#">Join Now </Button>
                    </LinkWrapper>
                </Menu>
            </Container>
        </Nav>
    )
}

export default Navbar