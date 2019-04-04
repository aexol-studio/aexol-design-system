import { style } from 'typestyle'
import { Colors } from './Colors'
import * as vars from '../../vars'

export const LinkContainer = style({
  cursor: 'pointer',
  fontSize: 14,
  color: Colors.Pacific,
  transition: vars.transition,
  padding: '5px 0',
  letterSpacing: 1.5,
  textDecoration: 'none',
  $nest: {
    '&:hover': {
      textDecoration: 'underline',
      color: Colors.Pacific
    },
    '&:focus': {
      border: `1px dashed ${Colors.Pacific}`
    },
    '&.disabled': {
      opacity: 0.5,
      pointerEvents: 'none'
    },
    '&.strong': {
      color: Colors.Lunatic
    }
  }
})
