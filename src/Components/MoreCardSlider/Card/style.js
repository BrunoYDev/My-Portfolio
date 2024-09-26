import styled from "styled-components";


export const Container = styled.li`

    margin-left: 0;
    padding: 0;
    width: fit-content;
    background-color: black;

    position: relative;

    display: flex;

    border-radius: 10px;

`;


export const StyledImage = styled.img`

    width: 250px;
    height: 200px;

    object-fit: cover;

    background-color: black;

    border: 5px solid black;

    box-shadow: 6px 6px 4px #00000025;

    border-radius: 10px;
`;

export const Tag = styled.p`

    width: 162px;
    height: 27px;

    min-width: 162px;
    min-height: 27px;

    max-width: 162px;
    max-height: 27px;

    font-family: 'roboto', sans-serif;
    
    font-size: 16px;

    font-weight: 700;

    background-color: #ADADAD;

    color: black;

    border-radius: 0px 10px 10px 0px;

    text-align: center;

    display: flex;

    align-items: center;

    justify-content: end;

    padding-right:20px;

    position: absolute;

    left: 0px;

    bottom: 10px;

`;