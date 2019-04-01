import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/LinkStyles';
// import { H2, P } from './typography'

export interface ILinkProps {
  text: string;
  link: string;
  strong?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Link: React.FunctionComponent<ILinkProps> = (props) => {

  const {
    text,
    link,
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
      style={style}
      {...restProps}
    >
      {text}
    </a>
  )
}
