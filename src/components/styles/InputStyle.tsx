import { style } from 'typestyle';
// import * as vars from '../../vars';

export const TextInputContainer = style({
  $debugName: 'TextInput'
  // maxWidth: 400
})

export const TextInputLabel = style({
  letterSpacing: 1.5
})

export const TextInput = style({
  width: '100%',
  color: '#000',
  padding: '15px 10px',
  border: '1px solid rgba(0,0,0,.12)',
  borderRadius: 7,
  outline: 0,
  marginBottom: 15
});
