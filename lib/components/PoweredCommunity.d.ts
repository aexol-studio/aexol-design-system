import * as React from 'react'
import { ICommunityCardProps } from './CommunityCard'
export interface IPoweredCommunityProps {
  header: string
  cards: ICommunityCardProps[]
  smallText?: string
  bigText?: string
  style?: React.CSSProperties
}
export declare const PoweredCommunity: React.FunctionComponent<
  IPoweredCommunityProps
>
