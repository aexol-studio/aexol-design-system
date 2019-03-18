import { style } from 'typestyle';
import { Colors } from './Colors';

export const BlackFooterContainer = style({
  $debugName: 'BlackFooterContainer',
  backgroundColor: Colors["Black Hole"],
  width: "80%",
  // height: 561,
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",

})

export const rectangle11 = style({
  $debugName: "rectangle11",
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 50,
  marginLeft: "10%",
  marginRight: "10%"
})
export const rectangle22 = style({
  $debugName: "rectangle22",
  display: "flex",
  // justifyContent: "space-evenly",
  marginBottom: 50,
  // alignContent: "space-around",
  flexDirection: "column",
  marginLeft: "10%",
  marginRight: "10%"
})

export const rectangle1 = style({
  $debugName: "rectangle1",
  width: "80%",
  height: "3px",
  background: Colors["Alien Blood"],
})

export const rectangle2 = style({
  $debugName: "rectangle2",
  // width: "80%",
  height: "3px",
  background: Colors["Serpentine"],
})

export const BlackFooterMain = style({
  $debugName: "BlackFooterMain",
  display: "flex",
  justifyContent: "space-around"
})

export const BlackFooterContent = style({
  $debugName: "BlackFooterContent",
  display: "flex",
  justifyContent: "space-around",
  marginLeft: "10%",
  marginRight: "10%"
})

export const BlackFooterContentColumn = style({
  $debugName: "BlackFooterContent",
  marginTop: "20px",
  marginBottom: "60px"
})

// export const BlackFooterContentColumnTitle = style ({
//   $debugName: "BlackFooterHero",
//   display: "flex",
//   flexDirection: "column",

// })