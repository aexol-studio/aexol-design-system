import * as React from 'react';
import * as styles from './styles/BrandStyles';

export interface IBrandCardProps {
  BrandCardLogo: string;
  BrandCardLink?: string;
  style?: React.CSSProperties;
}

export const BrandCard: React.FunctionComponent<IBrandCardProps> = (props) => {

  const {
    BrandCardLogo,
    BrandCardLink,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.BrandCardContainer}
      style={style}
      {...restProps}
    >
    {BrandCardLink && <a className={styles.BrandLink} href={BrandCardLink}>
      <img
        className={styles.BrandCard}
        src={BrandCardLogo}
        alt="BrandLogo"
      />
    </a>}
    {!BrandCardLink &&
      <img
        className={styles.BrandCard}
        src={BrandCardLogo}
        alt="BrandLogo"
      />}
    </div>
  )
}
