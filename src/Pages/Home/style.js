import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  padding: 20px;

  display: flex;
  gap: 10px;
`;

export const BgImage = styled.img`
  object-fit: cover;
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -25px;
  z-index: -1;

  @media screen and (max-width: 1200px) {
    width: 50vw; /* Em telas menores, a largura aumenta para 50% da viewport */
  }

  @media screen and (max-width: 768px) {
    width: 60vw; /* Em dispositivos móveis, a imagem ocupa 60% da viewport */
  }

  @media screen and (max-width: 480px) {
    width: 70vw; /* Em dispositivos menores, aumenta para 70% */
    height: auto; /* Deixa a altura se ajustar automaticamente */
  }
`;

export const DownloadCV = styled.button`
  height: 112px;
  width: 405px;
  position: absolute;
  right: 15%;
  bottom: 40%;
  background-color: #1379F0;
  box-shadow: 0px 6px 4px #00000040;

  font-family: 'roboto', sans-serif;

  outline: none;
  border: 1px solid transparent;
  border-radius: 10px;

  font-size: 40px;
  font-weight: 700;
  color: white;

  &:hover{
    cursor: pointer;
    opacity: 50%;
  }

  &:active{
    box-shadow: 0px 0px 0px #00000040;
  }
`;
