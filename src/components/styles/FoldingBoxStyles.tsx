import { style } from 'typestyle'
import { Colors } from './Colors'

export const FoldingContainer = style({
  backgroundColor: Colors.White,
  width: 360
})

export const TitleBox = style({
  display: 'flex'
})

export const Arrow = style({
  border: `solid ${Colors.Ashes}`,
  height: 13,
  marginTop: 5,
  borderWidth: '0 2px 2px 0',
  display: 'inline-block',
  padding: 5,
  marginRight: 15,
  marginBottom: 3,
  transform: 'rotate(-45deg)',
  transformOrigin: '65% 65%',
  transition: '.35s ease-out',
  cursor: 'pointer',
  $nest: {
    '&.open': {
      transform: 'rotate(45deg)'
    }
  }
})

export const Content = style({
  display: 'none',
  transition: '.35s ease-out',
  width: 330,
  paddingLeft: 27,
  marginBottom: 24,
  $nest: {
    '&.open': {
      display: 'block'
    }
  }
})
