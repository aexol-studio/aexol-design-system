import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as classnames from 'classnames';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

type ImgPosition = 'bottom' | 'center';

export interface IHero1ImgProps {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  imgFile: string;
  imgPosition?: ImgPosition;
  height?: number;
  style?: React.CSSProperties;
}

export const Hero1Img: React.FunctionComponent<IHero1ImgProps> = (props) => {

  const {
    headerText,
    paragraphText,
    buttonText,
    buttonOnClick,
    imgFile,
    imgPosition = 'bottom',
    height,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero}
      style={{
        height: height
          ? height
          : '100%',
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
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
          <div
            className={classnames(styles.Img, imgPosition)}
            style={{ backgroundImage: `url(${imgFile})` }}
          />
        </div>
      </div>
    </div>
  )
}
