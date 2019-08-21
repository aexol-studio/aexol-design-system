import * as React from 'react'
export interface ILinkProps {
  text: string
  link: string
  strong?: boolean
  disabled?: boolean
  target?: string
  style?: React.CSSProperties
}
export declare const Link: React.FunctionComponent<ILinkProps>
