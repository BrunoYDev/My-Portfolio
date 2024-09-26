import styled from "styled-components";

export const Container = styled.div`

  margin: 0;

  padding: 0;

  width: 100vw;

  height: 80vh;

  display: flex;

  align-items: center;

  flex-direction: column;

  justify-content: center;

`;

export const ContactsContainer = styled.div`

  min-width: 70%;

  min-height: 100%;

`;

export const ContactHeader = styled.div`

  width: 100%;

  height: 100px;

  border-bottom: 5px solid white;

  display: flex;

  align-items: center;
  justify-content: center;

`;

export const AllContacts = styled.div`

  min-width: 100%;

  min-height: 600px;

  display: flex;

  flex-direction: column;

  justify-content: center;
  gap: 65px;

  align-items: center;

  h2{
    color: white;
  }

`;

export const Title = styled.h2`

  font-size: 64px;

  font-family: 'roboto', sans-serif;

  font-weight: 700;

  color: #F8F9F2;

`;


export const Card = styled.div`

  width: 500px;

  display: flex;


  align-items: center;


  &:hover{
    cursor: pointer;
    opacity: 50%;
  }

`;


export const StyledImage = styled.img`

  width: 108px;

  height: 108px;


`;

export const TextContainer = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  

`;

export const Name = styled.h2`

  font-family: 'roboto', sans-serif;
  font-size: 34px;
  color: white;

  font-weight: 400;

  text-decoration: underline;

  margin: 0 auto;

`;

export const Subname = styled.h3`

  font-family: 'roboto', sans-serif;
  font-size: 18px;

  font-weight: 300;

  color: white;


`;

export const StyledA = styled.a`

  text-decoration: none;

`;