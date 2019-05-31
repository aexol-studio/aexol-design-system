import * as React from 'react'
import classnames from 'classnames'
import { Button } from '../components'
import * as styles from './styles/NavBarStyles'

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

export const BAR_NUMBER = 6

export class NavBar extends React.PureComponent<INavBarProps, NavBarState> {
  constructor(props: INavBarProps) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleClick = (e: HTMLAnchorElement) => this.props.onClick(e)

  handleOpen = (e: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const {
      color,
      onClick,
      logo,
      logoHref,
      buttonText,
      style,
      ...restProps
    } = this.props

    return (
      <div
        className={classnames(styles.NavBar, color)}
        style={style}
        {...restProps}
      >
        <div
          className={classnames({
            [styles.Container]: true,
            open: this.state.open
          })}
        >
          <div
            className={classnames({
              [styles.Hamburger]: true,
              open: this.state.open
            })}
            onClick={e => this.handleOpen(e)}
          >
            {new Array(BAR_NUMBER).fill(0).map((a, i) => (
              <div key={i} className={classnames(styles.Bar, color)} />
            ))}
          </div>
          <a className={styles.LogoContainer} href={logoHref}>
            {logo}
          </a>
          <div className={styles.ContentContainer}>
            <div className={classnames(styles.LinkContainer, color)}>
              {this.props.children}
            </div>
            <Button
              onClick={e => this.handleClick(e)}
              type={
                color === 'black'
                  ? 'secondary3'
                  : color === 'light'
                  ? 'secondary2'
                  : 'secondary'
              }
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
