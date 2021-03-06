import { style } from 'typestyle'
import { Colors } from './Colors'

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
  maxHeight: 60,
  minHeight: 50,
  maxWidth: 140,
  margin: 0
})

export const BrandBarContainer = style({
  width: '80%',
  maxWidth: 1170,
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
  flexWrap: 'wrap',
  position: 'relative',
  zIndex: 1
})

export const BrandBarBackground = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  backgroundImage: 'linear-gradient(193.55deg, #0091FF 0%, #5D2EEB 98.38%)',
  opacity: 0.05,
  filter: 'blur(30px)',
  zIndex: -1
})

export const BrandLink = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: 'inherit'
})
