import { style, media } from 'typestyle';
import { Colors } from './Colors';
import {Breakpoints} from './Breakpoints'

export const BlackFooterContainer = style({
  $debugName: 'BlackFooterContainer',
  backgroundColor: Colors['Black Hole'],
  width: '100%',
  // marginTop: '20px',
  // marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  paddingTop: 100,
  paddingBottom: 100,
  paddingRight: 135,
  paddingLeft: 135
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

export const BlackFooterMain = style({
  $debugName: 'BlackFooterMain',
  display: 'flex',
  justifyContent: 'space-around'
})

export const BlackFooterContent = style({
  $debugName: 'BlackFooterContent',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
  // marginLeft: '110px',
  // marginRight: '110px'
},
  media({ minWidth: 0, maxWidth: Breakpoints.Tablet},
    {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    })
)

export const BlackFooterContentColumn = style({
  $debugName: 'BlackFooterContentColumn',
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

export const BlackFooterContentColumnTitle = style({
  $debugName: 'BlackFooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 0,
  marginTop: 0
})
export const BlackFooterContentColumnName = style({
  $debugName: 'BlackFooterContentColumnTitle',
  color: '#514E5A',
  fontSize: 16,
  marginBottom: 0,
  marginTop: 5
})
