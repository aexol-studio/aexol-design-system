import { style } from 'typestyle';
import * as vars from '../../vars';

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
      border: `1px solid ${vars.colorPalete.grey.normal}`,
      backgroundColor: vars.whiteBackground,
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
        'svg': {
          display: 'none',
          maxHeight: '90%',
          maxWidth: '90%'
        },
        '&.active': {
          border: `1px solid ${vars.colorPalete.purple.normal}`,
          backgroundColor: vars.colorPalete.purple.normal,
          $nest: {
            svg: {
              display: 'block'
            }
          }
        }
      }
    },
    '&.off': {
      border: `1px solid ${vars.colorPalete.grey.normal}`,
      backgroundColor: vars.whiteBackground,
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
        'svg': {
          display: 'none',
          maxHeight: '90%',
          maxWidth: '90%'
        },
        '&.active': {
          backgroundColor: vars.colorPalete.grey.normal,
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
