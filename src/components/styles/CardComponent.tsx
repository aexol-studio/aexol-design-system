import { style } from 'typestyle';
import { Colors } from './Colors';

export const CardComponentContainer = style({
  $debugName: 'CardComponentTile',
  backgroundColor: Colors.White,
  width: 268,
  height: 251,
  boxShadow: '8px 8px 24px rgba(0,0,0,0.15)',
  marginTop: '20px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const logo = style({
  $debugName: 'logo',
  marginLeft: '34px',
  marginBottom: '6px'
})

export const CardHero = style({
  display: 'flex',
  justifyContent: 'space-around'
})

export const ComponentHero = style ({
  $debugName: 'ComponentHero'
})

export const rectangle = style ({
  $debugName: 'rectangle',
  display: 'flex',
  marginLeft: '16px'
})

export const rectangle1 = style({
  $debugName: 'rectangle1',
  width: '84px',
  height: '7px',
  background: Colors['Alien Blood']
})

export const rectangle2 = style({
  $debugName: 'rectangle2',
  width: '7px',
  height: '7px',
  background: '#C4C4C4'
})

export const boxTitle = style({
  $debugName: 'boxTitle',
  marginTop: '8px',
  marginLeft: '16px'
})

export const boxText = style({
  $debugName: 'boxText',
  marginLeft: '16px',
  marginTop: '8px',
  width: '213px',
  maxHeight: '113px'
})
