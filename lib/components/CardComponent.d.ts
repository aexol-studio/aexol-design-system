import * as React from 'react'
import { Colors } from './styles/Colors'
export interface ICardComponentProps {
  boxText: string
  boxTitle: string
  barColor?: keyof typeof Colors
  style?: React.CSSProperties
}
export declare const CardComponent: React.FunctionComponent<ICardComponentProps>
