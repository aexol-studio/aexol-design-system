import { style, classes } from 'typestyle';
import * as vars from '../../../vars';

const width = 100
const height = 32
const font = vars.smallFont

export const Dropdown = style({
  $debugName: 'Dropdown',
  display: 'inline-flex',
  alignItems: 'center',
  flexBasis: 'auto',
  backgroundColor: vars.colorPalete.purple.superLight,
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
  border: `1px solid ${vars.colorPalete.purple.superLight}`,
  position: 'relative',
  $nest: {
    '&:hover': {
      backgroundColor: vars.colorPalete.purple.superLight,
      color: vars.colorPalete.purple.normal
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
  backgroundColor: vars.whiteBackground,
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
  backgroundColor: vars.whiteBackground,
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

export const DropdownSubmenuElement = classes(DropdownListElement, style({
  $debugName: 'DropdownSubmenu',
  $nest: {
    [`&:hover .${DropdownSubmenuList}`]: {
      display: 'flex',
      flexDirection: 'column',
      color: vars.greyText
    }
  }
}))

export const DropdownButton = style({
  padding: 0,
  margin: 2,
  width: width,
  fontSize: font,
  height: height,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.whiteBackground,
  borderRadius: 4,
  color: vars.greyText,
  transition: vars.transition,
  cursor: 'pointer',
  position: 'relative',
  $nest: {
    '&:hover': {
      backgroundColor: vars.colorPalete.purple.normal,
      color: vars.whiteText
    },
    [`&:hover .${DropdownList}`]: {
      display: 'flex',
      flexDirection: 'column',
      color: vars.greyText
    },
    '&.selected': {
      backgroundColor: vars.colorPalete.purple.normal,
      color: vars.whiteText
    },
    [`&.selected .${DropdownList}`]: {
      display: 'flex',
      flexDirection: 'column',
      color: vars.greyText
    }
  }
})
