import { style } from 'typestyle';
import { Colors } from './Colors';

export const BlackFooterContainer = style({
  $debugName: 'BlackFooterContainer',
  backgroundColor: Colors["Black Hole"],
  width: "80%",
  height: 561,
  marginTop: "20px",
  marginBottom: "20px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  // justifyContent: "center",

})

export const rectangle11 = style ({
  $debugName: "rectangle11",
  display: "flex",
  justifyContent: "center",
  marginTop: 50
  // alignContent: "space-around",
})
export const rectangle22 = style ({
  $debugName: "rectangle22",
  display: "flex",
  justifyContent: "center",
  marginBottom: 50
  // alignContent: "space-around",
})

export const rectangle1 = style({
  $debugName: "rectangle1",
  width: "80%",
  height: "3px",
  background: Colors["Alien Blood"],
})

export const rectangle2 = style({
  $debugName: "rectangle2",
  width: "80%",
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
  height: "80%",
  display: "flex",
  justifyContent: "space-around"
})



// export const BlackFooterHero = style ({
//   $debugName: "BlackFooterHero",
//   display: "flex",
//   flexDirection: "column",

// })