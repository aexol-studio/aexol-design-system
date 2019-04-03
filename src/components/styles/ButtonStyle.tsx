import { style } from 'typestyle';
import * as vars from '../../vars';
import { Colors } from './Colors';

export const Button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 168,
  height: 40,
  borderRadius: 4,
  border: 0,
  color: '#fff',
  backgroundColor: Colors.Ultrasonic,
  cursor: 'pointer',
  transition: vars.transition,
  $nest: {
    '&.submit': {
      // margin: '0 0 0 auto'
    },
    'svg': {
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
      color: Colors['Black Hole'],
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
      backgroundColor: 'transparent',
      border: `2px solid ${Colors.White}`,
      transition: vars.transition,
      $nest: {
        '&:hover': {
          border: `3px solid ${Colors['Plutonic Briza']}`
        }
      }
    }
  }
});

export const ButtonLink = style({
  textDecoration: 'none',
  color: 'inherit',
  width: '100%',
  height: '100%'
})
