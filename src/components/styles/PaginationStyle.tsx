import { style } from 'typestyle';
import * as vars from '../../vars';

export const Pagination = style({
  height: 40,
  padding: 0,
  margin: 0
})
export const NavElement = style({
  listStyleType: 'none',
  backgroundColor: vars.colorPalete.purple.normal,
  color: vars.whiteText,
  lineHeight: '40px',
  padding: '0px 25px',
  display: 'inline-block',
  borderRadius: 4,
  cursor: 'pointer',
  fontSize: vars.smallFont
})

export const Element = style({
  width: 40,
  height: 40,
  listStyleType: 'none',
  padding: 0,
  display: 'inline-block',
  lineHeight: '40px',
  fontSize: vars.smallFont,
  textAlign: 'center',
  backgroundColor: vars.whiteBackground,
  borderRadius: 4,
  color: vars.greyText,
  cursor: 'pointer',
  $nest: {
    '&:hover': {
      backgroundColor: vars.colorPalete.purple.superLight
    },
    '&.active': {
      backgroundColor: vars.colorPalete.purple.superLight
    },
    '&.disabled': {
      // pointerEvents: 'none'
      cursor: 'default',
      $nest: {
        '&:hover': {
          backgroundColor: vars.whiteBackground
        }
      }
    }
  }
})
