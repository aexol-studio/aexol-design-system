import { style } from 'typestyle';
import { Colors } from './Colors';

export const BrandCardContainer = style({
  height: 136,
  width: 218,
  backgroundColor: Colors.White,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 19px 19px 0'
})

export const BrandCard = style({
  maxHeight: 70,
  minHeight: 50,
  maxWidth: 190
})

export const BrandBarContainer = style({
  maxWidth: 1168,
  padding: '40px 0',
  borderTop: `3px solid ${Colors.Sopel}`,
  borderBottom: `3px solid ${Colors.Sopel}`,
  margin: '0 auto'
})

export const BrandLogos = style({
  marginRight: -19,
  marginBottom: 35,
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap'
})
