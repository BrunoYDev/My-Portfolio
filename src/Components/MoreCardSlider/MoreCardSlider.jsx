import { useState } from "react";
import { CardContainer, Container, Title } from "./style";
import Card from "./Card/Card";

function MoreCardSlider({ title, items }) {

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <CardContainer>
          {items.map((item, index) => (

            <Card 
            key={index}
            item={item}
            />

          ))}
        </CardContainer>
      </Container>
    </>
  );
}

export default MoreCardSlider;
