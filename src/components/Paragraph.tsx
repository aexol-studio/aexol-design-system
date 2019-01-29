import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/ParagraphStyle';

type ParagraphType = 'big' | 'medium' | 'small'
type AlignType = 'left' | 'center' | 'right'

export interface IParagraphProps {
  type?: ParagraphType;
  width?: number;
  align?: AlignType;
  style?: React.CSSProperties;
}

export const Paragraph: React.FunctionComponent<IParagraphProps> = (props) => {
  const {
    type = 'medium',
    align = 'left',
    width,
    style,
    ...restProps
  } = props

  return (
    <p
      className={classnames(
        styles.ParagraphText,
        type,
        align
      )}
      style={{
        width: width ? `${width}px` : '100%',
        ...style
      }}
      {...restProps}
    >
      {props.children}
    </p>
  )
};

export default Paragraph;
