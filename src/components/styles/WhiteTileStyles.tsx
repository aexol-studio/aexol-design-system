import { style } from 'typestyle'
import { Colors } from './Colors'

export const WhiteTileMain = style({
  $debugName: 'WhiteTileMain',
  display: 'flex',
  alignItems: 'center',
  background: Colors.White,
  borderRadius: 8,
  width: 521,
  height: 614,
  boxShadow: '8px 8px 32px rgba(81, 78, 90, 0.6)',
  justifyContent: 'center'
})

export const WhiteTileContent = style({
  $debugName: 'WhiteTileContent',
  display: 'flex',
  flexDirection: 'column',
  width: 390
})

export const WhiteTileCheckboxContent = style({
  $debugName: 'WhiteTileCheckboxContent',
  display: 'flex',
  alignItems: 'end',
  marginBottom: 11
})

export const WhiteTileCheckboxContentParagraph = style({
  $debugName: 'WhiteTileCheckboxContentParagraph',
  margin: 0,
  padding: 0,
  lineHeight: `16px`,
  fontSize: 12,
  fontFamily: 'Helvetica Neue',
  color: Colors['Dark Side']
})

export const WhiteTileCheckboxElement = style({
  $debugName: 'WhiteTileCheckboxElement',
  marginTop: 23
})

export const WhiteTileCheckboxContentButton = style({
  $debugName: 'WhiteTileCheckboxContentButton',
  marginTop: 24,
  display: 'flex',
  justifyContent: 'flex-end'
})

export const WhiteTileContentParagraph = style({
  $debugName: 'WhiteTileContentParagraph',
  marginTop: 14
})

export const WhiteTileSelectContent = style({
  $debugName: 'WhiteTileSelectContent',
  marginTop: 15,
  color: Colors.Black
})
