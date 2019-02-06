import { style, keyframes } from 'typestyle';
import * as vars from '../../../vars';

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

export const Notification = style({

})

export const NoticeBox = style({
  width: 400,
  minHeight: 40,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: 4,
  backgroundColor: vars.whiteBackground,
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
  backgroundColor: vars.colorPalete.blue.superLight,
  borderRadius: '4px 0 0 4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  $nest: {
    '&.alert': {
      backgroundColor: vars.colorPalete.yellow.superLight
    },
    '&.error': {
      backgroundColor: vars.colorPalete.red.superLight
    },
    '&.success': {
      backgroundColor: vars.colorPalete.green.superLight
    }
  }
})

export const NoticeIcon = style({
  width: 20,
  height: 20,
  borderRadius: '50%',
  backgroundColor: vars.colorPalete.blue.normal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  $nest: {
    '&.alert': {
      backgroundColor: vars.colorPalete.yellow.normal
    },
    '&.error': {
      backgroundColor: vars.colorPalete.red.normal
    },
    '&.success': {
      backgroundColor: vars.colorPalete.green.normal
    },
    'svg': {
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
