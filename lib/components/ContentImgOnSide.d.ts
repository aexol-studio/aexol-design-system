import * as React from 'react'
export interface IContentImgOnSideProps {
  title: string
  text: string
  imgSide?: 'right' | 'left'
  linkText?: string
  linkHref: string
  linkTarget?: string
  imgFile: string
  style?: React.CSSProperties
}
export declare const ContentImgOnSide: React.FunctionComponent<
  IContentImgOnSideProps
>
