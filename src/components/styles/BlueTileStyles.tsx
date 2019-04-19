import { style, media } from 'typestyle'
import { Colors } from './Colors'
import * as vars from '../../vars'

export const BlueTileMain = style({
  $debugName: 'BlueTileMain',
  background: Colors['Alien Blood']
})

export const BlueTileContainer = style(
  {
    $debugName: 'BlueTileContainer',
    maxHeight: '100%',
    height: 820,
    paddingTop: 80,
    paddingBottom: 80,
    display: 'flex',
    justifyContent: 'center'
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      paddingTop: 0,
      paddingBottom: 0
    }
  )
)

export const TileContent = style(
  {
    $debugName: 'TileContent',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: vars.containerWidth,
    height: '100%'
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      flexDirection: 'column-reverse'
    }
  )
)

export const TileLeftContent = style(
  {
    $debugName: 'TileLeftContent',
    display: 'flex',
    alignItems: 'center',
    marginRight: 16
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      marginRight: 0,
      marginBottom: 25
    }
  )
)

export const TileRightContent = style(
  {
    $debugName: 'TileRightContent',
    maxWidth: 668,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginLeft: 16,
    marginBottom: 20
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      display: 'flex',
      alignSelf: 'center',
      marginLeft: 0,
      maxWidth: 521,
      marginBottom: 0,
      paddingTop: 20
    }
  )
)

export const TileRightHeader = style(
  {
    $debugName: 'TileRightHeader',
    marginTop: 5,
    color: Colors.White
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      marginTop: 0,
      maxWidth: 464,
      $nest: {
        H1: {
          fontSize: '40px'
        }
      }
    }
  )
)

export const TileRightParagraph = style(
  {
    $debugName: 'TileLeftHeader',
    marginTop: 14
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      display: 'none'
    }
  )
)

export const TileRightEvelope = style(
  {
    $debugName: 'TileRightEvelope',
    display: 'flex',
    height: 489,
    width: 355,
    top: 0,
    background: 'white'
  },
  media(
    { minWidth: 0, maxWidth: 1242 },
    {
      display: 'none'
    }
  )
)
