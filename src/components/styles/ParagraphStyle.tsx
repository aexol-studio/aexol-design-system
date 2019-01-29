import { style } from 'typestyle';
import * as vars from '../../vars';

export const ParagraphText = style({
  fontFamily: 'Helvetica',
  color: vars.Paragraph,
  fontWeight: 400,
  margin: 0,
  marginBottom: 15,
  $nest: {
    '&.small': {
      fontSize: vars.paragraphSmall
    },
    '&.medium': {
      fontSize: vars.paragraphMedium
    },
    '&.big': {
      fontSize: vars.paragraphBig
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
