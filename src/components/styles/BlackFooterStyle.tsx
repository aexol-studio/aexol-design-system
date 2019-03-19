import { style } from 'typestyle';
import { Colors } from './Colors';

export const BlackFooterContainer = style({
  $debugName: 'BlackFooterContainer',
  backgroundColor: Colors['Black Hole'],
  width: '80%',
  // height: 561,
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'

})

export const rectangleTopDiv = style({
  $debugName: 'rectangleTopDiv',
  display: 'flex',
  justifyContent: 'space-evenly',
  marginTop: 50,
  marginLeft: '10%',
  marginRight: '10%'
})
export const rectangleDownDiv = style({
  $debugName: 'rectangleDownDiv',
  display: 'flex',
  // justifyContent: "space-evenly",
  marginBottom: 50,
  // alignContent: "space-around",
  flexDirection: 'column',
  marginLeft: '10%',
  marginRight: '10%'
})

export const rectangleTop = style({
  $debugName: 'rectangleTop',
  width: '80%',
  height: '3px',
  background: Colors['Alien Blood']
})

export const rectangleDown = style({
  $debugName: 'rectangleDown',
  // width: "80%",
  height: '3px',
  background: Colors.Serpentine
})

export const rectangleDownCopyright = style({
  $debugName: 'rectangleDownCopyright',
  textAlign: 'center',
  color: Colors['Ancient Stone'],
  marginTop: 5,
  fontSize: 12
})

export const BlackFooterMain = style({
  $debugName: 'BlackFooterMain',
  display: 'flex',
  justifyContent: 'space-around'
})

export const BlackFooterContent = style({
  $debugName: 'BlackFooterContent',
  display: 'flex',
  justifyContent: 'space-around',
  marginLeft: '10%',
  marginRight: '10%'
})

export const BlackFooterContentColumn = style({
  $debugName: 'BlackFooterContent',
  marginTop: '20px',
  marginBottom: '60px'
})

export const BlackFooterContentColumnTitle = style ({
  $debugName: 'BlackFooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 0,
  marginTop: 0
})
export const BlackFooterContentColumnName = style ({
  $debugName: 'BlackFooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  marginBottom: 0,
  marginTop: 5
})
