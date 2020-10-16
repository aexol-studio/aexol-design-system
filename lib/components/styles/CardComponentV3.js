import { style } from 'typestyle'
import { Colors } from './Colors'
export const CardComponentContainer = style({
  $debugName: 'CardComponentTile',
  backgroundColor: Colors.White,
  width: 358,
  minHeight: 242,
  boxShadow: '8px 8px 20px rgba(0,0,0,0.08)',
  padding: '50px 24px 20px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 32,
  position: 'relative'
})
export const Icon = style({
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translate(-50%, -50%)'
})
//# sourceMappingURL=CardComponentV3.js.map
