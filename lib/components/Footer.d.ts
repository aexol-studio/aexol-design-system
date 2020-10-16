import * as React from 'react'
declare type FooterColumnsTxt = {
  objects: Array<{
    title?: string
    objects: Array<{
      name: string
      link: string
    }>
  }>
}
export interface FooterComponentProps {
  FooterColumnsTxt: FooterColumnsTxt
  backgroundColor?: 'black' | 'white'
  copyright: string
  logo?: JSX.Element
  showLogo?: boolean
}
export declare const Footer: React.FunctionComponent<FooterComponentProps>
export {}
