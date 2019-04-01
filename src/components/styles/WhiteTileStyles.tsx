import { style } from 'typestyle'
import { Colors } from './Colors'

export const WhiteTileContent = style({
  $debugName: 'TileLeftContent',
  display: 'flex',
  alignItems: 'center',
  marginRight: 50,
  maxWidth: 500,
  background: Colors.White,
  borderRadius: 8,
  width: 400,
  height: 500,
  boxShadow: '8px 8px 32px rgba(81, 78, 90, 0.6)'
})
