import * as React from 'react'
import * as classnames from 'classnames';
import { PFooterTitle, PFooterName } from './typography';
import * as styles from './styles/FooterStyle';

type blackFooterColumnsTxt = {
  objects: Array<{
    title?: string;
    objects: Array<{
      name: string;
      link: string;
    }>;
  }>;
}

export interface ICardComponentProps {
  blackFooterColumnsTxt: blackFooterColumnsTxt;
  backgroundColor?: 'black' | 'white' ;
  copyright: string;
}

export const Footer: React.FunctionComponent<ICardComponentProps> = (props) => {

  const {
    blackFooterColumnsTxt,
    // logo,
    backgroundColor= 'black',
    copyright,
    ...restProps
  } = props

  return (
    <div className={styles.BlackFooterMain}>
      <div
        className={classnames(
          styles.BlackFooterContainer,
          backgroundColor
        )}
        {...restProps}
      >
        <div className={styles.rectangleTopDiv}>
          {/* <p className={styles.rectangleTopLogo}>
            {logo}</p> */}
          <div className={styles.rectangleTop} />
        </div>
        <div className={styles.BlackFooterContent}>
          {blackFooterColumnsTxt.objects.map(el => {
            // tslint:disable-next-line:jsx-key
            return <div className={styles.BlackFooterContentColumn}>
              <div><PFooterTitle>{el.title}</PFooterTitle></div>
              <div>{el.objects.map(o =>
                // tslint:disable-next-line:jsx-key
                <PFooterName>{o.name}</PFooterName>)}</div>
            </div>
          })
          }
        </div>
        <div className={styles.rectangleDownDiv}>
          <div className={styles.rectangleDown} />
          <p className={styles.rectangleDownCopyright}>
            {copyright}</p>
        </div>
      </div>
    </div>
  )
}
