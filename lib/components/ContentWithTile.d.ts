import * as React from 'react'
export interface IContentWithTileProps {
  title: string
  text: string
  linkText?: string
  linkHref: string
  linkTarget?: string
  imgFile: string
  violetBakground?: boolean
  style?: React.CSSProperties
}
export declare const ContentWithTile: React.FunctionComponent<
  IContentWithTileProps
>
