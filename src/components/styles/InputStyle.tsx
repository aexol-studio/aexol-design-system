import { style } from 'typestyle';
import { Colors } from './Colors';

export const TextInputContainer = style({
  $debugName: 'TextInputContainer',
  display: 'flex',
  flexDirection: 'column'
})

export const TextInputLabel = style({
  $debugName: 'TextInputLabel',
  fontFamily: 'Helvetica Neue',
  lineHeight: 2,
  marginLeft: 3
})

export const TextInput = style({
  $debugName: 'TextInput',
  width: '60%',
  color: Colors.Black,
  padding: '15px 10px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 4,
  outline: 0,
  marginBottom: 15,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  $nest: {
    [`&:hover`]: {
      boxShadow: `0 0 0 2px ${Colors.Pacific}`,
      color: Colors['Dark Side']
    }
  }
})

export const TextInputLabelPassword = style({
  $debugName: 'TextInputLabelPassword',
  marginLeft: '-100px',
  zIndex: 1,
  height: 50,
  display: 'flex'
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
  marginRight: 16,
  marginTop: 10
})

export const TextInputHref = style ({
  $debugName: 'TextInputHref',
  color: Colors.Black,
  textDecoration: 'none',
  paddingTop: 13
})
  ;
