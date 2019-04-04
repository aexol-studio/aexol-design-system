import * as React from 'react';
import * as classnames from 'classnames';
import { PMedium } from './typography';
import * as styles from './styles/ButtonStyle';

type ButtonType = 'primary' | 'danger' | 'success' | 'submit' | 'secondary' | 'secondary2' | 'secondary3';
type ButtonSize = 'small' | 'default';
type ButtonShape = 'square' | 'round' | 'oval';

export interface IButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  shape?: ButtonShape;
  disabled?: boolean;
  width?: number;
  icon?: JSX.Element;
  onClick?: (e: HTMLButtonElement) => void;
  href?: string;
  target?: string;
  style?: React.CSSProperties;
}

export const Button: React.FunctionComponent<IButtonProps> = props => {
  const {
    type = 'primary',
    size = 'default',
    shape = 'round',
    disabled = false,
    width,
    icon,
    style,
    onClick,
    href,
    target,
    ...restProps
  } = props;
  const handleClick = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e.currentTarget);
    }
  };

  return (
    <button
      className={classnames(
        classnames(styles.Button, type, shape, size),
        classnames({
          disabled: disabled
        })
      )}
      onClick={handleClick}
      type={type === 'submit'
        ? 'submit'
        : 'button'
      }
      style={style}
      {...restProps}
    >
      {href && <a className={styles.ButtonLink} href={href} target={target}>
        {icon}
        <PMedium>
          {props.children}
        </PMedium>
      </a>}
      {!href && <React.Fragment>
        {icon}
        <PMedium>
          {props.children}
        </PMedium>
      </React.Fragment>}
    </button>
  );
};

export default Button;
