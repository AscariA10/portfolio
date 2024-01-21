import { Section } from "../../common/Section/Section";
import { Container } from "../../common/Container/Container";
import { Name, AboutMe } from "./Hero.styled";

export const Hero: React.FC = () => {
   return (
      <Section>
         <Container>
            <Name>Kravchenko Volodymyr</Name>
            <AboutMe>
               I am a newly minted Front-End engineer. My goal is to find a company where I can show
               my full potential as a frontend developer. I continue my study every day, to become a
               better specialist
            </AboutMe>
         </Container>
      </Section>
   );
};
