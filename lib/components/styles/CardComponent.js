import { style } from 'typestyle'
import { Colors } from './Colors'
export const CardComponentContainer = style({
  $debugName: 'CardComponentTile',
  backgroundColor: Colors.White,
  width: 358,
  minHeight: 251,
  boxShadow: '8px 8px 24px rgba(0,0,0,0.15)',
  padding: '50px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 32
})
export const rectangle = style({
  $debugName: 'rectangle',
  display: 'flex'
})
export const rectangle1 = style({
  $debugName: 'rectangle1',
  width: 84,
  height: 7,
  background: Colors['Alien Blood']
})
export const rectangle2 = style({
  $debugName: 'rectangle2',
  width: 7,
  height: 7
})
//# sourceMappingURL=CardComponent.js.map
