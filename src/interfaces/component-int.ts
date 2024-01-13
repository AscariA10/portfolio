import { Iheight, Iwidth } from "./style-int";

export interface IChildrenProp {
   children: React.ReactNode;
}

export interface IsizeProps extends IChildrenProp {
   width: Iwidth;
   height: Iheight;
}

// export interface Ibutton {
//    title: string;
// }

// export interface IsectionTitle {
//    title: string;
// }

// export interface IvalueCard extends IcommonProps {
//    title: string;
//    description: string;
// }
