import * as React from 'react';
import * as styles from './styles/BrandStyles';

export interface IBrandCardProps {
  BrandCardURL: string;
  style?: React.CSSProperties;
}

export const BrandCard: React.FunctionComponent<IBrandCardProps> = (props) => {

  const {
    BrandCardURL,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.BrandCardContainer}
      style={style}
      {...restProps}
    >
      <img
        className={styles.BrandCard}
        src={BrandCardURL}
        alt="BrandLogo"
      />
    </div>
  )
}
