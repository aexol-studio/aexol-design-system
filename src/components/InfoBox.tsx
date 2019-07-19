import * as React from 'react'
import * as classnames from 'classnames'
import { H4, PMedium } from './typography'
import * as styles from './styles/InfoBoxStyles'
import { Colors } from './styles/Colors'
import { Link } from '../components'

export interface IInfoBoxProps {
  title: string
  text: string
  linkText?: string
  link?: string
  style?: React.CSSProperties
}

export const InfoBox: React.FunctionComponent<IInfoBoxProps> = props => {
  const { title, text, linkText, link, style, ...restProps } = props

  return (
    <div
      className={classnames(styles.InfoBoxContainer)}
      style={style}
      {...restProps}
    >
      <div className={styles.TitleBox}>
        <H4 style={{ color: Colors.White }}>{title}</H4>
      </div>
      <div className={styles.ContentBox}>
        <PMedium style={{ marginBottom: 8 }}>{text}</PMedium>
        {linkText && link && <Link link={link} text={linkText} />}
      </div>
    </div>
  )
}
