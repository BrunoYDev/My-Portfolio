import styled from "styled-components";


export const Container = styled.div`

    margin-top: 20px;
    padding: 20px;
    height: 250px;
    max-height: 250px;
    width: 98%;
    background-color: #D9D9D915;

    border-radius: 10px;

    display: flex;
    align-items: center;

    position: relative;


`;

export const CardContainer = styled.div`

    margin-top: 0;
    padding: 0;
    height: 250px;
    max-height: 250px;
    width: 100%;
    background-color: transparent;

    border-radius: 10px;

    display: flex;
    align-items: center;

    gap: 20px;
    position: relative;

    overflow-x: auto;

`;


export const Title = styled.h2`

    font-size: 48px;

    font-family: 'roboto', sans-serif;

    color: #F8F9F2;

    text-shadow: 6px 6px 4px #00000025;

    position: absolute;

    z-index: 1;

    top: -70px;

    left: 35px;

`
