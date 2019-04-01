import { style } from 'typestyle'
import { Colors } from './Colors'

export const Toggle = style({
  height: 20,
  width: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})

export const CheckboxElement = style({
  width: '50%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
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
              marginLeft: 0
            }
          }
        },
        svg: {
          display: 'none',
          maxHeight: '90%',
          maxWidth: '90%'
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
