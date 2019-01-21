import { style } from 'typestyle';
import * as vars from './vars';

export const HeadingText = style({
  fontFamily: 'Helvetica',
  color: vars.Heading,
  fontWeight: 600,
  margin: 0,
  marginBottom: 8,
  $nest: {
    '&.jumbo': {
      fontSize: 66,
      lineHeight: '64px'
    },
    '&.h1': {
      fontSize: 50,
      lineHeight: '48px'
    },
    '&.h2': {
      fontSize: 33,
      lineHeight: '31px'
    },
    '&.h3': {
      fontSize: 22,
      lineHeight: '20px'
    },
    '&.left': {
      textAlign: 'left'
    },
    '&.center': {
      textAlign: 'center'
    },
    '&.right': {
      textAlign: 'right'
    }
  }
})
