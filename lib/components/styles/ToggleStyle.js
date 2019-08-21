import { style } from 'typestyle'
import { Colors } from './Colors'
export const Toggle = style({
  height: 24,
  width: 56,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around'
})
export const ToggleElement = style({
  width: '50%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  $nest: {
    '&.on': {
      border: `1px solid ${Colors.Androgyn}`,
      backgroundColor: Colors.White,
      borderRadius: '4px 0 0 4px',
      $nest: {
        '&.oval': {
          borderRadius: '12px 0 0 12px',
          $nest: {
            svg: {
              marginLeft: 5
            }
          }
        },
        svg: {
          display: 'none',
          maxHeight: '90%',
          maxWidth: '90%'
        },
        '&.active': {
          border: `1px solid ${Colors.Ultrasonic}`,
          backgroundColor: Colors.Ultrasonic,
          $nest: {
            svg: {
              display: 'block'
            }
          }
        }
      }
    },
    '&.off': {
      border: `1px solid ${Colors.Androgyn}`,
      backgroundColor: Colors.White,
      borderRadius: '0 4px 4px 0',
      $nest: {
        '&.oval': {
          borderRadius: '0 12px 12px 0',
          $nest: {
            svg: {
              marginRight: 5
            }
          }
        },
        svg: {
          display: 'none',
          maxHeight: '90%',
          maxWidth: '90%'
        },
        '&.active': {
          backgroundColor: Colors.Androgyn,
          $nest: {
            svg: {
              display: 'block'
            }
          }
        }
      }
    }
  }
})
//# sourceMappingURL=ToggleStyle.js.map
