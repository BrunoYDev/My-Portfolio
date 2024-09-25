import { useState } from "react";
import { Container, Description, StyledImage, Item, Lang, Links, Anchor } from "./style";
import { Title } from "./style";
import githubicon from "../../../assets/github.png";
import linkico from "../../../assets/linkico.png";

function Card({project}) {
    const [active, setActive] = useState("false");

    if(project.page){
        setActive("true");
    }

  return (
    <>
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
        <Links active={active}>
            <Item>
                <StyledImage src={githubicon} alt="Gitub Icon"/>
                <Anchor href={project.repo} target="_blank">Github Repo</Anchor>
            </Item>
            {active == 'true' && <Item>
                <StyledImage src={linkico} alt="Gitub Icon"/>
                <Anchor href={project.page} target="_blank">Page</Anchor>
            </Item>}
        </Links>
      </Container>
    </>
  );
}

export default Card;
