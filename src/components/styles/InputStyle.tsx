import { style } from 'typestyle'
import { Colors } from './Colors'

export const TextInputContainer = style({
  $debugName: 'TextInputContainer',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 6
})

export const TextInputLabelDiv = style({
  $debugName: 'TextInputLabelDiv',
  display: 'flex'
})

export const TextInputLabel = style({
  $debugName: 'TextInputLabel',
  fontFamily: 'Helvetica Neue',
  lineHeight: '16px',
  marginLeft: 3,
  marginBottom: 4,
  fontSize: 12
})

export const TextInputStar = style({
  $debugName: 'TextInputStar',
  color: Colors.ACME
})

export const TextInput = style({
  $debugName: 'TextInput',
  width: 393,
  height: 56,
  color: Colors.Ashes,
  paddingLeft: 18,
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 4,
  outline: 0,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  $nest: {
    [`&:hover`]: {
      boxShadow: `0 0 0 2px ${Colors.Pacific}`,
      color: `${Colors.Ashes}`
    },
    [`&::placeholder`]: {
      color: `${Colors.Ashes}`
    }
  }
})

export const TextInputLabelPassword = style({
  $debugName: 'TextInputPassword',
  marginLeft: -100,
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  $nest: {
    a: {
      marginTop: 5,
      paddingBottom: 1
    }
  }
})

export const TextInputDiv = style({
  $debugName: 'TextInputDiv',
  display: 'flex'
})

export const TextInputSpacer = style({
  $debugName: 'TextInputDiv',
  backgroundColor: Colors.Sopel,
  height: 30,
  width: 2,
  marginRight: 16
})

export const TextInputHref = style({
  $debugName: 'TextInputHref',
  textDecoration: 'none',
  cursor: 'pointer',
  $nest: {
    [`&:hover`]: {
      color: `${Colors.Pacific} !important`
    },
    [`&:visited`]: {
      color: Colors.Ashes
    }
  }
})
