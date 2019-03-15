import * as React from 'react'
import * as classnames from 'classnames';
// import { H4, PMedium } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

export interface ICardComponentProps {
  boxText: string;
  boxTitle: string;
  corner?: Corner;
  style?: React.CSSProperties;
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {
  const {
    boxText,
    boxTitle,
    style,
    ...restProps
  } = props

  return (
    <div className={styles.BlackFooterMain}>
      {/* <div className={styles.CardHero}> */}


      {/* <div className={styles.ComponentHero}> */}
      <div
        className={classnames(
          styles.BlackFooterContainer,
        )}
        {...restProps}
      >
        <div className={styles.rectangle11}>
          <div className={styles.rectangle1} />
        </div>
        <div className={styles.BlackFooterContent} >
          <p style={{color: Colors['Ancient Stone'], textAlign: 'center'}}>
          img
          </p>
        </div>
        <div className={styles.rectangle22}>
          <div className={styles.rectangle2} />
        </div>
        <div>
        <p style={{color: Colors['Ancient Stone'], textAlign: 'center', marginTop:5,fontSize: 12}}>
        Copyright 2018 AEXOL/Slothking/Graphqleditor.com</p> 
        </div>
      </div>






    </div>
  )
}
