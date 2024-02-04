import { BurgerMenu } from "../../assets/svg-components/BurgerMenu";

import { Container } from "../common/Container/Container.tsx";

import { MainHeader, HeaderContent, Logo } from "./Header.styled";

export const Header: React.FC = () => {
   return (
      <MainHeader>
         <Container>
            <HeaderContent>
               <Logo>portfolio</Logo>
               <BurgerMenu />
            </HeaderContent>
         </Container>
      </MainHeader>
   );
};
