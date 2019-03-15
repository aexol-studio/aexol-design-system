import * as React from 'react'
import * as classnames from 'classnames';
// import { H4, PMedium } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';


let FooterMenu = ["Services",
                  "Roadmap",
                  "Slack Community",
                  "GraphQL Blog",
                  "GraphQL Editor",
                  "Docs"];

let Examples = ["Faker Twitter1",
                "Faker Twitter2", 
                "Faker Twitter3", 
                "Faker Twitter4", 
                "Faker Twitter5", 
                "Faker Twitter6", 
                "Faker Twitter7", 
                "Faker Twitter8"];

let FromTheBlog = ["GraphQL Tutorial - Schemas and types part1",
                  "GraphQL Tutorial - Schemas and types part2",
                  "GraphQL Tutorial - Schemas and types part3",
                  "GraphQL Tutorial - Schemas and types part4",
                  "GraphQL Tutorial - Schemas and types part5",
                  "GraphQL Tutorial - Schemas and types part6",
                  "GraphQL Tutorial - Schemas and types part7",
                  "GraphQL Tutorial - Schemas and types part8"];



export interface ICardComponentProps {
 objects:{
   title:string;
   objects:{
     name:string;
     link:string;
   }[]
 }[]
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
      <div
        className={classnames(
          styles.BlackFooterContainer,
        )}
        {...restProps}
      >
        <div className={styles.rectangle11}>
          <div className={styles.rectangle1} />
        </div>
        <div className={styles.BlackFooterContent}>
          <div>
          <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
            {FooterMenu[0]}
          </p>
          </div>
          <div>
          <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
           {Examples[0]}
          </p>
          </div>
          <div>
          <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
          {FromTheBlog[0]}
          </p>
          </div>
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
