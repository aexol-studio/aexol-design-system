import * as React from 'react';
import * as styles from './styles/ContentStyles';
import { H2, P } from './typography';
import { Link } from './Link';
import * as classnames from 'classnames';

export interface IContentTextBoxProps {
  title: string;
  text: string;
  linkText?: string;
  tileView?: boolean;
  style?: React.CSSProperties;
}

export const ContentTextBox: React.FunctionComponent<IContentTextBoxProps> = (props) => {

  const {
    title,
    text,
    linkText = 'Read Article...',
    tileView = false,
    style,
    ...restProps
  } = props

  return (
    <div
      className={classnames({
        [styles.ContentTextBoxContainer]: true,
        tile: tileView
      })}
      style={style}
      {...restProps}
    >
      <H2 style={{marginBottom: 17}}>{title}</H2>
      <P style={{marginBottom: 37}}>{text}</P>
      <Link text={linkText} link={linkText} />
    </div>
  )
}
