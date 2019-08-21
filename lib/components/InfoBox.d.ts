import * as React from 'react'
export interface IInfoBoxProps {
  title: string
  text: string
  linkText?: string
  link?: string
  style?: React.CSSProperties
}
export declare const InfoBox: React.FunctionComponent<IInfoBoxProps>
