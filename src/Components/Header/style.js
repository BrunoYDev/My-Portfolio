import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`

    margin: 0;
    padding: 0;
    width: 100vw;
    max-height: 85px;
    background-color: #0A0A0B;

    overflow: hidden;

    display: flex;
    justify-content: space-evenly;


    border-bottom: 2px solid white;
    box-shadow: 0px 6px 4px #00000040;

`;

export const Heading = styled.div`

    margin: 0 auto;
    padding: 0;
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;

    justify-self: center;

`;


export const Title = styled.h1`

    font-family: 'roboto',sans-serif;
    color: #FFFFFF;

    font-weight: bold;

    align-self: center;
    
`
export const Figure = styled.figure`

    margin-right: 10px;
    padding: 0;
    width: 48px;
    min-height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const ImagePic = styled.img`

    width: 48px;
    height: 48px;
    border-radius: 100px;
    padding: 0;
    margin: 0;

`

export const Navbar = styled.nav`

    margin: 0;
    padding: 0;

    width: fit-content;
    display: flex;
    align-self: center;

    position: absolute;
    right: 60px;
    
    gap: 20px;

`

export const NavbarItem = styled.p`

    color: white;
    font-family: 'roboto',sans-serif;

    font-weight: 100;
    font-size: 18px;

    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};

    

    &:hover{
        cursor: pointer;
    }
`

export const StyledLink = styled(Link)`

    color: white;
    font-family: 'roboto',sans-serif;

    text-decoration: ${(props) => (props.active ? 'underline' : 'none')};

    font-weight: 100;
    font-size: 18px;

`