import styled from "styled-components";


export const Container = styled.div`

    width: 100vw;
    height: 80vh;

    display: flex;
    flex-direction: column;

    gap: 30px;

    justify-content: center;
    align-items: center;

    button{
        margin: 0;
        padding: 0;

        width: 200px;
        height: 50px;

        font-size: 20px;

        font-family: 'roboto', sans-serif;

        font-weight: 400;
        color: white;

        border-radius: 10px;

        outline: none;
        border: 1px solid transparent;

        background-color: #003f9e;

        box-shadow: 6px 6px 5px #000000ff;

        &:hover{
            cursor: pointer;
            opacity: 50%;
        }
    }

    h1{
        font-family: 'roboto', sans-serif;
        font-weight: 700;

        color: white;

        font-size: 3rem;

        span{
            color: #e30000; 
        }
    }


`;