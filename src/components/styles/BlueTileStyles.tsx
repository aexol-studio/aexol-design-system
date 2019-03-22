import { style, media } from 'typestyle';
import { Colors } from './Colors';
import {Breakpoints} from './Breakpoints';

export const BlueTileMain = style({
  $debugName: 'BlueTileMain',
  background: Colors['Alien Blood'],
  display: 'flex'
  // justifyContent: 'space-around'
  // $nest: {
  //   '&.white': {
  //     backgroundColor: Colors.White
  //   }
  // }
})

export const BlueTileContainer = style({
  $debugName: 'BlueTileContainer',
  width: '80%',
  maxWidth: 1170,
  height: '80%',
  maxHeight: 820,
  margin: '0 auto',
  marginTop: '80px',
  marginBottom: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column'
})

export const TileContent = style({
  $debugName: 'TileContent',
  display: 'flex',
  flexDirection: 'row',
  // flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center'

  // marginLeft: '110px',
  // marginRight: '110px'
}
)
// Cokolwiek stare rzeczy będzie tu nowe. beng beng.

export const rectangleTop = style({
  $debugName: 'rectangleTop',
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
