import { style, media } from 'typestyle';
import { Colors } from './Colors';
// import {Breakpoints} from './Breakpoints';

export const BlueTileMain = style({
  $debugName: 'BlueTileMain',
  background: Colors['Alien Blood']
})

export const BlueTileContainer = style({
  $debugName: 'BlueTileContainer',
  maxHeight: 1440,
  height: 600,
  margin: '0 auto',
  paddingTop: 80,
  paddingBottom: 80,
  paddingRight: 136,
  paddingLeft: 136,
  display: 'flex',
  alignContent: 'center'
})

export const TileContent = style({
  $debugName: 'TileContent',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-end'
})

export const TileLeftContent = style({
  $debugName: 'TileLeftContent',
  display: 'flex',
  alignItems: 'center',
  marginRight: 50,
  height: '100%'
})

export const TileRightContent = style({
  $debugName: 'TileRightContent',
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-end'
})

export const TileLeftHeader = style ({
  $debugName: 'TileLeftHeader',
  marginTop: 5
})

export const TileLeftParagraph = style ({
  $debugName: 'TileLeftHeader',
  marginTop: 14
})
