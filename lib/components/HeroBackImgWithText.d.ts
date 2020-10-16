import * as React from 'react'
export interface IHeroBackImgWithTextProps {
  headerText: string
  paragraphText: string
  buttonText: string
  buttonOnClick: (e: HTMLAnchorElement) => void
  backgroundFile: string
  height?: number
  style?: React.CSSProperties
}
export declare const HeroBackImgWithText: React.FunctionComponent<
  IHeroBackImgWithTextProps
>
