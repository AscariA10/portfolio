import { BurgerMenu } from "../../assets/svg-components/BurgerMenu";

import { Container } from "../common/container/Container";

import { MainHeader, Logo } from "./Header.styled";

export const Header: React.FC = () => {
   return (
      <MainHeader>
         <Container>
            <div>
               <Logo>portfolio</Logo>
               <BurgerMenu />
            </div>
         </Container>
      </MainHeader>
   );
};
