import * as React from 'react'
import { Colors } from './styles/Colors'
export interface IHeroBackImgWithTileProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  tilePosition?: 'left' | 'right'
  buttonOnClick: (e: HTMLAnchorElement) => void
  backgroundFile: string
  height?: number
  style?: React.CSSProperties
}
export declare const HeroBackImgWithTile: React.FunctionComponent<
  IHeroBackImgWithTileProps
>
