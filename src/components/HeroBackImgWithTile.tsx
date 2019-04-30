import * as React from 'react'
import { H4 } from './typography'
import { Button } from './Button'
import * as classnames from 'classnames'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'

export interface IHeroBackImgWithTileProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  tilePosition?: 'left' | 'right'
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
    paragraphColor = 'Androgyn',
    paragraphTextLength = 'short',
    buttonText,
    buttonOnClick,
    backgroundFile,
    tilePosition = 'left',
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
          <div className={classnames(styles.TextContent4, tilePosition)}>
            <div className={styles.HeroHeader}>{headerText}</div>
            {paragraphTextLength === 'short' && (
              <div
                className={styles.HeroParagraph}
                style={{
                  color: Colors[paragraphColor]
                }}
              >
                {paragraphText}
              </div>
            )}
            {paragraphTextLength === 'long' && (
              <H4
                style={{
                  color: Colors[paragraphColor],
                  marginBottom: 16
                }}
              >
                {paragraphText}
              </H4>
            )}
            <Button onClick={buttonOnClick}>{buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
