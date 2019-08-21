import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars'
export const FooterContainer = style({
  $debugName: 'FooterContainer',
  width: vars.containerWidth,
  maxWidth: vars.maxWidth,
  margin: '0 auto',
  marginTop: 80,
  marginBottom: 80,
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'
})
export const rectangleTopDiv = style({
  $debugName: 'rectangleTopDiv',
  display: 'flex',
  alignItems: 'center'
})
export const rectangleDownDiv = style({
  $debugName: 'rectangleDownDiv',
  display: 'flex',
  flexDirection: 'column'
})
export const rectangleTop = style({
  $debugName: 'rectangleTop',
  height: 1,
  width: '100%',
  background: Colors.Lead
})
export const rectangleDown = style({
  $debugName: 'rectangleDown',
  height: 1,
  background: Colors.Lead
})
export const rectangleTopLogo = style({
  $debugName: 'rectangleTopLogo',
  color: Colors.Lead,
  textAlign: 'center',
  marginRight: 4,
  fontSize: 30,
  display: 'flex'
})
export const rectangleDownCopyright = style({
  $debugName: 'rectangleDownCopyright',
  textAlign: 'left',
  color: Colors.Lead,
  marginTop: 5,
  marginBottom: 0,
  fontSize: 12
})
export const FooterMain = style({
  $debugName: 'FooterMain',
  backgroundColor: Colors['Black Hole'],
  display: 'flex',
  justifyContent: 'space-around',
  $nest: {
    '&.white': {
      backgroundColor: Colors.White
    }
  }
})
export const FooterContent = style(
  {
    $debugName: 'FooterContent',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  media(
    { minWidth: 0, maxWidth: Breakpoints.Laptop },
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: 40,
      paddingBottom: 40
    }
  )
)
export const FooterContentColumn = style(
  {
    $debugName: 'FooterContentColumn',
    marginTop: 60,
    marginBottom: 60,
    flexDirection: 'column',
    color: Colors.Lead
  },
  media(
    { minWidth: 0, maxWidth: Breakpoints.Laptop },
    {
      marginTop: 20,
      marginBottom: 20
    }
  )
)
export const FooterContentColumnTitle = style({
  $debugName: 'FooterContentColumnTitle',
  color: Colors.Lead,
  fontWeight: 'bold',
  marginBottom: 0,
  marginTop: 0
})
export const FooterContentColumnName = style({
  $debugName: 'FooterContentColumnTitle',
  color: Colors.Lead,
  marginBottom: 0,
  marginTop: 5
})
export const PFooterNameDiv = style({
  display: 'flex',
  flexDirection: 'column'
})
export const PFooterName = style({
  margin: 0,
  padding: 0,
  lineHeight: `23px`,
  color: Colors.Lead,
  marginBottom: 0,
  marginTop: 5,
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      color: Colors.White
    },
    '&.white': {
      $nest: {
        '&:hover': {
          color: Colors.Black
        }
      }
    }
  }
})
//# sourceMappingURL=FooterStyle.js.map
