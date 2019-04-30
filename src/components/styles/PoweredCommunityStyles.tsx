import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars'

export const CommunityCardContainer = style(
  {
    width: '33%',
    paddingTop: '22.22%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  media(
    { minWidth: Breakpoints.Phone, maxWidth: Breakpoints.Tablet },
    {
      width: 413,
      height: 281,
      paddingTop: 0
    }
  ),
  media(
    { maxWidth: Breakpoints.Phone },
    {
      width: '100%',
      height: 250,
      paddingTop: 0
    }
  )
)

export const CardDescript = style({
  fontSize: 28,
  lineHeight: '28px',
  textAlign: 'left',
  position: 'absolute',
  bottom: 30,
  left: 30,
  width: '100%',
  paddingRight: 60
})

export const Icon = style({
  position: 'absolute',
  top: 30,
  left: 30
})

export const PoweredCommunityContainer = style({
  width: vars.containerWidth,
  maxWidth: vars.maxWidth,
  padding: '40px 0',
  margin: '0 auto'
})

export const Cards = style(
  {
    marginBottom: 70,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      flexDirection: 'column',
      alignItems: 'center'
    }
  )
)

export const Header = style({
  marginBottom: 40
})

export const HeaderLine = style({
  height: 2,
  width: 500,
  maxWidth: '80%',
  backgroundColor: Colors.Mora,
  marginTop: 2
})
