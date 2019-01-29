import { style } from 'typestyle';
import * as vars from '../../vars';

export const HeadingText = style({
  color: vars.Heading,
  fontWeight: 600,
  margin: 0,
  marginBottom: 8,
  $nest: {
    '&.jumbo': {
      fontSize: vars.headingJumbo
    },
    '&.h1': {
      fontSize: vars.headingH1
    },
    '&.h2': {
      fontSize: vars.headingH2
    },
    '&.h3': {
      fontSize: vars.headingH3
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
