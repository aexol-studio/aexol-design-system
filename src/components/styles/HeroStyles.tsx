import { style, classes } from 'typestyle';
import { Colors } from './Colors';

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
  marginTop: 90
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

export const Hero1 = classes(Hero, style({
  backgroundColor: Colors.Foggy
}))

export const ImgContent = style({
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const TextContent1 = classes(TextContent, style({
  width: '40%'
}))

export const Img1 = style({
  width: '45%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center'
})

export const Img2 = classes(Img1, style({
  backgroundPosition: 'right center'
}))

export const Hero4 = classes(Hero, style({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}))

export const TextContent4 = classes(TextContent, style({
  width: '50%',
  maxWidth: 570,
  padding: '30px 70px 30px 50px',
  backgroundColor: Colors.White
}))

export const TextContent5 = classes(TextContent, style({
  width: '100%',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  marginBottom: 162
}))
