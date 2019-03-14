import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

export interface IHero3Props {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  imgFile1: string;
  imgFile2: string;
  imgFile3: string;
  imgFile4: string;
  style?: React.CSSProperties;
  styleImg1_4?: React.CSSProperties;
  styleImg2_3?: React.CSSProperties;
}

export const Hero3: React.FunctionComponent<IHero3Props> = (props) => {

  const {
    headerText,
    paragraphText,
    buttonText,
    buttonOnClick,
    imgFile1,
    imgFile2,
    imgFile3,
    imgFile4,
    style,
    styleImg1_4,
    styleImg2_3,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero3}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.Nav}>Nawigacja</div>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent3}>
            <H1 style={{color: Colors['Black Hole'], marginBottom: 6}}>
              {headerText}
            </H1>
            <H3 style={{color: Colors.Androgyn, marginBottom: 16}}>
              {paragraphText}
            </H3>
            <Button
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
            <div className={styles.ImgContent3}>
              <div className={styles.Img3} style={{backgroundImage: `url(${imgFile1})`, ...styleImg1_4}} />
              <div className={styles.Img4} style={{backgroundImage: `url(${imgFile2})`, ...styleImg2_3}} />
              <div className={styles.Img4} style={{backgroundImage: `url(${imgFile3})`, ...styleImg2_3}} />
              <div className={styles.Img3} style={{backgroundImage: `url(${imgFile4})`, ...styleImg1_4}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
