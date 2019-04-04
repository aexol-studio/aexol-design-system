import * as React from 'react'
import { H1, H3 } from './typography'
import { Button } from './Button'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'

export interface IHeroBackImgWithTileProps {
  headerText: string
  paragraphText: string
  buttonText: string
  buttonOnClick: (e: HTMLButtonElement) => void
  backgroundFile: string
  height?: number
  style?: React.CSSProperties
}

export const HeroBackImgWithTile: React.FunctionComponent<
  IHeroBackImgWithTileProps
> = props => {
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
      className={styles.HeroBackImgWithTile}
      style={{
        height: height ? height : '100%',
        backgroundImage: `url(${backgroundFile})`,
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent4}>
            <H1 style={{ color: Colors['Dark Side'], marginBottom: 6 }}>
              {headerText}
            </H1>
            <H3
              style={{
                color: Colors.Androgyn,
                marginBottom: 16,
                lineHeight: '34px'
              }}
            >
              {paragraphText}
            </H3>
            <Button onClick={buttonOnClick}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
