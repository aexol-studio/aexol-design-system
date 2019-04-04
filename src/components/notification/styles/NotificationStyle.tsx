import { style, keyframes } from 'typestyle'
import { Colors } from '../../styles/Colors'

const slideAndFade = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(100px, 0px)'
  },
  '100%': {
    opacity: 1,
    transform: 'translate(0px, 0px)'
  }
})

export const NotificationContainer = style({
  $debugName: 'Notification',
  position: 'fixed',
  top: 0,
  right: 0
})

export const Notification = style({})

export const NoticeBox = style({
  width: 400,
  minHeight: 40,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: 4,
  backgroundColor: Colors.White,
  display: 'flex',
  alignItems: 'stretch',
  margin: 20,
  animation: `${slideAndFade} ease 1s`,
  animationIterationCount: 1,
  animationFillMode: 'forwards'
})

export const NoticeText = style({
  width: '80%',
  padding: 10
})

export const NoticeIconBox = style({
  width: '10%',
  backgroundColor: Colors['Ozone Layer'],
  borderRadius: '4px 0 0 4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  $nest: {
    '&.alert': {
      backgroundColor: Colors['Captain Parrot']
    },
    '&.error': {
      backgroundColor: Colors['Cotton Candy']
    },
    '&.success': {
      backgroundColor: Colors['Plutonic Briza']
    }
  }
})

export const NoticeIcon = style({
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: Colors['Space Pirate'],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  $nest: {
    '&.alert': {
      backgroundColor: Colors.Fireball
    },
    '&.error': {
      backgroundColor: Colors['Cherry Bomb']
    },
    '&.success': {
      backgroundColor: Colors.Serpentine
    },
    svg: {
      width: '100%',
      height: '100%'
    }
  }
})

export const NoticeClose = style({
  width: '10%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  $nest: {
    svg: {
      width: 16,
      height: 16
    }
  }
})
