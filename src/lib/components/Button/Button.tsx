import * as React from "react";
import * as classnames from "classnames";
import * as styles from "../styles/ButtonStyle";

type ButtonType = 'primary' | 'danger' | 'success' | 'submit'

export interface ButtonProps {
  type?: ButtonType,
  onClick?: (e) => void,
}

export const Button: React.SFC<ButtonProps> = (props) => {
  const { type = 'primary', onClick } = props
  const handleClick = (e) => { onClick(e); }
  return (
    <button className={classnames(
      styles.Button,
      type
    )}
      onClick={e => type === 'submit' ? null : handleClick(e)}
      type={type === "submit" ? "submit" : "button"}
    >
      {props.children}
    </button>
  )
};

export default Button;
