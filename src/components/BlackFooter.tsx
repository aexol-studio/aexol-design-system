import * as React from 'react'
import * as classnames from 'classnames';
import { PFooterTitle, PFooterName } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';

type input = {
  objects: Array<{
    title: string;
    objects: Array<{
      name: string;
      link: string;
    }>;
  }>;
}

export interface ICardComponentProps {
  inputsAr: input;
  logo: string;
  copyright: string
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {

  const {
    inputsAr,
    logo,
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
          <p style={{ color: Colors['Ancient Stone'], textAlign: 'center', marginTop: 5, marginBottom: 5, fontSize: 30 }}>
            {logo}</p>
          <div className={styles.rectangleTop} />
        </div>
        <div className={styles.BlackFooterContent}>
          {inputsAr.objects.map(el => {
            return <div className={styles.BlackFooterContentColumn}>
               <PFooterTitle>{el.title}</PFooterTitle>
              <div>{el.objects.map(o => <PFooterName
              >{o.name}</PFooterName>)}</div>
            </div>

          })
          }
        </div>
        <div className={styles.rectangleDownDiv}>
          <div className={styles.rectangleDown}/>
          <p className={styles.rectangleDownCopyright}>
       {copyright}</p>
        </div>
      </div>
    </div>
  )
}
