import { style } from 'typestyle'
import * as vars from '../../vars'
import { Colors } from './Colors'
export const FileUpload = style({
  display: 'none'
})
export const FileLabel = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 168,
  height: 40,
  borderRadius: 4,
  border: 0,
  cursor: 'pointer',
  transition: vars.transition,
  backgroundColor: Colors.Foggy,
  color: Colors['Ancient Stone'],
  $nest: {
    '&:hover': {
      backgroundColor: Colors.Sopel
    }
  }
})
//# sourceMappingURL=FileUploadStyle.js.map
