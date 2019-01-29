import { cssRaw } from 'typestyle';

export const primaryColor = '#4A23C2';
export const containerWidth = '80%';
export const Heading = '#25222E';
export const Paragraph = '#514E5A';
export const greyText = '#757575';
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
};
export const defaultFont = 16;
export const smallFont = 12;
export const largeFont = 22;
export const headingH3 = 22;
export const headingH2 = 33;
export const headingH1 = 50;
export const headingJumbo = 66;
export const paragraphSmall = 22;
export const paragraphMedium = 28;
export const paragraphBig = 34;

cssRaw(`*{font-family: 'Helvetica'}`)
cssRaw(`*{font-size: ${defaultFont}px}`)
cssRaw(`*{font-weight: 400}`)
cssRaw(`*{box-sizing: border-box}`)
