import * as React from 'react'
import * as styles from './styles/ContentStyles'
import { ContentTextBox } from './ContentTextBox'
import * as classnames from 'classnames'

export interface IContentWithTileProps {
  title: string
  text: string
  linkText?: string
  linkHref: string
  linkTarget?: string
  imgFile: string
  violetBakground?: boolean
  style?: React.CSSProperties
}

export const ContentWithTile: React.FunctionComponent<
  IContentWithTileProps
> = props => {
  const {
    title,
    text,
    linkText = 'Read Article...',
    linkHref,
    linkTarget,
    violetBakground = false,
    imgFile,
    style,
    ...restProps
  } = props

  return (
    <div className={styles.ContentWithTile} style={style} {...restProps}>
      <div
        className={styles.ContentTileImg}
        style={{
          backgroundImage: `url(${imgFile})`
        }}
      />
      <div
        className={classnames({
          [styles.ContentRightBar]: true,
          violet: violetBakground
        })}
      />
      <div className={styles.ContentTileTextBox}>
        <ContentTextBox
          title={title}
          text={text}
          linkText={linkText}
          linkHref={linkHref}
          tileView={true}
          linkTarget={linkTarget}
        />
      </div>
    </div>
  )
}
