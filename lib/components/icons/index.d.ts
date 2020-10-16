/// <reference types="react" />
import { Colors } from '../styles/Colors'
interface IIconFill {
  fill: keyof typeof Colors
}
interface IIconStroke {
  stroke: keyof typeof Colors
}
export declare const Profile: ({ fill }: IIconFill) => JSX.Element
export declare const BackArrow: ({ fill }: IIconFill) => JSX.Element
export declare const Close: ({ fill }: IIconFill) => JSX.Element
export declare const Check: ({ fill }: IIconFill) => JSX.Element
export declare const CheckBox: ({ fill }: IIconFill) => JSX.Element
export declare const Info: ({ fill }: IIconFill) => JSX.Element
export declare const Error: ({ stroke }: IIconStroke) => JSX.Element
export declare const Warning: ({ stroke }: IIconStroke) => JSX.Element
export declare const Success: ({ stroke }: IIconStroke) => JSX.Element
export declare const Eassy: ({ fill }: IIconFill) => JSX.Element
export declare const Mail: ({ fill }: IIconFill) => JSX.Element
export declare const Github: ({ fill }: IIconFill) => JSX.Element
export declare const Projects: ({ fill }: IIconFill) => JSX.Element
export declare const Users: ({ fill }: IIconFill) => JSX.Element
export declare const GraphQLlogo: () => JSX.Element
export {}
