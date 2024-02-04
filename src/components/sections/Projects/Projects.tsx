import { Section } from "../../common/Section/Section";
import { Container } from "../../common/Container/Container";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";

import { ProjectCard } from "../../ProjectCard/ProjectCard";

import projectImage from "../../../assets/images/nastol.com.ua-551376.jpg";

import { ProjectsContent } from "./Projects.styled";

export const Projects: React.FC = () => {
   return (
      <Section>
         <Container>
            <ProjectsContent>
               <SectionTitle title="projects" />
               <ProjectCard
                  title="1st project"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos animi, nostrum distinctio expedita adipisci, a fuga architecto reiciendis vel iste quibusdam quam voluptatum! Ea eos doloribus, debitis reiciendis soluta et?"
                  techStack={["html", "css", "js", "js", "js"]}
                  image={projectImage}
               />
            </ProjectsContent>
         </Container>
      </Section>
   );
};
