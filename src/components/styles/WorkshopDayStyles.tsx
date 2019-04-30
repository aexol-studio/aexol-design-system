import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'

export const WorkshopDayContainer = style(
  {
    $debugName: 'WorkshopDay',
    backgroundColor: Colors.White,
    width: 368,
    borderRadius: 8,
    padding: '32px 20px'
  },
  media(
    { maxWidth: Breakpoints.Phone },
    {
      width: '100%'
    }
  )
)

export const WorkshopDayHeader = style({
  borderRadius: 2,
  color: Colors.White,
  fontSize: 12,
  lineHeight: '16px',
  padding: '6px 8px',
  display: 'inline-block',
  marginBottom: 12,
  fontFamily: 'Helvetica Neue-Medium'
})

export const List = style({
  color: Colors.Lead,
  display: 'flex',
  flexDirection: 'column'
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
