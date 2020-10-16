import * as React from 'react'
export interface IHeroImgOnBottomProps {
  headerText: string
  paragraphText: string
  buttonText: string
  buttonOnClick: (e: HTMLAnchorElement) => void
  imgFile1: React.ReactNode
  imgFile2: React.ReactNode
  imgFile3: React.ReactNode
  imgFile4: React.ReactNode
  height?: number
  style?: React.CSSProperties
}
export declare const HeroImgOnBottom: React.FunctionComponent<
  IHeroImgOnBottomProps
>
