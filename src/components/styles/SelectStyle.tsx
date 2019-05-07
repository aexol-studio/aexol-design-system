import { style } from 'typestyle'
import * as vars from '../../vars'
import { Colors } from './Colors'

export const Select = style({
  position: 'relative',
  width: 393,
  height: 56,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)'
})

export const holderSelect = style({
  position: 'relative',
  fontSize: 16
})

export const ArrowContainer = style({
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  width: 35,
  height: '100%',
  zIndex: 10
})

export const SelectArrow = style({
  borderColor: `${Colors['Black Hole']} transparent transparent`,
  borderStyle: 'solid',
  borderWidth: '5px 5px 2.5px',
  height: 0,
  width: 0,
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translate(0, -50%)'
})

export const holderValue = style({
  border: `2px solid ${Colors.Sopel}`,
  paddingRight: 35,
  height: 56,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center'
})

export const placeholderValue = style({
  padding: '5px 18px',
  width: '100%',
  height: '100%',
  display: 'block',
  color: Colors.Ashes,
  border: 0,
  outline: 0
})

export const showValue = style({
  position: 'relative',
  backgroundColor: '#ddd',
  borderRadius: 2,
  border: '1px solid #666',
  color: '#666',
  display: 'inline-block',
  fontSize: 16,
  lineHeight: '23px',
  padding: '5px 15px',
  margin: 5
})

export const emptyValue = style({
  border: 0
})

export const valueChoosen = style({
  marginRight: 5
})

export const Delete = style({
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '3px 5px'
})

export const holderValues = style({
  display: 'none',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  border: `1px solid ${Colors.Sopel}`,
  borderTop: 0,
  cursor: 'pointer',
  maxHeight: 160,
  overflowY: 'auto',
  position: 'absolute',
  backgroundColor: Colors.White,
  left: 0,
  width: '100%',
  zIndex: 8,
  $nest: {
    '&.open': {
      display: 'block'
    }
  }
})

export const Li = style({
  padding: '10px 20px',
  transition: vars.transition,
  color: Colors['Ancient Stone'],
  margin: 0,
  $nest: {
    '&:hover': {
      backgroundColor: Colors['Damsel in distress'],
      color: Colors.Ultrasonic
    }
  }
})

export const Label = style({
  position: 'absolute',
  left: 2,
  top: -18,
  fontSize: 12,
  lineHeight: '16px',
  fontFamily: 'Helvetica Neue-Medium'
})
