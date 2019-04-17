import { style, media } from 'typestyle'
import { Colors } from './Colors'

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
    display: 'flex'
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
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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
    marginRight: 25
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      marginRight: 0
    }
  )
)

export const TileRightContent = style(
  {
    $debugName: 'TileRightContent',
    maxWidth: 500,
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'flex-end',
    marginLeft: 25,
    marginBottom: 20
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      display: 'flex',
      alignSelf: 'center',
      marginLeft: 0
    }
  )
)

export const TileRightHeader = style(
  {
    $debugName: 'TileLeftHeader',
    marginTop: 5
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      marginTop: 0
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
    { minWidth: 0, maxWidth: 1090 },
    {
      display: 'none'
    }
  )
)
