import * as React from 'react'
import * as classnames from 'classnames';
import { PFooterTitle, PFooterName, H4 } from './typography';
import * as styles from './styles/BlackFooterStyle';

type input = {
  objects: Array<{
    title: string;
    objects: Array<{
      name: string;
      link: string;
    }>;
  }>;
}

type inputCat = {
  objects: Array<{
    name: string;
    link: string;
  }>;
}

export interface ICardComponentProps {
  inputsAr: input;
  // logo: string;
  copyright: string;
  inputsCat: inputCat;
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {

  const {
    inputsAr,
    inputsCat,
    // logo,
    copyright,
    ...restProps
  } = props

  return (
    <div className={styles.BlackFooterMain}>
      <div
        className={classnames(
          styles.BlackFooterContainer
        )}
        {...restProps}
      >
        <div className={styles.rectangleTopDiv}>
          {/* <p className={styles.rectangleTopLogo}>
            {logo}</p> */}
          <div className={styles.rectangleTop} />
        </div>
        <div className={styles.BlackFooterContent}>
          <div className={styles.BlackFooterContentColumn}>
            {inputsCat.objects.map(el => {
              // tslint:disable-next-line:jsx-key
              return <H4>{el.name}</H4>
            })
            }
          </div>
          {inputsAr.objects.map(el => {
            // tslint:disable-next-line:jsx-key
            return <div className={styles.BlackFooterContentColumn}>
              <div><PFooterTitle>{el.title}</PFooterTitle></div>
              <div>{el.objects.map(o =>
                // tslint:disable-next-line:jsx-key
                <PFooterName
                >{o.name}</PFooterName>)}</div>
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
