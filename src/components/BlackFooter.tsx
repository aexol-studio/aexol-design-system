import * as React from 'react'
import * as classnames from 'classnames';
// import { H4, PMedium } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';

type Corner = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'none'

// const Footer = {
//     Examples : {
//     Example1 : "Faker Twitter1",
//     Example2 : "Faker Twitter2",
//     Example3 : "Faker Twitter3",
//     Example4 : "Faker Twitter4",
//     Example5 : "Faker Twitter5",
//     Example6 : "Faker Twitter6",
//     Example7 : "Faker Twitter7",
//     Example8 : "Faker Twitter8",
//     },
//     FromTheBlog : {
//           color : "red",
//           length : "25cm"
//       
// }
// const Footer = {}



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
          <p style={{ color: Colors['Ancient Stone'], textAlign: 'center' }}>
            {FooterMenu[0]}
          </p>
          </div>
          <div>
          <p style={{ color: Colors['Ancient Stone'], textAlign: 'center' }}>
           {Examples[0]}
          </p>
          </div>
          <div>
          <p style={{ color: Colors['Ancient Stone'], textAlign: 'center' }}>
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
