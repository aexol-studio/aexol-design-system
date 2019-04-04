import { style } from 'typestyle'
import { Colors } from './Colors'

export const Loader = style({
  backgroundColor: Colors['Damsel in distress'],
  borderRadius: '50%',
  position: 'relative',
  $nest: {
    '&:after': {
      content: `''`,
      position: 'absolute',
      width: '70%',
      height: '70%',
      top: '15%',
      left: '15%',
      borderRadius: '50%',
      backgroundColor: Colors.White
    }
  }
})

export const LoaderCircle = style({
  transform: 'rotate(-90deg)'
})

export const LoaderFill = style({
  animationTimingFunction: 'linear'
})

export const LoaderProgress = style({
  position: 'absolute',
  width: '40%',
  height: '40%',
  top: '30%',
  left: '30%',
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: Colors.Pacific,
  fontSize: 20
})
