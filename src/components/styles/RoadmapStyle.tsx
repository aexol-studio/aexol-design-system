import { style } from 'typestyle';
import { Colors } from './Colors';
import * as vars from '../../vars';

export const Popup = style({
  width: 200,
  borderRadius: 8,
  backgroundImage: `linear-gradient(to bottom, rgba(65, 104, 255, 0), ${Colors.Lunatic})`,
  padding: 2,
  position: 'absolute',
  alignItems: 'center',
  flexDirection: 'column',
  left: -90,
  display: 'flex',
  zIndex: 100,
  opacity: 0,
  transition: vars.transition,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)'
})

export const Header = style({
  width: 200,
  height: 30,
  backgroundColor: Colors.Lunatic,
  color: Colors.White,
  borderRadius: '8px 8px 0 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  $nest: {
    '&.blue': {
      backgroundColor: Colors['Outer Space']
    }
  }
})

export const Text = style({
  width: '100%',
  textAlign: 'center',
  fontSize: 14,
  lineHeight: '16px',
  padding: 10,
  borderRadius: '0 0 8px 8px',
  backgroundColor: Colors.White,
  color: Colors['Ancient Stone'],
  position: 'relative',
  $nest: {
    '&::before': {
      content: `''`,
      position: 'absolute',
      bottom: -31,
      right: 82,
      marginTop: -15.5,
      borderWidth: 15.5,
      borderStyle: 'solid',
      borderColor: `${Colors.Lunatic} transparent transparent transparent`
    },
    '&::after': {
      content: `''`,
      position: 'absolute',
      bottom: -24,
      right: 86,
      marginTop: -12,
      borderWidth: 12,
      borderStyle: 'solid',
      borderColor: `${Colors.White} transparent transparent transparent`
    }
  }
})

export const Point = style({
  position: 'relative',
  height: 100,
  cursor: 'pointer',
  $nest: {
    [`&:hover .${Popup}`]: {
      opacity: 1
    }
  }
})

export const Line0 = style({
  position: 'absolute',
  top: 9,
  right: 24,
  display: 'flex',
  alignItems: 'center'
})

export const Line = style({
  position: 'absolute',
  top: 9,
  left: 20,
  display: 'flex',
  alignItems: 'center'
})

export const Title = style({
  fontFamily: 'Helvetica Neue-Medium',
  fontSize: 16,
  lineHeight: '18px',
  textAlign: 'center',
  width: 140,
  position: 'absolute',
  top: 80,
  left: -60,
  $nest: {
    '&.topRight': {
      top: -20,
      left: 8
    },
    '&.top': {
      top: -20
    },
    '&.blue': {
      color: Colors.White
    },
    '&.todo': {
      fontFamily: 'Helvetica Neue',
      color: Colors.Foggy
    }
  }
})

export const Roadmap = style({
  width: '100vw',
  minHeight: 550,
  backgroundColor: Colors.Foggy,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  $nest: {
    '&.blue': {
      backgroundImage: 'linear-gradient(to bottom left, #0091FF, #5D2EEB)'
    }
  }
})

export const Road = style({
  display: 'flex',
  flexWrap: 'wrap',
  marginTop: 150,
  position: 'relative'
})

export const Background = style({
  position: 'absolute',
  top: -100,
  left: 0
})
