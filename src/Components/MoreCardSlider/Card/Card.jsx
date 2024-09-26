import { useState, useEffect } from "react";
import { Container, StyledImage, Tag } from "./style";


function Card({item}) {

    return (
        <Container>
            <Tag>{item.title}</Tag>
            <StyledImage src={item.img} />
        </Container>
    );
}

export default Card;
