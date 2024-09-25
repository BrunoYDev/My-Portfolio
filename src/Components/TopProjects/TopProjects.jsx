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
            title: "TDD-Project",
            langfram: "JS/Node",
            description: "Simple User API made for practice TDD(Test Driven Development)",
            repo: "https://github.com/BrunoYDev/TDD-Project",
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
