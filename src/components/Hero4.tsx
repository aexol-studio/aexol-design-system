import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

export interface IHero4Props {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  backgroundFile: string;
  style?: React.CSSProperties;
}

export const Hero4: React.FunctionComponent<IHero4Props> = (props) => {

  const {
    headerText,
    paragraphText,
    buttonText,
    buttonOnClick,
    backgroundFile,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero4}
      style={{
        backgroundImage: `url(${backgroundFile})`,
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.Nav}>Nawigacja</div>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent4}>
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
        </div>
      </div>
    </div>
  )
}
