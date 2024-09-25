import styled from "styled-components";

export const Container = styled.div`
  margin-left: 50px;
  padding: 10px;
  width: 40%;
  height: 78vh;
  border: 9px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const TextContainer = styled.div`
    
    margin: 0;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;


export const Presentation = styled.h2`

    margin: 0;
    padding: 0;
    font-family: 'roboto',sans-serif;

    font-size: 40px;
    font-weight: 400;
    color: white;

    #softwaredev{
        color: #1378f0;
    }

    #js{
        color: #ffd700;
    }
`;


export const SubPresentation = styled.h3`

    margin: 0;
    padding: 0;
    font-family: 'roboto',sans-serif;

    font-size: 32px;
    font-weight: 400;
    color: #8e8e8e;

    #node{
        color: #ff4d4f;
    }

    #react{
        color: #1378f0;
    }

    #cc{
        color: #28c76f;
    }
`;
