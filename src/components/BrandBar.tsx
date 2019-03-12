import * as React from 'react';
import { BrandCard } from './BrandCard';
import * as styles from './styles/BrandStyles';

export interface IBrandBarProps {
  BrandBarURL: string[];
  smallText?: string;
  bigText?: string;
  style?: React.CSSProperties;
}

const DEFAULT_SMALL_TEXT = 'We colaborate with ambitious brands and people'
const DEFAULT_BIG_TEXT = 'Let’s create something great together'

export const BrandBar: React.FunctionComponent<IBrandBarProps> = (props) => {

  const {
    BrandBarURL,
    smallText = DEFAULT_SMALL_TEXT,
    bigText = DEFAULT_BIG_TEXT,
    style,
    ...restProps
  } = props

  const renderCards = (el: string, idx: number) => {
    return (
      <BrandCard BrandCardURL={el} key={idx} />
    )
  }

  return (
    <div
      className={styles.BrandBarContainer}
      {...restProps}
    >
      <div className={styles.BrandContent}>
        <div className={styles.BrandLogos}>
          {BrandBarURL.map((el, idx) => renderCards(el, idx))}
        </div>
        <div className={styles.BrandSmallText}>
          {smallText}
        </div>
        <div className={styles.BrandBigText}>
          {bigText}
        </div>
      </div>
    </div>
  )
}
