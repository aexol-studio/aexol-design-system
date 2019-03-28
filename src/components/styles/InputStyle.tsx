import { style } from 'typestyle';
// import * as vars from '../../vars';

export const TextInputContainer = style({
  $debugName: 'TextInputContainer',
  display: 'flex',
  flexDirection: 'column'
  // maxWidth: 400
})

export const TextInputLabel = style({
  $debugName: 'TextInputLabel',
  fontFamily: 'Helvetica Neue',
  fontSize: 12,
  lineHeight: 2,
  marginLeft: 3
})

export const TextInput = style({
  $debugName: 'TextInput',
  width: '60%',
  color: '#000',
  padding: '15px 10px',
  border: '1px solid rgba(0, 0, 0, 0.12)',
  borderRadius: 4,
  outline: 0,
  marginBottom: 15,
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  $nest: {
    [`&:hover`]: {
      boxShadow: '0 0 0 2px #359FFB',
      color: '#313132',
      FontSize: 16
    }
  }
})

export const TextInputLabelPassword = style({
  $debugName: 'TextInputLabelForgot',
  // position: 'static',
  // width: '20%',
  marginLeft: '-100px',
  zIndex: 1,
  paddingTop: 13
  // background: 'white',
  // padding: '10px 10px',
  // border: '1px solid rgba(0, 0, 0, 0.12)',
  // borderRadius: 4,
  // outline: 0
  // marginBottom: 15
  // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
  // $nest: {
  //   [`&:hover`]: {
  //     boxShadow: '0 0 0 2px #359FFB',
  //     color: '#313132',
  //     FontSize: 16
  //   }
  // }
})

export const TextInputDiv = style({
  $debugName: 'TextInputDiv',
  display: 'flex'
})
  ;
