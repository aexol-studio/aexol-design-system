import * as React from 'react'
import { Colors } from './styles/Colors'
declare type CardContentBoxText = {
  object: Array<{
    text: string
  }>
}
export interface ICardComponentProps {
  CardContentBoxText: CardContentBoxText
  boxTitle?: string
  squareColor?: keyof typeof Colors
  style?: React.CSSProperties
}
export declare const CardComponentV2: React.FunctionComponent<
  ICardComponentProps
>
export {}
