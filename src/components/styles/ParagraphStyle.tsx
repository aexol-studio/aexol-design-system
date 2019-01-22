import { style } from 'typestyle';
import * as vars from './vars';

export const ParagraphText = style({
  fontFamily: 'Helvetica',
  color: vars.Paragraph,
  fontWeight: 400,
  margin: 0,
  marginBottom: 16,
  $nest: {
    '&.small': {
      fontSize: 22,
      lineHeight: '28px'
    },
    '&.medium': {
      fontSize: 28,
      lineHeight: '34px'
    },
    '&.big': {
      fontSize: 34,
      lineHeight: '40px'
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
