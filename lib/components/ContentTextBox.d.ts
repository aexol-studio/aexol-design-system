import * as React from 'react'
export interface IContentTextBoxProps {
  title: string
  text: string
  linkText: string
  linkHref: string
  tileView?: boolean
  linkTarget?: string
  style?: React.CSSProperties
}
export declare const ContentTextBox: React.FunctionComponent<
  IContentTextBoxProps
>
