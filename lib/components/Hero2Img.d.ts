import * as React from 'react'
import { Colors } from './styles/Colors'
export interface IHero2ImgProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  buttonOnClick: (e: HTMLAnchorElement) => void
  imgFile1: React.ReactNode
  imgFile2: React.ReactNode
  height?: number
  style?: React.CSSProperties
}
export declare const Hero2Img: React.FunctionComponent<IHero2ImgProps>
