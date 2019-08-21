import { style, media } from 'typestyle'
import { Colors } from '../styles/Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars'
export const NavBar = style({
  width: '100%',
  height: 72,
  backgroundColor: Colors.White,
  $nest: {
    '&.black': {
      backgroundColor: 'transparent'
    },
    '&.light': {
      backgroundColor: Colors.Foggy
    }
  }
})
export const ContentContainer = style(
  {
    display: 'flex',
    alignItems: 'center'
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      alignItems: 'stretch',
      $nest: {
        button: {
          display: 'none'
        }
      }
    }
  )
)
export const ButtonContainer = style(
  {},
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none'
    }
  )
)
export const LinkContainer = style(
  {
    display: 'flex',
    alignItems: 'center',
    $nest: {
      a: {
        marginRight: 20,
        cursor: 'pointer',
        color: Colors['Ancient Stone'],
        textDecoration: 'none',
        transition: vars.transition,
        $nest: {
          '&:hover': {
            color: Colors['Dark Side']
          }
        }
      },
      '&.black': {
        $nest: {
          a: {
            color: Colors.White,
            textDecoration: 'none',
            $nest: {
              '&:hover': {
                color: Colors['Plutonic Briza']
              }
            }
          }
        }
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'none',
      $nest: {
        a: {
          display: 'none'
        }
      }
    }
  )
)
export const Hamburger = style(
  {
    display: 'none',
    position: 'relative',
    width: 24,
    height: 25,
    transition: '.5s ease-out',
    cursor: 'pointer',
    zIndex: 4,
    $nest: {
      '&.open': {
        $nest: {
          div: {
            $nest: {
              '&:nth-child(1)': {
                transform: 'translate(1px, 5px) rotate(45deg)'
              },
              '&:nth-child(2)': {
                transform: 'translate(9px, 1px) rotate(-45deg)'
              },
              '&:nth-child(3)': {
                transform: 'translate(-12px, 0)',
                opacity: 0
              },
              '&:nth-child(4)': {
                transform: 'translate(24px, -4px)',
                opacity: 0
              },
              '&:nth-child(5)': {
                transform: 'translate(1px, -3px) rotate(-45deg)'
              },
              '&:nth-child(6)': {
                transform: 'translate(9px, -7px) rotate(45deg)'
              }
            }
          }
        }
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Tablet },
    {
      display: 'block'
    }
  )
)
export const Bar = style({
  height: 3,
  width: 12,
  backgroundColor: Colors['Black Hole'],
  display: 'block',
  margin: '1px 0',
  transition: '.5s ease-out',
  $nest: {
    '&:nth-child(even)': {
      transform: 'translate(12px, -4px)'
    },
    '&.black': {
      backgroundColor: Colors.White
    }
  }
})
export const LogoContainer = style(
  {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto'
  },
  media(
    { minWidth: Breakpoints.Phone, maxWidth: Breakpoints.Tablet },
    {
      marginRight: 0,
      marginLeft: 'auto'
    }
  ),
  media(
    { maxWidth: Breakpoints.Phone },
    {
      marginRight: 0,
      marginLeft: 'auto'
    }
  )
)
export const Container = style(
  {
    width: vars.containerWidth,
    margin: '0 auto',
    maxWidth: vars.maxWidth,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  media(
    { minWidth: 0, maxWidth: Breakpoints.Tablet },
    {
      justifyContent: 'space-between',
      $nest: {
        '&.open': {
          zIndex: 20,
          position: 'relative',
          margin: 0,
          display: 'inline-block',
          width: 'auto',
          height: 'auto',
          backgroundColor: Colors['Super Nova'],
          paddingBottom: 30,
          $nest: {
            [`.${Hamburger}`]: {
              marginLeft: 30,
              marginTop: 25,
              alignSelf: 'flex-start'
            },
            [`.${Bar}`]: {
              backgroundColor: Colors.White
            },
            [`.${LogoContainer}`]: {
              display: 'none'
            },
            [`.${ContentContainer}`]: {
              flexDirection: 'column',
              width: '100%'
            },
            [`.${LinkContainer}`]: {
              margin: '30px 0',
              display: 'flex',
              flexBasis: 'auto',
              flexDirection: 'column',
              padding: '0 15px 0 40px',
              $nest: {
                a: {
                  display: 'block',
                  width: 'calc(100% + 60px)',
                  marginRight: 0,
                  marginLeft: -30,
                  fontSize: 18,
                  lineHeight: '23px',
                  color: Colors.White,
                  padding: '10px 30px',
                  $nest: {
                    '&:hover': {
                      backgroundColor: Colors.Mora,
                      color: Colors.White
                    }
                  }
                },
                svg: {
                  $nest: {
                    path: {
                      fill: 'white'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  )
)
//# sourceMappingURL=NavBarStyles.js.map
