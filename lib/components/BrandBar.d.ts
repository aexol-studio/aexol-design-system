import * as React from 'react'
declare type BrandBar = {
  logo: string
  link?: string
}
export interface IBrandBarProps {
  BrandBar: BrandBar[]
  smallText?: string
  bigText?: string
  style?: React.CSSProperties
}
export declare const BrandBar: React.FunctionComponent<IBrandBarProps>
export {}
