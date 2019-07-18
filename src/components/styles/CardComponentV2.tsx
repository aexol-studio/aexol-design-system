import { style } from 'typestyle'
import { Colors } from './Colors'

export const CardComponentContainer = style({
  $debugName: 'CardComponentContainer',
  backgroundColor: Colors.White,
  width: 368,
  minHeight: 257,
  boxShadow: '8px 8px 24px rgba(0,0,0,0.15)',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 32
})

export const Header = style({
  $debugName: 'Header',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  background: 'linear-gradient(187.93deg, #0091FF 0%, #5D2EEB 98.38%)',
  width: '100%',
  height: 53
})

export const rectangle = style({
  $debugName: 'rectangle',
  marginTop: 3,
  display: 'flex'
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
  height: 7
})

export const CardComponentContent = style({
  $debugName: 'CardComponentContent',
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 19,
  marginRight: 19,
  marginTop: 28
})
