import * as React from 'react';
import { BrandCard } from './BrandCard';
import { PBold, H3 } from './typography';
import * as styles from './styles/BrandStyles';
import { Colors } from './styles/Colors';

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
      <div className={styles.BrandLogos}>
        {BrandBarURL.map((el, idx) => renderCards(el, idx))}
      </div>
      <PBold style={{color: Colors['Ancient Stone'], textAlign: 'center'}}>
        {smallText}
      </PBold>
      <H3 style={{color: Colors['Dark Side'], textAlign: 'center'}}>
        {bigText}
      </H3>
    </div>
  )
}
