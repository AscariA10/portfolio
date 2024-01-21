import { IChildrenProp } from "../../../interfaces/component-int";
import { Wrapper } from "./Container.styled.ts";

export const Container: React.FC<IChildrenProp> = ({ children }: IChildrenProp) => {
   return <Wrapper>{children}</Wrapper>;
};
