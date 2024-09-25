import styled from "styled-components";


export const Container = styled.li`

    margin: 0;
    padding: 0;
    min-height: 310px;
    min-width: 283px;
    background-color: #d9d9d924;

    display: flex;
    flex-direction: column;

    border-radius: 10px;

`;

export const Title = styled.h2`
    margin-left: 20px;
    font-family: 'roboto',sans-serif;
    font-weight: 700;
    font-size: 20px;
    color: #f8f9f2;

`

export const Lang = styled.h3`
    margin-left: 20px;
    font-family: 'roboto',sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #f8f9f2;

    span{
        background-color: #d9d9d9;
        color: black;
        padding: 2px 5px;
        border-radius: 5px;
    }

`
export const Description = styled.h3`
    margin-left: 20px;
    font-family: 'roboto',sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #f8f9f2;

    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
        max-width: 250px;
        min-height: 120px;
        max-height: 120px;
        overflow-y: auto;
    }

`

export const Links = styled.div`

    display: flex;
    margin: 0 auto;
    padding: 0;

    margin-bottom: 10px;

    width: 90%;

    justify-content: ${(props) => (props.$active ? 'space-around' : 'start')};

`

export const Item = styled.div`

    display: flex;
    align-items: center;
    gap: 8px;

    margin-left: ${(props) => (props.$active ? '0' : '13px')};
`

export const StyledImage = styled.img`



`

export const Anchor = styled.a`

    color: white;
    text-decoration: none;



    &:hover{
        cursor: pointer;
    }

`