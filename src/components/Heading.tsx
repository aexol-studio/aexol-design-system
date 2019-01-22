import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/HeadingStyle';

type HeadingType = 'jumbo' | 'h1' | 'h2' | 'h3'
type AlignType = 'left' | 'center' | 'right'

export interface IHeadingProps {
  type?: HeadingType,
  width?: number,
  align?: AlignType,
}

export const Heading: React.FunctionComponent<IHeadingProps> = (props) => {
  const {
    type = 'h1',
    align = 'left',
    width
  } = props

  return (
    <p
      className={classnames(
        styles.HeadingText,
        type,
        align
      )}
      style={{width: `${width}px`}}
    >
      {props.children}
    </p>
  )
};

export default Heading;