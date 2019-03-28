import { style, media } from 'typestyle';
import { Colors } from './Colors';
import {Breakpoints} from './Breakpoints';

export const FooterContainer = style({
  $debugName: 'FooterContainer',
  width: '80%',
  maxWidth: 1170,
  margin: '0 auto',
  marginTop: '80px',
  marginBottom: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'
})

export const rectangleTopDiv = style({
  $debugName: 'rectangleTopDiv',
  display: 'flex',
  flexDirection: 'column'
  // justifyContent: 'space-evenly',
  // marginTop: 50
})
export const rectangleDownDiv = style({
  $debugName: 'rectangleDownDiv',
  display: 'flex',
  // marginBottom: 50,
  flexDirection: 'column'
})

export const rectangleTop = style({
  $debugName: 'rectangleTop',
  height: 3,
  background: Colors['Ancient Stone']
})

export const rectangleDown = style({
  $debugName: 'rectangleDown',
  height: 3,
  background: Colors['Ancient Stone']
})

export const rectangleTopLogo = style({
  $debugName: 'rectangleTopLogo',
  color: Colors['Ancient Stone'],
  textAlign: 'center',
  marginTop: 5,
  marginBottom: 5,
  fontSize: 30
})

export const rectangleDownCopyright = style({
  $debugName: 'rectangleDownCopyright',
  textAlign: 'left',
  color: Colors['Ancient Stone'],
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

export const FooterContent = style({
  $debugName: 'FooterContent',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
  // marginLeft: '110px',
  // marginRight: '110px'
},
  media({ minWidth: 0, maxWidth: Breakpoints.Laptop},
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    })
)

export const FooterContentColumn = style({
  $debugName: 'FooterContentColumn',
  marginTop: 60,
  marginBottom: 60,
  flexDirection: 'column'
},
media({ minWidth: 0, maxWidth: 1200 },
  {
    marginTop: 35,
    marginBottom: 35
  })
)

export const FooterContentColumnTitle = style({
  $debugName: 'FooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 0,
  marginTop: 0
})
export const FooterContentColumnName = style({
  $debugName: 'FooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  marginBottom: 0,
  marginTop: 5
})

export const PFooterNameDiv = style ({
display: 'flex',
flexDirection: 'column'
})

export const PFooterName = style ({
    margin: 0,
    padding: 0,
    lineHeight: `23px`,
    fontSize: 16,
    color: '#514E5A',
    marginBottom: 0,
    marginTop: 5,
    textDecoration: 'none'
})
