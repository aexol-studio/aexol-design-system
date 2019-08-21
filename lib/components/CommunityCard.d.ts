import * as React from 'react'
import { Colors } from './styles/Colors'
export interface ICommunityCardProps {
  val: string
  description: string
  backColor: keyof typeof Colors
  icon: JSX.Element
  style?: React.CSSProperties
}
export declare const CommunityCard: React.FunctionComponent<ICommunityCardProps>
