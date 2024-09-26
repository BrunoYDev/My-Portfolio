import { useState } from "react";
import {
  Container,
  Socials,
  SocialsContainer,
  StyledImage,
} from "./style";
import githubico from '../../assets/github2.png';
import itchioico from '../../assets/itchio.png';
import instagramico from '../../assets/instagram.png';


function Footer() {


  return (
    <>
      <Container>
        <SocialsContainer>
          <h2>Other Socials:</h2>
          <Socials>
            <a href="https://github.com/BrunoYDev" target="_blank"><StyledImage src={githubico} /></a>
            <a href="https://www.instagram.com/ykkos2" target="_blank"><StyledImage src={instagramico} /></a>
            <a href="https://ykkos2.itch.io/" target="_blank"><StyledImage src={itchioico} /></a>
          </Socials>
        </SocialsContainer>
      </Container>
    </>
  );
}

export default Footer;
