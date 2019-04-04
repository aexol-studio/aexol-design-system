import * as React from 'react'
import * as styles from './styles/ContentStyles'
import { ContentTextBox } from './ContentTextBox'

export interface IContentImgOnSideProps {
  title: string
  text: string
  imgSide?: 'right' | 'left'
  linkText?: string
  linkHref: string
  linkTarget?: string
  imgFile: string
  style?: React.CSSProperties
}

export const ContentImgOnSide: React.FunctionComponent<
  IContentImgOnSideProps
> = props => {
  const {
    title,
    text,
    linkText = 'Read Article...',
    linkHref,
    linkTarget,
    imgSide = 'right',
    imgFile,
    style,
    ...restProps
  } = props

  return (
    <div className={styles.ContentImgOnSide} style={style} {...restProps}>
      {imgSide === 'right' && (
        <div className={styles.ContentTextContainer}>
          <ContentTextBox
            title={title}
            text={text}
            linkText={linkText}
            linkHref={linkHref}
            linkTarget={linkTarget}
          />
        </div>
      )}
      <div
        className={styles.ContentImg}
        style={{
          backgroundImage: `url(${imgFile})`
        }}
      />
      {imgSide === 'left' && (
        <div className={styles.ContentTextContainer}>
          <ContentTextBox
            title={title}
            text={text}
            linkText={linkText}
            linkHref={linkHref}
            linkTarget={linkTarget}
          />
        </div>
      )}
    </div>
  )
}
