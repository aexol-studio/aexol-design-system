import { style } from 'typestyle';
import * as vars from '../../vars';

export const Preloader = style({
  backgroundColor: vars.colorPalete.purple.superLight,
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
      backgroundColor: vars.whiteBackground
    }
  }
})

export const PreloaderCircle = style({
  transform: 'rotate(-90deg)'
})

export const PreloaderFill = style({
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear'
})
