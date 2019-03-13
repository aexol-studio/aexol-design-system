import { style } from 'typestyle';
import { Colors } from './Colors';

export const CardComponentContainer = style({
  $debugName: 'CardComponentTile',
  backgroundColor: Colors.Triton,
  width: 400,
  height: 400,
  boxShadow: "8px 8px 24px rgba(0,0,0,0.15)",
  marginTop: "20px",
  marginBottom: "20px"
  // display: 'flex',
  // $nest: {
  //   '&.topLeft': {
  //     borderRadius: '0 0 0 0'
  //   },
  //   '&.topRight': {
  //     borderRadius: '0 20px 0 0'
  //   },
  //   '&.bottomLeft': {
  //     borderRadius: '0 0 0 20px'
  //   },
  //   '&.bottomRight': {
  //     borderRadius: '0 0 20px 0'
  //   }
  // }
})

// export const CardComponentTextTitleContainer = classes(CardComponentContainer,
//   style ({
//     borderRadius: '20px 0 0 0',
//     padding: 18,
//     paddingLeft: 25,
//     overflowY: 'auto'
//   })
// )


export const CardHero = style({
  backgroundColor: Colors.White,
  // display: "flex",
  // justifyContent: "space-between"
})

export const ComponentBox = style ({
  display: "flex",
  justifyContent: "space-around"
})

// export const CardH2 = style({
//   color: "black",
//   textAlign: "center",
//   paddingTop: "40px", 
//   marginBottom: "40px",
// })

// export const SideBar = style({
//   backgroundColor: Colors.Pacific,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: 66,
//   height: '100%',
//   borderRight: `6px solid ${Colors.Sopel}`,
//   $nest: {
//     '&.topLeft': {
//       borderRadius: '20px 0 0 0'
//     },
//     '&.topRight': {
//       borderRadius: '0 20px 0 0'
//     },
//     '&.bottomLeft': {
//       borderRadius: '0 0 0 20px'
//     },
//     '&.bottomRight': {
//       borderRadius: '0 0 20px 0'
//     }
//   }
// })

// export const SideBarText = style({
//   color: Colors.White,
//   fontSize: 28,
//   lineHeight: '20px'
// })

// export const DayEnding = style({
//   fontSize: 28,
//   lineHeight: '20px',
//   color: Colors['Black Hole']
// })

// export const Day = style({
//   textTransform: 'uppercase',
//   fontSize: 24,
//   lineHeight: '20px',
//   fontFamily: 'Helvetica Neue-CondensedBold',
//   fontWeight: 770
// })

// export const List = style({
//   color: Colors.Lead,
//   margin: '13px 7px',
//   display: 'flex',
//   overflowY: 'auto',
//   flexDirection: 'column',
//   // justifyContent: 'center',
//   $nest: {
//     '&.topLeft': {
//       borderRadius: '20px 0 0 0'
//     },
//     '&.topRight': {
//       borderRadius: '0 20px 0 0'
//     },
//     '&.bottomLeft': {
//       borderRadius: '0 0 0 20px'
//     },
//     '&.bottomRight': {
//       borderRadius: '0 0 20px 0'
//     },
//     '&:before': {
//       content: `''`,
//       margin: 'auto'
//     },
//     '&:after': {
//       content: `''`,
//       margin: 'auto'
//     }
//   }
// })

// export const ListEl = style({
//   lineHeight: '20px',
//   $nest: {
//     '&:before': {
//       content: `'\u00b7'`,
//       paddingRight: 5
//     }
//   }
// })


