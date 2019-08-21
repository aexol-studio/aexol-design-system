import * as React from 'react'
export interface INavBarProps {
  onClick: (e: HTMLAnchorElement) => void
  buttonText: string
  children: string | React.ReactChildren | React.ReactNode
  logo?: React.ReactNode
  logoHref?: string
  color?: 'white' | 'black' | 'light'
  style?: React.CSSProperties
}
interface NavBarState {
  open: boolean
}
export declare const BAR_NUMBER = 6
export declare class NavBar extends React.PureComponent<
  INavBarProps,
  NavBarState
> {
  constructor(props: INavBarProps)
  handleClick: (e: HTMLAnchorElement) => void
  handleOpen: (e: React.SyntheticEvent<HTMLDivElement, Event>) => void
  render(): JSX.Element
}
export {}
