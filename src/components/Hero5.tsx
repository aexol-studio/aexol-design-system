import * as React from 'react';
import { H1, H3 } from './typography';
import { Button } from './Button';
import * as styles from './styles/HeroStyles';
import { Colors } from './styles/Colors';

export interface IHero5Props {
  headerText: string;
  paragraphText: string;
  buttonText: string;
  buttonOnClick: (e: HTMLButtonElement) => void;
  backgroundFile: string;
  style?: React.CSSProperties;
}

export const Hero5: React.FunctionComponent<IHero5Props> = (props) => {

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
