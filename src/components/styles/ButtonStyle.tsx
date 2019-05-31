import { style, keyframes } from 'typestyle'
import * as vars from '../../vars'
import { Colors } from './Colors'

const wave = keyframes({
  '0%': {
    transform: 'translateY(0px)'
  },
  '40%': {
    transform: 'translateY(0px)'
  },
  '60%': {
    transform: 'translateY(10px)'
  },
  '80%': {
    transform: 'translateY(-10px)'
  },
  '100%': {
    transform: 'translateY(0px)'
  }
})

export const Button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 168,
  height: 40,
  borderRadius: 4,
  border: 0,
  textDecoration: 'none',
  color: Colors.White,
  backgroundColor: Colors.Ultrasonic,
  cursor: 'pointer',
  transition: vars.transition,
  $nest: {
    '&.submit': {
      // margin: '0 0 0 auto'
    },
    svg: {
      marginRight: 5,
      maxHeight: 20
    },
    '&.oval': {
      borderRadius: 500
    },
    '&.square': {
      borderRadius: 0
    },
    '&.danger': {
      backgroundColor: Colors['Cherry Bomb'],
      $nest: {
        '&:hover': {
          backgroundColor: Colors.ACME
        }
      }
    },
    '&.success': {
      backgroundColor: Colors.Serpentine,
      $nest: {
        '&:hover': {
          backgroundColor: Colors.Kriptonita
        }
      }
    },
    '&.disabled': {
      backgroundColor: Colors.Ultrasonic,
      pointerEvents: 'none'
    },
    '&:focus': {
      outline: 0,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    '&.small': {
      width: 80
    },
    '&:hover': {
      backgroundColor: Colors.Pioneer
    },
    '&.secondary': {
      backgroundColor: Colors.Foggy,
      color: Colors['Ancient Stone'],
      transition: vars.transition,
      $nest: {
        '&:hover': {
          backgroundColor: Colors.Sopel
        }
      }
    },
    '&.secondary2': {
      backgroundColor: 'transparent',
      color: Colors['Ancient Stone'],
      border: `2px solid ${Colors['Ancient Stone']}`,
      transition: vars.transition,
      $nest: {
        '&:hover': {
          backgroundColor: Colors.Sopel
        }
      }
    },
    '&.secondary3': {
      color: Colors.White,
      backgroundColor: `${Colors.Lead}4D`,
      border: `2px solid ${Colors.White}`,
      transition: vars.transition,
      $nest: {
        '&:hover': {
          border: `3px solid ${Colors['Plutonic Briza']}`
        }
      }
    }
  }
})

export const ButtonLink = style({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  $nest: {
    '&:hover': {
      color: 'inherit',
      backgroundColor: 'inherit'
    }
  }
})

export const Loader = style({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const Wave = style({
  width: 34,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const Dot = style({
  display: 'inline-block',
  width: 8,
  height: 8,
  borderRadius: 4,
  animationName: wave,
  animationDuration: '1.1s',
  animationIterationCount: 'infinite',
  backgroundColor: Colors.White,
  $nest: {
    '&:nth-child(1)': {
      animationDelay: '-0.34667s'
    },
    '&:nth-child(2)': {
      animationDelay: '-0.26s'
    },
    '&:nth-child(3)': {
      animationDelay: '-0.17333s'
    }
  }
})
