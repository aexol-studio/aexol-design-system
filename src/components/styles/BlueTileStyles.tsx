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
    width: vars.containerWidth,
    maxWidth: vars.maxWidth,
    margin: '0 auto',
    height: 820,
    paddingTop: 80,
    paddingBottom: 80,
    display: 'flex',
    justifyContent: 'space-between'
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      paddingTop: 0,
      paddingBottom: 0,
      justifyContent: 'center',
      width: '100%'
    }
  )
)

export const TileContent = style(
  {
    $debugName: 'TileContent',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%'
  },
  media(
    { minWidth: 0, maxWidth: 1090 },
    {
      flexDirection: 'column-reverse',
      justifyContent: 'space-around'
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
      marginBottom: 25,
      justifyContent: 'center',
      width: '100%'
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
      maxWidth: '80%',
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
      textAlign: 'center',
      $nest: {
        H1: {
          fontSize: '37px'
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
    paddingLeft: 90,
    height: 489,
    marginBottom: 24,
    top: 0
  },
  media(
    { minWidth: 0, maxWidth: 1400 },
    {
      paddingLeft: 0
    }),
    media (
      {maxWidth: 1109},
      {
        marginBottom: 5,
        maxHeight: '80%'
      }
    ),
    media (
      {maxWidth: 1090},
      {
        display: 'none'
      }
    )
)
