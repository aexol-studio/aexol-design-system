import * as React from 'react'
export interface BlueTileComponentProps {
  BlueTileHeader: string
  BlueTileHeaderParagraph: string
  envelope?: string
  children?: React.ReactNode
  isVisible?: boolean
  ContactImg?: string
  id?: string
}
export declare const BlueTile: React.FunctionComponent<BlueTileComponentProps>
