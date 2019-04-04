import { style, classes, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars'

export const Hero = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center'
})

export const HeroContainer = style({
  width: vars.containerWidth,
  maxWidth: vars.maxWidth,
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

export const TextContent = style(
  {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    maxWidth: 450
  },
  media(
    { minWidth: Breakpoints.Tablet, maxWidth: Breakpoints.Laptop },
    {
      width: '35%'
    }
  ),
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      width: '100%'
    }
  )
)

export const Img = style(
  {
    width: '70%',
    height: '85%',
    alignSelf: 'flex-end',
    display: 'flex',
    justifyContent: 'flex-end',
    $nest: {
      '&.center': {
        height: '80%',
        alignSelf: 'center'
      }
    }
  },
  media(
    { minWidth: Breakpoints.Tablet, maxWidth: Breakpoints.Laptop },
    {
      width: '60%'
    }
  ),
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)

export const Hero1Img = classes(
  Hero,
  style({
    backgroundColor: Colors.Foggy
  })
)

export const ImgContent = style(
  {
    width: '50%',
    height: '80%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  media(
    { minWidth: Breakpoints.Tablet, maxWidth: Breakpoints.Laptop },
    {
      width: '60%'
    }
  ),
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)

export const TextContent1 = classes(
  TextContent,
  style(
    {
      width: '40%'
    },
    media(
      { minWidth: Breakpoints.Tablet, maxWidth: Breakpoints.Laptop },
      {
        width: '35%'
      }
    ),
    media(
      { maxWidth: Breakpoints.Tablet },
      {
        width: '100%'
      }
    )
  )
)

export const Img1 = style({
  width: '47%'
})

export const Img2 = Img1

export const HeroBackImgWithTile = classes(
  Hero,
  style({
    width: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  })
)

export const TextContent4 = classes(
  TextContent,
  style({
    width: '50%',
    maxWidth: 570,
    padding: '30px 70px 30px 50px',
    backgroundColor: Colors.White
  })
)

export const TextContent5 = classes(
  TextContent,
  style({
    width: '100%',
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 162,
    textAlign: 'center'
  })
)

export const HeroImgOnBottom = classes(
  Hero1Img,
  style({
    position: 'relative'
  })
)

export const HeroBackImgWithText = HeroImgOnBottom

export const TextContent3 = classes(
  TextContent5,
  style({
    marginTop: 150,
    marginBottom: 300,
    textAlign: 'center'
  })
)

export const ImgContent3 = style(
  {
    width: '100%',
    height: '50%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'flex-end'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)

export const Img3 = style({
  width: '25%',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end'
})

export const Img4 = classes(
  Img3,
  style({
    height: '80%'
  })
)
