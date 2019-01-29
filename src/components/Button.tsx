import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/ButtonStyle';

type ButtonType = 'primary' | 'danger' | 'success' | 'submit'
type ButtonSize = 'large' | 'small' | 'default'
type ButtonShape = 'square' | 'round' | 'oval'

export interface IButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  width?: number;
  fullWidth?: boolean;
  onClick?: (e: HTMLButtonElement) => void;
  style?: React.CSSProperties;
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {
    type = 'primary',
    size = 'default',
    shape = 'round',
    disabled = false,
    width,
    fullWidth,
    style,
    onClick,
    ...restProps
  } = props
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e.currentTarget)
    }
  }

  return (
    <button
      className={classnames(classnames(
        styles.Button,
        type,
        size,
        shape
      ), classnames({
        disabled: disabled
      }))}
      onClick={handleClick}
      type={type === 'submit' ? 'submit' : 'button'}
      style={{
        width: fullWidth
          ? '100%'
          : width,
        ...style
      }}
      {...restProps}
    >
      {props.children}
    </button>
  )
};

export default Button;
