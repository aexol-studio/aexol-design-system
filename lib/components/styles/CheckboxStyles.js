import { style } from 'typestyle'
import { Colors } from './Colors'
export const Checkbox = style({
  display: 'flex',
  alignItems: 'center'
})
export const CheckboxParagraph = style({
  $debugName: 'CheckboxParagraph',
  fontFamily: 'Helvetica Neue',
  fontSize: 12,
  marginTop: 0,
  marginBottom: 0
})
export const CheckboxElement = style({
  $debugName: 'CheckboxElement',
  width: 20,
  height: 20,
  display: 'flex',
  flex: 'none',
  cursor: 'pointer',
  marginRight: 17,
  $nest: {
    '&.on': {
      border: `2px solid ${Colors.Sopel}`,
      backgroundColor: Colors.White,
      borderRadius: '4px 4px',
      $nest: {
        '&.round': {
          borderRadius: '13px 13px',
          $nest: {
            svg: {
              display: 'none',
              maxHeight: '100%',
              maxWidth: '100%'
            }
          }
        },
        svg: {
          display: 'none',
          maxHeight: '100%',
          maxWidth: '100%'
        },
        '&.active': {
          border: `2px solid ${Colors['Super Nova']}`,
          backgroundColor: Colors.White,
          $nest: {
            svg: {
              display: 'block',
              marginLeft: 1,
              marginTop: 2,
              marginRight: 2
            }
          }
        }
      }
    }
  }
})
//# sourceMappingURL=CheckboxStyles.js.map
