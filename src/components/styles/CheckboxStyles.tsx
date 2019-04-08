import { style } from 'typestyle'
import { Colors } from './Colors'

export const Checkbox = style({
  // height: 20,
  // width: 60,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})

export const CheckboxParagraph = style({
  fontFamily: 'Helvetica Neue',
  fontSize: 12
})

export const CheckboxElement = style({
  $debugName: 'CheckboxElement',
  width: 20,
  height: 20,
  display: 'flex',
  flex: 'none',
  cursor: 'pointer',
  marginRight: 20,
  $nest: {
    '&.on': {
      border: `1px solid ${Colors.Sopel}`,
      backgroundColor: Colors.White,
      borderRadius: '4px 4px',
      $nest: {
        '&.round': {
          borderRadius: '13px 13px',
          $nest: {
            svg: {
              marginLeft: 0,
              display: 'none',
              maxHeight: '90%',
              maxWidth: '90%'
            }
          }
        },
        // prettier-ignore
        'svg': {
          display: 'none',
          maxHeight: '100%',
          maxWidth: '100%'
        },
        '&.active': {
          border: `1px solid ${Colors.Sopel}`,
          backgroundColor: Colors.White,
          $nest: {
            svg: {
              display: 'block',
              marginRight: 1
            }
          }
        }
      }
    }
  }
})
