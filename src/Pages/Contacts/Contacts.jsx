import { useState } from "react";
import {
  AllContacts,
  Card,
  ContactHeader,
  ContactsContainer,
  Container,
  Name,
  StyledA,
  StyledImage,
  Subname,
  TextContainer,
  Title,
} from "./style";
import emailico from "../../assets/email.png";
import phoneico from "../../assets/phone.png";
import linkedinico from "../../assets/linkedin.png";
import Footer from "../../Components/Footer/Footer";

function Contacts() {
  return (
    <>
      <Container>
        <ContactsContainer>
          <ContactHeader>
            <Title>Contacts</Title>
          </ContactHeader>

          <AllContacts>

            <StyledA href="mailto:bruno.rogues.garcia@gmail.com" target="_blank">
            <Card>
              <StyledImage src={emailico} />
              <TextContainer>
                <Name>My Email</Name>
                <Subname>bruno.rogues.garcia@gmail.com</Subname>
              </TextContainer>
            </Card>
            </StyledA>

            <StyledA href="https://api.whatsapp.com/send/?phone=5513996428264&text&type=phone_number&app_absent=0" target="_blank">
            <Card>
              <StyledImage src={phoneico} />
              <TextContainer>
                <Name>My Number</Name>
                <Subname>+55 (13) 99642-8264</Subname>
              </TextContainer>
            </Card>
            </StyledA>

            <StyledA href="https://www.linkedin.com/in/brunogarciaydev/" target="_blank">
            <Card>
              <StyledImage src={linkedinico} />
              <TextContainer>
                <Name>My Linkedin</Name>
                <Subname>in/brunogarciaydev/</Subname>
              </TextContainer>
            </Card>
            </StyledA>

          </AllContacts>

        </ContactsContainer>
      </Container>
      <Footer/>
    </>
  );
}

export default Contacts;
