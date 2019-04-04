import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
import * as vars from '../../vars'

export const Popup = style(
  {
    width: 200,
    borderRadius: 8,
    backgroundImage: `linear-gradient(to bottom, ${Colors.Lunatic}00, ${
      Colors.Lunatic
    })`,
    padding: 2,
    position: 'absolute',
    alignItems: 'center',
    flexDirection: 'column',
    left: -90,
    display: 'flex',
    zIndex: 100,
    opacity: 0,
    transition: vars.transition,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
    bottom: 125,
    $nest: {
      '&.blue': {
        padding: 0
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      transform: 'rotate(-90deg) translate(30px, 0)',
      width: 170,
      bottom: 85,
      left: -80
    }
  )
)

export const Header = style(
  {
    width: 200,
    height: 30,
    backgroundColor: Colors.Lunatic,
    color: Colors.White,
    borderRadius: '8px 8px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    $nest: {
      '&.blue': {
        backgroundColor: Colors['Outer Space']
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      width: 170
    }
  )
)

export const Text = style(
  {
    width: '100%',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: '16px',
    padding: 10,
    borderRadius: '0 0 8px 8px',
    backgroundColor: Colors.White,
    color: Colors['Ancient Stone'],
    position: 'relative',
    $nest: {
      '&::before': {
        content: `''`,
        position: 'absolute',
        bottom: -31,
        right: 82,
        marginTop: -15.5,
        borderWidth: 15.5,
        borderStyle: 'solid',
        borderColor: `${Colors.Lunatic} transparent transparent transparent`
      },
      '&::after': {
        content: `''`,
        position: 'absolute',
        bottom: -24,
        right: 86,
        marginTop: -12,
        borderWidth: 12,
        borderStyle: 'solid',
        borderColor: `${Colors.White} transparent transparent transparent`
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      $nest: {
        '&::before': {
          bottom: '47%',
          right: 166,
          borderColor: `transparent ${Colors.Lunatic} transparent transparent`
        },
        '&::after': {
          bottom: '50%',
          right: 166,
          borderColor: `transparent ${Colors.White} transparent transparent`
        },
        '&.blue': {
          $nest: {
            '&::before': {
              borderColor: `transparent`
            }
          }
        }
      }
    }
  )
)

export const Point = style({
  position: 'relative',
  height: 100,
  cursor: 'pointer',
  zIndex: 10,
  $nest: {
    [`&:hover .${Popup}`]: {
      opacity: 1
    }
  }
})

export const Line0 = style({
  position: 'absolute',
  top: 9,
  right: 24,
  display: 'flex',
  alignItems: 'center'
})

export const Line = style({
  position: 'absolute',
  top: 9,
  left: 20,
  display: 'flex',
  alignItems: 'center'
})

export const Title = style(
  {
    fontFamily: 'Helvetica Neue',
    fontSize: 16,
    lineHeight: '18px',
    textAlign: 'center',
    width: 140,
    position: 'absolute',
    top: 80,
    left: -60,
    $nest: {
      '&.topRight': {
        top: -30,
        left: 8
      },
      '&.top': {
        top: -30
      },
      '&.blue': {
        color: Colors.White
      },
      '&.todo': {
        fontFamily: 'Helvetica Neue-Thin'
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      transform: 'rotate(-90deg)',
      top: 125,
      $nest: {
        '&.topRight': {
          top: -90,
          left: -60
        },
        '&.top': {
          top: -70,
          left: -60
        }
      }
    }
  )
)

export const Roadmap = style(
  {
    width: '100%',
    minHeight: 550,
    backgroundColor: Colors.Foggy,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    $nest: {
      '&.blue': {
        backgroundImage: Colors['Alien Blood']
      }
    }
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      height: 1400
    }
  )
)

export const Road = style(
  {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: 150,
    position: 'relative'
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      transform: 'translateY(-100px) translateX(40%) rotate(90deg)',
      transformOrigin: 'left',
      margin: 0,
      width: 1280
    }
  )
)

export const Background = style(
  {
    position: 'absolute',
    top: -100,
    left: 0
  },
  media(
    { maxWidth: Breakpoints.Laptop },
    {
      overflow: 'auto'
    }
  )
)
