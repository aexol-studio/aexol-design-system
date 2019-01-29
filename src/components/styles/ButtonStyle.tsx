import { style } from 'typestyle';
import * as vars from '../../vars';

export const Button = style({
  padding: '15px 30px',
  // minWidth: 160,
  borderRadius: 7,
  color: '#fff',
  textAlign: 'center',
  backgroundColor: vars.colorPalete.purple.normal,
  cursor: 'pointer',
  $nest: {
    '&.submit': {
      // margin: '0 0 0 auto'
    },
    '&.small': {
      fontSize: vars.smallFont,
      padding: '10px 20px'
    },
    '&.large': {
      fontSize: vars.largeFont,
      padding: '15px 35px'
    },
    '&.oval': {
      borderRadius: 500
    },
    '&.square': {
      borderRadius: 0
    },
    '&.danger': {
      backgroundColor: vars.colorPalete.red.normal
    },
    '&.success': {
      backgroundColor: vars.colorPalete.blue.normal
    },
    '&.disabled': {
      backgroundColor: vars.colorPalete.grey.normal,
      pointerEvents: 'none'
    }
  }
})
