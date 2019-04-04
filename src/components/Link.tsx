import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/LinkStyles'

export interface ILinkProps {
  text: string
  link: string
  strong?: boolean
  disabled?: boolean
  target?: string
  style?: React.CSSProperties
}

export const Link: React.FunctionComponent<ILinkProps> = props => {
  const {
    text,
    link,
    target,
    strong = false,
    disabled = false,
    style,
    ...restProps
  } = props

  return (
    <a
      className={classnames({
        [styles.LinkContainer]: true,
        strong: strong,
        disabled: disabled
      })}
      href={link}
      title={text}
      target={target}
      style={style}
      {...restProps}
    >
      {text}
    </a>
  )
}
