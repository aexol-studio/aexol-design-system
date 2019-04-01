import { style } from 'typestyle';
import { Colors } from './Colors';

export const CardComponentContainer = style({
  $debugName: 'CardComponentTile',
  backgroundColor: Colors.White,
  width: 268,
  height: 251,
  boxShadow: '8px 8px 24px rgba(0,0,0,0.15)',
  marginTop: 20,
  marginBottom: 20,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const logo = style({
  $debugName: 'logo',
  marginLeft: 34,
  marginBottom: 6
})

export const rectangle = style ({
  $debugName: 'rectangle',
  display: 'flex',
  marginLeft: 16
})

export const rectangle1 = style({
  $debugName: 'rectangle1',
  width: 84,
  height: 7,
  background: Colors['Alien Blood']
})

export const rectangle2 = style({
  $debugName: 'rectangle2',
  width: 7,
  height: 7,
  background: '#C4C4C4'
})

export const boxTitle = style({
  $debugName: 'boxTitle',
  marginTop: 8,
  marginLeft: 16
})

export const boxText = style({
  $debugName: 'boxText',
  marginLeft: 16,
  marginTop: 8,
  width: 213,
  maxHeight: 113
})
