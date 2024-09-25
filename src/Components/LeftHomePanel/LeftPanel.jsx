import { useState } from "react";
import {
  Container,
  Presentation,
  SubPresentation,
  TextContainer,
} from "./style";
import TopProjects from "../TopProjects/TopProjects";

function LeftPanel() {
  return (
    <>
      <Container>
        <TextContainer>
          <Presentation>
            Hello, I'm a <span id="softwaredev">software developer</span>{" "}
            focused on creative solutions with <span id="js">JavaScript</span>.
          </Presentation>
          <SubPresentation>
            I specialize in backend development with <span id="node">Node.js</span>, and I also work
            with <span id="react">ReactJS</span> and <span id="react">React Native</span> while enhancing my skills in <span id="cc">Computer
            Science</span>.
          </SubPresentation>
        </TextContainer>

        <TopProjects/>

      </Container>
    </>
  );
}

export default LeftPanel;
