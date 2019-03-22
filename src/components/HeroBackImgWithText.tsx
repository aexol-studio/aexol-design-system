import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

export interface IHeroBackImgWithTextProps {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  backgroundFile: string;
  height?: number;
  style?: React.CSSProperties;
}

export const HeroBackImgWithText: React.FunctionComponent<IHeroBackImgWithTextProps> = (props) => {

  const {
    headerText,
    paragraphText,
    buttonText,
    buttonOnClick,
    backgroundFile,
    height,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.HeroBackImgWithText}
      style={{
        height: height
          ? height
          : '100%',
        backgroundImage: `url(${backgroundFile})`,
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent5}>
            <H1 style={{color: Colors.White, marginBottom: 6}}>
              {headerText}
            </H1>
            <H3 style={{color: Colors.White, marginBottom: 16}}>
              {paragraphText}
            </H3>
            <Button
              onClick={buttonOnClick}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
