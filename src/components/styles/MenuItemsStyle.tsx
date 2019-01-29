import { style } from 'typestyle';
import * as vars from '../../vars';

export const MenuLinksContainer = style({
  minWidth: '75%',
  display: 'flex',
  justifyContent: 'flex-end'
})

export const MenuItem = style({
  display: 'inline-block',
  borderBottom: '3px solid transparent',
  textDecoration: 'none',
  marginRight: 50
})

export const MenuItemLink = style({
  textDecoration: 'none',
  color: vars.greyText,
  transition: '.2s ease-out',
  $nest: {
    '&:hover': {
      color: vars.primaryColor
    }
    // '&.active': {
    //   color: vars.primaryColor
    // }
  }
})
