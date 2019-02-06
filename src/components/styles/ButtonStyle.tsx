import { style } from 'typestyle';
import * as vars from '../../vars';

export const Button = style({
  padding: '10px 5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // minWidth: 160,
  borderRadius: 4,
  color: '#fff',
  backgroundColor: vars.colorPalete.purple.normal,
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
      backgroundColor: vars.colorPalete.red.normal
    },
    '&.success': {
      backgroundColor: vars.colorPalete.green.normal
    },
    '&.disabled': {
      backgroundColor: vars.colorPalete.grey.normal,
      pointerEvents: 'none'
    },
    '&:focus': {
      outline: 0,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    }
  }
})

export const ButtonText = style({
  padding: '0 40px',
  $nest: {
    '&.icon': {
      paddingLeft: 15
    },
    '&.small': {
      fontSize: vars.smallFont,
      padding: '0 30px'
    },
    '&.large': {
      fontSize: vars.largeFont,
      padding: '0 45px'
    }
  }
})
