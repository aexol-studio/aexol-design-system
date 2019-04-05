import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars';

export const ContentTextBoxContainer = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: Colors.White,
  $nest: {
    '&.tile': {
      boxShadow: '8px 8px 24px rgba(0,0,0,0.15)',
      padding: 70
    }
  }
})

export const ContentImgOnSide = style({
  display: 'flex',
  width: '100%',
  height: '100%'
})

export const ContentImg = style(
  {
    width: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)

export const ContentTextContainer = style(
  {
    width: '50%',
    padding: '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      width: '100%'
    }
  )
)

export const ContentWithTile = style({
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'relative'
})

export const ContentTileImg = style(
  {
    width: '60%',
    height: '100%',
    display: 'inline-block',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      width: '100%'
    }
  )
)

export const ContentRightBar = style(
  {
    width: '40%',
    height: '100%',
    display: 'inline-block',
    $nest: {
      '&.violet': {
        backgroundColor: Colors.Foggy
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)
export const ContentContainer = style({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '80%',
  maxWidth: vars.maxWidth,
  margin: 'auto',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

export const ContentTileTextBox = style(
  {
    width: '50%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    zIndex: 10
  },
  media(
    { minWidth: Breakpoints.TabletPortrait, maxWidth: Breakpoints.Laptop },
    {
      width: '70%'
    }
  ),
  media(
    { maxWidth: Breakpoints.TabletPortrait },
    {
      width: '100%'
    }
  )
)
