import { style, media } from 'typestyle';
import { Colors } from '../styles/Colors';
import * as vars from '../../vars';

export const NavBar = style({
  width: '100%',
  height: 72,
  backgroundColor: Colors.White,
  $nest: {
    '&.black': {
      backgroundColor: Colors['Black Hole']
    },
    '&.light': {
      backgroundColor: Colors.Foggy
    }
  }
})

export const Container = style({
  width: '80%',
  margin: '0 auto',
  maxWidth: 1170,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
}, media({ maxWidth: vars.tablet }, {
  width: '95%',
  justifyContent: 'space-between'
}))

export const ContentContainer = style({
  display: 'flex',
  alignItems: 'center'
})

export const LinkContainer = style({

}, media({ maxWidth: vars.tabletPortrait }, {
  display: 'none'
}))

export const Hamburger = style({
  display: 'none',
  margin: '0 20px',
  position: 'relative',
  width: 24,
  height: 25,
  transition: '.5s ease-out',
  cursor: 'pointer',
  zIndex: 4,
  $nest: {
    '&.open': {
      $nest: {
        div: {
          $nest: {
            '&:nth-child(1)': {
              transform: 'translate(1px, 5px) rotate(45deg)'
            },
            '&:nth-child(2)': {
              transform: 'translate(9px, 1px) rotate(-45deg)'
            },
            '&:nth-child(3)': {
              transform: 'translate(-12px, 0)',
              opacity: 0
            },
            '&:nth-child(4)': {
              transform: 'translate(24px, -4px)',
              opacity: 0
            },
            '&:nth-child(5)': {
              transform: 'translate(1px, -3px) rotate(-45deg)'
            },
            '&:nth-child(6)': {
              transform: 'translate(9px, -7px) rotate(45deg)'
            }
          }
        }
      }
    }
  }
}, media({ maxWidth: vars.tabletPortrait }, {
  display: 'block'
}))

export const Bar = style({
  height: 3,
  width: 12,
  backgroundColor: Colors['Black Hole'],
  display: 'block',
  margin: '1px 0',
  transition: '.5s ease-out',
  $nest: {
    '&:nth-child(even)': {
      transform: 'translate(12px, -4px)'
    }
  }
})
