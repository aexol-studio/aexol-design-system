import * as React from 'react'
import { Colors } from './styles/Colors'
declare type ImgPosition = 'bottom' | 'center'
export interface IHero1ImgProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  buttonOnClick: (e: HTMLAnchorElement) => void
  imgFile: React.ReactNode
  imgPosition?: ImgPosition
  height?: number
  style?: React.CSSProperties
  imgStyle?: React.CSSProperties
}
export declare const Hero1Img: React.FunctionComponent<IHero1ImgProps>
export {}
