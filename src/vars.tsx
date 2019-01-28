import { cssRaw } from 'typestyle';

export const primaryColor = '#4A23C2';
export const Heading = '#25222E';
export const Paragraph = '#514E5A';
export const colorPalete = {
  purple : {
    normal: '#4A23C2',
    dark: '#4A23C9'
  },
  red : {
    normal: '#f5222d'
  },
  blue : {
    normal: '#1890ff'
  },
  grey: {
    normal: '#777777'
  }
}
export const defaultFont = 16
export const smallFont = 12
export const largeFont = 20

cssRaw(`*{font-family: 'Helvetica'}`)
cssRaw(`*{box-sizing: border-box}`)
