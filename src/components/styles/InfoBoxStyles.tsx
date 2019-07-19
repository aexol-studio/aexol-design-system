import { style } from 'typestyle'
import { Colors } from './Colors'

export const InfoBoxContainer = style({
  width: 368,
  boxShadow: '8px 8px 24px rgba(0, 0, 0, 0.15)'
})

export const TitleBox = style({
  backgroundColor: Colors['Floating Mandarines'],
  height: 53,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const ContentBox = style({
  backgroundColor: Colors.White,
  padding: '24px 18px'
})
