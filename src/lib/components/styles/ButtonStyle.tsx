import { style } from "typestyle/lib";
import * as vars from './vars';

export const Button = style({
  height: 45,
  width: 162,
  borderRadius: 7,
  fontSize: 16,
  fontFamily: 'Helvetica',
  lineHeight: '45px',
  fontWeight: 400,
  color: '#fff',
  textAlign: 'center',
  backgroundColor: vars.primaryColor,
  cursor: 'pointer',
  $nest:{
    '&.submit':{
      margin: '0 0 0 auto'
    }
  }
})
