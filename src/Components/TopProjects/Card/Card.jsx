import { useState, useEffect } from "react";
import { Container, Description, StyledImage, Item, Lang, Links, Anchor } from "./style";
import { Title } from "./style";
import githubicon from "../../../assets/github.png";
import linkico from "../../../assets/linkico.png";

function Card({ project }) {
    const [active, setActive] = useState(false);

    // Use useEffect para evitar re-renderizações infinitas
    useEffect(() => {
        if (project.page !== '') {
            setActive(true);
        }
    }, [project.page]); // Dependência para que o efeito rode apenas quando project.page mudar

    return (
        <Container>
            <Title>{project.title}</Title>
            <Lang>
                Lang/Framework: <span>{project.langfram}</span>
            </Lang>
            <Description>
                Description:{" "}
                <span>
                    {project.description}
                </span>
            </Description>
            <Links $active={active}>
                <Item $active={active}>
                    <StyledImage src={githubicon} alt="GitHub Icon" />
                    <Anchor href={project.repo} target="_blank">Github Repo</Anchor>
                </Item>
                {active && (
                    <Item>
                        <StyledImage src={linkico} alt="Link Icon" />
                        <Anchor href={project.page} target="_blank">Page</Anchor>
                    </Item>
                )}
            </Links>
        </Container>
    );
}

export default Card;
