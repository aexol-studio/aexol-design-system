import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

export interface IHero2Props {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  imgFile: string;
  style?: React.CSSProperties;
}

export const Hero2: React.FunctionComponent<IHero2Props> = (props) => {

  const {
    headerText,
    paragraphText,
    buttonText,
    buttonOnClick,
    imgFile,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.Nav}>Nawigacja</div>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent}>
            <H1 style={{color: Colors['Dark Side'], marginBottom: 6}}>
              {headerText}
            </H1>
            <H3 style={{color: Colors.Androgyn, marginBottom: 16, lineHeight: '34px'}}>
              {paragraphText}
            </H3>
            <Button
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
          </div>
          <div className={styles.Img} style={{backgroundImage: `url(${imgFile})`}} />
        </div>
      </div>
    </div>
  )
}
