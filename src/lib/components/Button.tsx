import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/ButtonStyle';

type ButtonType = 'primary' | 'danger' | 'success' | 'submit'

export interface IButtonProps {
  type?: ButtonType,
  onClick?: (e: HTMLButtonElement) => void,
}

export const Button: React.FunctionComponent<IButtonProps> = (props) => {
  const {
    type = 'primary',
    onClick
  } = props
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e.currentTarget)
    }
  }

  return (
    <button
      className={classnames(
        styles.Button,
        type
      )}
      onClick={handleClick}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {props.children}
    </button>
  )
};

export default Button;
