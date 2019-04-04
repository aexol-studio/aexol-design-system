import { style, classes } from 'typestyle'
import * as vars from '../../../vars'
import { Colors } from '../../styles/Colors'

const width = 100
const height = 32
const font = vars.smallFont

export const Dropdown = style({
  $debugName: 'Dropdown',
  display: 'inline-flex',
  alignItems: 'center',
  flexBasis: 'auto',
  backgroundColor: Colors['Damsel in distress'],
  margin: 0,
  padding: '3px 4px',
  borderRadius: '4px 4px 0 0',
  $nest: {
    a: {
      textDecoration: 'none',
      color: 'inherit',
      display: 'flex',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: font
    }
  }
})

export const DropdownListElement = style({
  width: width,
  height: height,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: font,
  border: `1px solid ${Colors['Damsel in distress']}`,
  position: 'relative',
  $nest: {
    '&:hover': {
      backgroundColor: Colors['Damsel in distress'],
      color: Colors.Ultrasonic
    },
    '&:last-child': {
      borderRadius: '0 0 4px 4px'
    }
  }
})

export const DropdownList = style({
  display: 'none',
  marginTop: height,
  position: 'absolute',
  left: 0,
  top: 0,
  backgroundColor: Colors.White,
  boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.3)',
  $nest: {
    '&:last-child': {
      borderRadius: '0 0 4px 4px'
    },
    '&:hover': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

export const DropdownSubmenuList = style({
  left: 0,
  top: 0,
  marginLeft: width,
  display: 'none',
  position: 'absolute',
  backgroundColor: Colors.White,
  boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.3)',
  $nest: {
    '&:last-child': {
      borderRadius: '0 0 4px 4px'
    },
    '&:hover': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
})

export const DropdownSubmenuElement = classes(
  DropdownListElement,
  style({
    $debugName: 'DropdownSubmenu',
    $nest: {
      [`&:hover .${DropdownSubmenuList}`]: {
        display: 'flex',
        flexDirection: 'column',
        color: Colors['Ancient Stone']
      }
    }
  })
)

export const DropdownButton = style({
  padding: 0,
  margin: 2,
  width: width,
  fontSize: font,
  height: height,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: Colors.White,
  borderRadius: 4,
  color: Colors['Ancient Stone'],
  transition: vars.transition,
  cursor: 'pointer',
  position: 'relative',
  $nest: {
    '&:hover': {
      backgroundColor: Colors.Ultrasonic,
      color: Colors.White
    },
    [`&:hover .${DropdownList}`]: {
      display: 'flex',
      flexDirection: 'column',
      color: Colors['Ancient Stone']
    },
    '&.selected': {
      backgroundColor: Colors.Ultrasonic,
      color: Colors['Ancient Stone']
    },
    [`&.selected .${DropdownList}`]: {
      display: 'flex',
      flexDirection: 'column',
      color: Colors['Ancient Stone']
    }
  }
})
