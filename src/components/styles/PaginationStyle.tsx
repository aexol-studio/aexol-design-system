import { style } from 'typestyle';
import * as vars from '../../vars';
import { Colors } from './Colors';

export const Pagination = style({
  height: 40,
  padding: 0,
  margin: 0
});
export const NavElement = style({
  listStyleType: 'none',
  backgroundColor: Colors.Ultrasonic,
  color: Colors.White,
  lineHeight: '40px',
  padding: '0px 25px',
  display: 'inline-block',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: vars.smallFont
});

export const Element = style({
  width: 40,
  height: 40,
  listStyleType: 'none',
  padding: 0,
  display: 'inline-block',
  lineHeight: '40px',
  fontSize: vars.smallFont,
  textAlign: 'center',
  backgroundColor: Colors.White,
  borderRadius: 4,
  color: Colors['Ancient Stone'],
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      backgroundColor: Colors['Damsel in distress']
    },
    '&.active': {
      backgroundColor: Colors['Damsel in distress']
    },
    '&.disabled': {
      // pointerEvents: 'none'
      cursor: 'default',
      $nest: {
        '&:hover': {
          backgroundColor: Colors.White
        }
      }
    }
  }
});
