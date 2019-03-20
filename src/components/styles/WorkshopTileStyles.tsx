import { style, classes } from 'typestyle';
import { Colors } from './Colors';

export const WorkshopTileContainer = style({
  $debugName: 'WorkshopTile',
  backgroundColor: Colors.White,
  width: 368,
  height: 166,
  display: 'flex',
  $nest: {
    '&.topLeft': {
      borderRadius: '20px 0 0 0'
    },
    '&.topRight': {
      borderRadius: '0 20px 0 0'
    },
    '&.bottomLeft': {
      borderRadius: '0 0 0 20px'
    },
    '&.bottomRight': {
      borderRadius: '0 0 20px 0'
    }
  }
})

export const SideBar = style({
  backgroundColor: Colors.Pacific,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 66,
  height: '100%',
  borderRight: `6px solid ${Colors.Sopel}`,
  $nest: {
    '&.topLeft': {
      borderRadius: '20px 0 0 0'
    },
    '&.bottomLeft': {
      borderRadius: '0 0 0 20px'
    }
  }
})

export const SideBarText = style({
  color: Colors.White,
  fontSize: 28,
  lineHeight: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const TextFirstLine = style({
  color: Colors.White,
  fontSize: 28,
  lineHeight: '20px',
  fontFamily: 'Helvetica Neue-CondensedBold',
  marginBottom: 1
})

export const DayEnding = style({
  fontSize: 28,
  lineHeight: '20px',
  color: Colors['Black Hole'],
  fontFamily: 'Helvetica Neue-CondensedBold',
  letterSpacing: -1
})

export const Day = style({
  textTransform: 'uppercase',
  fontSize: 24,
  lineHeight: '20px',
  fontFamily: 'Helvetica Neue-CondensedBold',
  fontWeight: 770,
  margin: '0 auto'
})

export const List = style({
  color: Colors.Lead,
  margin: '13px 7px',
  display: 'flex',
  overflowY: 'auto',
  flexDirection: 'column',
  $nest: {
    '&.topLeft': {
      borderRadius: '20px 0 0 0'
    },
    '&.topRight': {
      borderRadius: '0 20px 0 0'
    },
    '&.bottomLeft': {
      borderRadius: '0 0 0 20px'
    },
    '&.bottomRight': {
      borderRadius: '0 0 20px 0'
    },
    '&:before': {
      content: `''`,
      margin: 'auto'
    },
    '&:after': {
      content: `''`,
      margin: 'auto'
    }
  }
})

export const ListEl = style({
  lineHeight: '20px',
  $nest: {
    '&:before': {
      content: `'\u00b7'`,
      paddingRight: 5
    }
  }
})

export const WorkshopTextTileContainer = classes(WorkshopTileContainer,
  style ({
    borderRadius: '20px 0 0 0',
    padding: 18,
    paddingLeft: 25,
    overflowY: 'auto'
  })
)
