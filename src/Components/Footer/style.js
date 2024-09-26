import styled from "styled-components";

export const Container = styled.div`

    margin: 0;
    padding: 0;
    width: 100vw;
    height: 10.7vh;
    background-color: #0A0A0B;


    display: flex;

    justify-content: center;
    align-items: center;

    border-top: 2px solid white;
    box-shadow: 0px -6px 4px #00000040;
`;

export const SocialsContainer = styled.div`

    margin: 0;
    padding: 0;
    display: flex;

    h2{
        font-size: 36px;
        font-family: 'roboto', sans-serif;

        font-weight: 700;
        color: white;
    }
    
`;


export const Socials = styled.div`

    margin-left: 20px;
    padding: 0;
    display: flex;

    align-items: center;
    gap: 20px;

`;

export const StyledImage = styled.img`

    margin: 0;
    padding: 0;

    width: 48px;

    object-fit: cover;

    &:hover{
        opacity: 50%;
        cursor: pointer;
    }
    
`;