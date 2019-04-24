import * as React from 'react'
import { H1, H3, H4 } from './typography'
import { Button } from './Button'
import * as classnames from 'classnames'
import * as styles from './styles/HeroStyles'
import { Colors } from './styles/Colors'

type ImgPosition = 'bottom' | 'center'

export interface IHero1ImgProps {
  headerText: string | JSX.Element
  paragraphText: string | JSX.Element
  paragraphColor?: keyof typeof Colors
  paragraphTextLength?: 'short' | 'long'
  buttonText: string
  buttonOnClick: (e: HTMLButtonElement) => void
  imgFile: React.ReactNode
  imgPosition?: ImgPosition
  height?: number
  style?: React.CSSProperties
  imgStyle?: React.CSSProperties
}

export const Hero1Img: React.FunctionComponent<IHero1ImgProps> = props => {
  const {
    headerText,
    paragraphText,
    paragraphColor = 'Androgyn',
    paragraphTextLength = 'short',
    buttonText,
    buttonOnClick,
    imgFile,
    imgPosition = 'bottom',
    height,
    style,
    imgStyle,
    ...restProps
  } = props

  return (
    <div
      className={styles.Hero}
      style={{
        height: height ? height : '100%',
        ...style
      }}
      {...restProps}
    >
      <div className={styles.HeroContainer}>
        <div className={styles.HeroContent}>
          <div className={styles.TextContent}>
            <H1 style={{ color: Colors['Dark Side'], marginBottom: 6 }}>
              {headerText}
            </H1>
            {paragraphTextLength === 'short' &&
            <H3
              style={{
                color: Colors[paragraphColor],
                marginBottom: 16,
                lineHeight: '34px'
              }}
            >
              {paragraphText}
            </H3>}
            {paragraphTextLength === 'long' &&
            <H4
              style={{
                color: Colors[paragraphColor],
                marginBottom: 16
              }}
            >
              {paragraphText}
            </H4>}
            <Button onClick={buttonOnClick}>{buttonText}</Button>
          </div>
          <div className={classnames(styles.Img, imgPosition)}>{imgFile}</div>
        </div>
      </div>
    </div>
  )
}
