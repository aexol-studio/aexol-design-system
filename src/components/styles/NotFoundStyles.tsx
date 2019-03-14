import { style } from 'typestyle';

export const NotFound = style({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

export const TextContent = style({
  width: '25%',
  maxWidth: 368,
  display: 'flex',
  flexDirection: 'column'
})

export const Img = style({
  width: '70%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
})
