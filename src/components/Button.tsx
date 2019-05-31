import * as React from 'react'
import * as classnames from 'classnames'
import { PMedium } from './typography'
import * as styles from './styles/ButtonStyle'

type ButtonType =
  | 'primary'
  | 'danger'
  | 'success'
  | 'submit'
  | 'secondary'
  | 'secondary2'
  | 'secondary3'
type ButtonSize = 'small' | 'default'
type ButtonShape = 'square' | 'round' | 'oval'

export interface IButtonProps {
  type?: ButtonType
  size?: ButtonSize
  shape?: ButtonShape
  disabled?: boolean
  width?: number
  height?: number
  icon?: JSX.Element
  onClick?: (e: HTMLAnchorElement) => void
  href?: string
  target?: string
  style?: React.CSSProperties
}

const DEFAULT_WIDTH = 168
const DEFAULT_HEIGHT = 40

export const Button: React.FunctionComponent<IButtonProps> = props => {
  const {
    type = 'primary',
    size = 'default',
    shape = 'round',
    disabled = false,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    icon,
    style,
    onClick,
    href,
    target,
    ...restProps
  } = props
  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onClick) {
      onClick(e.currentTarget)
    }
  }

  return (
    <a
      className={classnames(
        classnames(styles.Button, type, shape, size),
        classnames({
          disabled: disabled
        })
      )}
      href={href}
      target={target}
      onClick={handleClick}
      style={{
        width: width,
        height: height,
        ...style
      }}
      {...restProps}
    >
      <React.Fragment>
        {icon}
        <PMedium>{props.children}</PMedium>
      </React.Fragment>
    </a>
  )
}

export default Button
