import { style, classes, media } from 'typestyle';
import { Colors } from './Colors';
import * as vars from '../../vars';

export const Hero = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center'
})

export const HeroContainer = style({
  width: '80%',
  maxWidth: 1170,
  height: '100%',
  margin: '0 auto'
})

export const HeroContent = style({
  height: '100%',
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const TextContent = style({
  display: 'flex',
  flexDirection: 'column',
  width: '25%',
  maxWidth: 450
}, media({ maxWidth: vars.laptop }, {
  width: '35%'
}), media({ maxWidth: vars.tablet }, {
  width: '100%'
}))

export const Img = style({
  width: '70%',
  height: '85%',
  alignSelf: 'flex-end',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right bottom',
  $nest: {
    '&.center': {
      height: '80%',
      backgroundPosition: 'right center',
      alignSelf: 'center'
    }
  }
}, media({ maxWidth: vars.laptop }, {
  width: '60%'
}), media({ maxWidth: vars.tablet }, {
  display: 'none'
}))

export const Hero1Img = classes(Hero, style({
  backgroundColor: Colors.Foggy
}))

export const ImgContent = style({
  width: '50%',
  height: '80%',
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

export const HeroBackImgWithTile = classes(Hero, style({
  width: '100%',
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

export const HeroImgOnBottom = classes(Hero1Img, style({
  position: 'relative'
}))

export const HeroBackImgWithText = HeroImgOnBottom

export const TextContent3 = classes(TextContent5, style({
  marginTop: 150,
  marginBottom: 300
}))

export const ImgContent3 = style({
  width: '100%',
  height: '50%',
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  alignItems: 'flex-end'
})

export const Img3 = style({
  width: '25%',
  height: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom'
})

export const Img4 = classes(Img3, style({
  height: '80%'
}))
