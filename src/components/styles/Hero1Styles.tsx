import { style } from 'typestyle';
// import { Colors } from './Colors';

export const Hero = style({
  width: '100vw',
  height: '100vh'
})

export const HeroContainer = style({
  maxWidth: '80%',
  height: '100%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column'
})

export const HeroContent = style({
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 95
})

export const TextContent = style({
  display: 'flex',
  flexDirection: 'column',
  width: '25%',
  maxWidth: 450
})

export const Img = style({
  width: '70%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom'
})

export const Nav = style({
  width: '100%',
  height: 72,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
})
