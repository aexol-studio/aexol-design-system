import { style } from 'typestyle';
import * as vars from '../../vars';
import { Colors } from './Colors';

export const Select = style({
  position: 'relative',
  width: 393,
  height: 56
});

export const holderSelect = style({
  position: 'relative',
  cursor: 'pointer',
  fontSize: 14
});

export const SelectArrow = style({
  borderColor: `${Colors['Black Hole']} transparent transparent`,
  borderStyle: 'solid',
  borderWidth: '5px 5px 2.5px',
  height: 0,
  width: 0,
  position: 'absolute',
  right: 20,
  top: '50%',
  transform: 'translate(0, -50%)'
});

export const holderValue = style({
  border: `2px solid ${Colors.Sopel}`,
  padding: '0 35px 0 5px',
  height: 56,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center'
});

export const placeholderValue = style({
  padding: '5px 15px',
  width: '100%',
  height: '100%',
  display: 'block',
  color: Colors.Ashes,
  border: 0,
  outline: 0
});

export const showValue = style({
  position: 'relative',
  backgroundColor: '#ddd',
  borderRadius: 2,
  border: '1px solid #666',
  color: '#666',
  display: 'inline-block',
  fontSize: 16,
  lineHeight: '23px',
  padding: '5px 15px',
  margin: '5px 5px 5px 0'
});

export const emptyValue = style({
  border: 0
});

export const valueChoosen = style({
  marginRight: 5
});

export const Delete = style({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '3px 5px'
});

export const holderValues = style({
  display: 'none',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  border: `1px solid ${Colors.Sopel}`,
  borderTop: 0,
  cursor: 'pointer',
  maxHeight: 160,
  overflowY: 'auto',
  position: 'absolute',
  backgroundColor: Colors.White,
  left: 0,
  width: '100%',
  zIndex: 8,
  $nest: {
    li: {
      padding: 10,
      transition: vars.transition,
      $nest: {
        '&:hover': {
          background: Colors.Sopel,
          color: Colors.White
        }
      }
    }
  }
});

export const Li = style({
  padding: '10px 15px',
  transition: vars.transition,
  color: 'inherit',
  $nest: {
    '&:hover': {
      backgroundColors: Colors.Sopel,
      color: Colors.White
    }
  }
});

export const open = style({
  display: 'block'
});

export const Change = style({
  $nest: {
    SelectArrow: {
      top: '30%',
      transform: 'rotate(180deg) translate(0, -50%)'
    }
  }
})

export const Label = style({
  position: 'absolute',
  left: 2,
  top: -18,
  fontSize: 12,
  lineHeight: '16px',
  fontFamily: 'Helvetica Neue-Medium'
})
