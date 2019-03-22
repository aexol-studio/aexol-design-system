import { style } from 'typestyle';

export const About = style({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Container = style({
  width: '80%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Nav = style({
  position: 'fixed',
  top: 0,
  left: 0,
  height: 72,
  width: '100%',
  paddingRight: '10%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center'
})
