import { style } from 'typestyle';
// import * as vars from './vars';

export const TextInputContainer = style({
  $debugName: 'TextInput',
  maxWidth: 400
})

export const TextInputLabel = style({
  letterSpacing: 1.5
})

export const TextInput = style({
  fontFamily: 'Helvetica',
  width: '100%',
  height: 45,
  color: '#000',
  padding: '0 10px',
  fontSize: 16,
  fontWeight: 300,
  border: '1px solid rgba(0,0,0,.12)',
  borderRadius: 7,
  outline: 0,
  marginBottom: 15
});
