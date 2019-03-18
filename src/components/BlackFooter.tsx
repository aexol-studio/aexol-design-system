import * as React from 'react'
import * as classnames from 'classnames';
import { P } from './typography';
// import { P } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';


type input = {
  objects: {
    title: string;
    objects: {
      name: string;
      link: string;
    }[];
  }[];
}

export interface ICardComponentProps {
  inputsAr: input;
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {

  const {
    inputsAr,
    ...restProps
  } = props

  // console.log(inputsAr)
  // console.log(inputsAr.objects[1])

  return (
    <div className={styles.BlackFooterMain}>
      <div
        className={classnames(
          styles.BlackFooterContainer,
        )}
        {...restProps}
      >
        <div className={styles.rectangle11}>
        <p style={{color: Colors['Ancient Stone'], textAlign: 'center', marginTop:5,fontSize: 30}}>
       LOGO</p> 
          <div className={styles.rectangle1} />
        </div>
        <div className={styles.BlackFooterContent}>
          {inputsAr.objects.map(el => {
            return <div className={styles.BlackFooterContentColumn}>
              <P style={{
                color: "#514E5A",
                fontSize: 16,
                fontWeight: "bold",
              }}>{el.title}</P>
              <div>{el.objects.map(o => <P
                style={{
                  color: "#514E5A",
                  fontSize: 16,
                  marginTop: 5,
                }}
              >{o.name}</P>)}</div>
            </div>
          })

          }
          {/* <div>
            <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
            cokolwiek1
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
            cokolwiek2
            </p>
          </div> */}
        </div>
        <div className={styles.rectangle22}>
          <div className={styles.rectangle2} />
          {/* <p style={{color: Colors['Ancient Stone'], textAlign: 'center', marginTop:5,fontSize: 12}}>
        Copyright 2018 AEXOL/Slothking/Graphqleditor.com</p>  */}
        </div>
      </div>
    </div>
  )
}
