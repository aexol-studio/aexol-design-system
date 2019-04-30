import * as React from 'react'
import { H3, H4 } from './typography'
import { Button } from './Button'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'

export interface IHero2ImgProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  buttonOnClick: (e: HTMLButtonElement) => void
  imgFile1: React.ReactNode
  imgFile2: React.ReactNode
  height?: number
  style?: React.CSSProperties
}

export const Hero2Img: React.FunctionComponent<IHero2ImgProps> = props => {
  const {
    headerText,
    paragraphText,
    paragraphColor = 'Androgyn',
    paragraphTextLength = 'short',
    buttonText,
    buttonOnClick,
    imgFile1,
    imgFile2,
    height,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero1Img}
      style={{
        height: height ? height : '100%',
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent1}>
            <div className={styles.HeroHeader}>{headerText}</div>
            {paragraphTextLength === 'short' && (
              <H3
                style={{
                  color: Colors[paragraphColor],
                  marginBottom: 16,
                  lineHeight: '34px'
                }}
              >
                {paragraphText}
              </H3>
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
          <div className={styles.ImgContent}>
            <div className={styles.Img1}>{imgFile1}</div>
            <div className={styles.Img2}>{imgFile2}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
