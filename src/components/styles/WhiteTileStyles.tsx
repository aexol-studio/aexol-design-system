import { style, media } from 'typestyle'
import { Colors } from './Colors'

export const WhiteTileMain = style({
  $debugName: 'WhiteTileMain',
  display: 'flex',
  alignItems: 'center',
  background: Colors.White,
  borderRadius: 8,
  width: 468,
  height: 614,
  boxShadow: '8px 8px 32px rgba(81, 78, 90, 0.6)',
  justifyContent: 'center'
},  media(
  { minWidth: 0, maxWidth: 535 },
  {
    width: '80%'
  }
))

export const WhiteTileContent = style({
  $debugName: 'WhiteTileContent',
  display: 'flex',
  flexDirection: 'column',
  width: 390
},  media(
  { minWidth: 0, maxWidth: 535 },
  {
    width: '80%'
  }
))

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
  marginTop: 20,
  color: Colors.Black
})
