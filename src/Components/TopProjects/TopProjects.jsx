import { useState } from "react";
import {
  Container,
} from "./style";
import { Title } from "./style";
import { CardContainer } from "./style";
import Card from "./Card/Card";

function TopProjects() {

    const TopProjectsList = [
        
        {
          title: 'Patient Scheduler',
          langfram: "NodeJS",
          description: 'Simple Patient Scheduler using nodemailer, full calendar and express.',
          repo: 'https://github.com/BrunoYDev/PatientScheduler',
          page: ''
        },
        {
          title: 'Game Manager API',
          langfram: "Javascript",
          description: 'This API allows you to manage a collection of games and users. You can perform operations such as retrieving, creating, updating, and deleting games, managing users, and authenticating users. All game-related routes require a valid JWT token, which is obtained upon successful login.',
          repo: 'https://github.com/BrunoYDev/GamesApi',
          page: ''
        },
        {
          title: 'Etch a Sketch',
          langfram: "Javascript",
          description: 'A sketchboard made entirely with javascript where you can drawn simple pixel art.',
          repo: 'https://github.com/BrunoYDev/Etch-a-Sketch',
          page: 'https://brunoydev.github.io/Etch-a-Sketch/'
        },
        {
          title: "Contact Agenda",
          langfram: "TS/ReactJS",
          description: "This web app, designed entirely by me, utilizes advanced technologies in the backend (NestJS with TypeScript and PostgreSQL) and frontend (ReactJS with Styled Components), featuring efficient API integration (Axios), smooth navigation (React Router DOM), and additional functionality with PDFKit for dynamic PDF report generation.",
          repo: "https://github.com/BrunoYDev/Agenda-de-contatos",
          page: ""
        },
    ]


  return (
    <>
      <Container>
        <Title>Top Projects</Title>
        <CardContainer>
            {TopProjectsList.map((item, index) => (
                <Card
                key={index}
                project={item}
                />
            ))}
        </CardContainer>
      </Container>
    </>
  );
}

export default TopProjects;
