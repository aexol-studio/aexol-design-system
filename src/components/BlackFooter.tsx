import * as React from 'react'
import * as classnames from 'classnames';
// import { H4, PMedium } from './typography';
import * as styles from './styles/BlackFooterStyle';
import { Colors } from './styles/Colors';



let newOne = {
  objects: [{
    title: "Services",
    objects: [{ name: "Services", link: "http://google.pl" },
    { name: "Roadmap", link: "http://google.pl" },
    { name: "Slack Community", link: "http://google.pl" },
    { name: "GraphQL Blog", link: "http://google.pl" },
    { name: "GraphQL Editor", link: "http://google.pl" },
    { name: "Docs", link: "http://google.pl" }]
  },
  {
    title: "Examples",
    objects: [{ name: "Faker Twitter2", link: "http://google.pl" },
    { name: "Faker Twitter3", link: "http://google.pl" },
    { name: "Faker Twitter4", link: "http://google.pl" },
    { name: "Faker Twitter5", link: "http://google.pl" },
    { name: "Faker Twitter6", link: "http://google.pl" },
    { name: "Faker Twitter7", link: "http://google.pl" },
    { name: "Faker Twitter8", link: "http://google.pl" }]
  },
  {
    title: "FromTheBlog",
    objects: [{ name: "Faker Twitter2", link: "http://google.pl" },
    { name: "Faker Twitter3", link: "http://google.pl" },
    { name: "Faker Twitter4", link: "http://google.pl" },
    { name: "Faker Twitter5", link: "http://google.pl" },
    { name: "Faker Twitter6", link: "http://google.pl" },
    { name: "Faker Twitter7", link: "http://google.pl" },
    { name: "Faker Twitter8", link: "http://google.pl" }]
  },]
}
  // {
  //   title: "FromTheBlog",
  //   objects: [{ name: "Faker Twitter2", link: "http://google.pl" },
  //   { name: "Faker Twitter3", link: "http://google.pl" },
  //   { name: "Faker Twitter4", link: "http://google.pl" },
  //   { name: "Faker Twitter5", link: "http://google.pl" },
  //   { name: "Faker Twitter6", link: "http://google.pl" },
  //   { name: "Faker Twitter7", link: "http://google.pl" },
  //   { name: "Faker Twitter8", link: "http://google.pl" }]
  // }

// let FooterMenu = [{ name: "Services", link: "http://google.pl" },
// { name: "Roadmap", link: "http://google.pl" },
// { name: "Slack Community", link: "http://google.pl" },
// { name: "GraphQL Blog", link: "http://google.pl" },
// { name: "GraphQL Editor", link: "http://google.pl" },
// { name: "Docs", link: "http://google.pl" },];

// let Examples = ["Faker Twitter1",
//   "Faker Twitter2",
//   "Faker Twitter3",
//   "Faker Twitter4",
//   "Faker Twitter5",
//   "Faker Twitter6",
//   "Faker Twitter7",
//   "Faker Twitter8"];

// let FromTheBlog = ["Schemas and types part1",
//   "Schemas and types part2",
//   "Schemas and types part3",
//   "Schemas and types part4",
//   "Schemas and types part5",
//   "Schemas and types part6",
//   "Schemas and types part7",
//   "Schemas and types part8"];

// let inputs = [FooterMenu, FooterMenu, FooterMenu];


let inputs = newOne

export interface ICardComponentProps {
  objects: {
    title: string;
    objects: {
      name: string;
      link: string;
    }[]
  }[]
}

export const BlackFooter: React.FunctionComponent<ICardComponentProps> = (props) => {
  const {
    // boxText,
    // boxTitle,
    // style,
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
              {inputs.objects[0].objects[0].name}
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
            {inputs.objects[1].objects[0].name}
            </p>
          </div>
          <div>
            <p style={{ fontSize: 10, color: Colors['Ancient Stone'], textAlign: 'center' }}>
            {inputs.objects[1].objects[0].name}
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
