import * as React from 'react'
import * as classnames from 'classnames'
import { PFooterTitle } from './typography'
import * as styles from './styles/FooterStyle'
import { GraphQLlogo } from './icons'
type FooterColumnsTxt = {
  objects: Array<{
    title?: string
    objects: Array<{
      name: string
      link: string
    }>
  }>
}

export interface FooterComponentProps {
  FooterColumnsTxt: FooterColumnsTxt
  isVissible: boolean
  backgroundColor?: 'black' | 'white'
  copyright: string
  isVisible: boolean
}

export const Footer: React.FunctionComponent<FooterComponentProps> = props => {
  const {
    FooterColumnsTxt,
    backgroundColor = 'black',
    copyright,
    isVisible = false
  } = props

  console.log(isVisible)

  return (
    <div className={classnames(styles.FooterMain, backgroundColor)}>
      <div className={styles.FooterContainer}>
        <div className={styles.rectangleTopDiv}>
          {isVisible && (
            <div className={styles.rectangleTopLogo}>
              <GraphQLlogo />
            </div>
          )}
          <div className={styles.rectangleTop} />
        </div>
        <div className={styles.FooterContent}>
          {FooterColumnsTxt.objects.map((el, idxt) => {
            return (
              <div className={styles.FooterContentColumn} key={idxt}>
                <div>
                  <PFooterTitle>{el.title}</PFooterTitle>
                </div>
                <div className={styles.PFooterNameDiv}>
                  {el.objects.map((o, idx) => (
                    <a
                      className={classnames(
                        styles.PFooterName,
                        backgroundColor
                      )}
                      href={o.link}
                      key={idx}
                    >
                      {o.name}
                    </a>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.rectangleDownDiv}>
          <div className={styles.rectangleDown} />
          <p className={styles.rectangleDownCopyright}>{copyright}</p>
        </div>
      </div>
    </div>
  )
}
