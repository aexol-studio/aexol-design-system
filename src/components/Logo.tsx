import * as React from 'react'
import * as styles from './styles/LogoStyles'

export interface LogoProps {
  width?: number;
  logoURL: string;
  style?: React.CSSProperties;
}

export const Logo: React.FunctionComponent<LogoProps> = (props) => {
  const {
    width,
    logoURL,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.LogoContainer}
      style={{
        width: width ? `${width}px` : '100%',
        ...style
      }}
      {...restProps}
    >
      <img
        className={styles.Logo}
        src={logoURL}
        alt="Logo"
      />
    </div>
  )
}
