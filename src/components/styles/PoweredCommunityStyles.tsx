import { style } from 'typestyle';
import { Colors } from './Colors';

export const CommunityCardContainer = style({
  height: 264,
  width: 368,
  backgroundColor: Colors.Sopel,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  margin: '0 33px 33px 0'
})

export const CardVal = style({
  fontSize: 100,
  lineHeight: '88px',
  color: Colors.Lunatic,
  fontFamily: 'Helvetica Neue-Thin'
})

export const CardDescript = style({
  fontSize: 21,
  lineHeight: '21px',
  textAlign: 'right',
  position: 'absolute',
  bottom: 0,
  width: '100%',
  paddingRight: 8
})

export const PoweredCommunityContainer = style({
  width: '80%',
  maxWidth: 1170,
  padding: '40px 0',
  margin: '0 auto'
})

export const Cards = style({
  marginRight: -33,
  marginBottom: 2,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
})
