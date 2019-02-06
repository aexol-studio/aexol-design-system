import { cssRaw } from 'typestyle';

export const containerWidth = '80%';
export const whiteBackground = '#FFF'
export const Heading = '#25222E';
export const Paragraph = '#514E5A';
export const greyText = '#757575';
export const blackText = '#313132';
export const whiteText = '#FFF'
export const colorPalete = {
  purple : {
    superLight: '#E1E0FF',
    light: '#645EE1',
    normal: '#4A45B9',
    dark: '#343096',
    superDark: '#050254'
  },
  red : {
    superLight: '#FFE7EB',
    light: '#FF5E6C',
    normal: '#F9193F',
    dark: '#D11031',
    superDark: '#43030E'
  },
  blue : {
    superLight: '#E1F3FF',
    light: '#359FFB',
    normal: '#008BF5',
    dark: '#0D74C2',
    superDark: '#012744'
  },
  grey: {
    superLight: '#999DA0',
    light: '#757575',
    normal: '#4B4B4C',
    dark: '#313132',
    superDark: '#25222E'
  },
  darkBlue: {
    superLight: '#DFE6F7',
    light: '#4168FF',
    normal: '#1844ED',
    dark: '#1539C6',
    superDark: '#061241'
  },
  green: {
    superLight: '#E3FFEB',
    light: '#56DA67',
    normal: '#10C642',
    dark: '#0BA134',
    superDark: '#01270B'
  },
  sea: {
    superLight: '#CCFFFC',
    light: '#51E1D8',
    normal: '#38C1B8',
    dark: '#04A197',
    superDark: '#01312E'
  },
  yellow: {
    superLight: '#FFF6D5',
    light: '#EAC819',
    normal: '#D4AD25',
    dark: '#A38311',
    superDark: '#473803'
  },
  orange: {
    superLight: '#FFD9CD',
    light: '#FB6B3D',
    normal: '#E45021',
    dark: '#A52E08',
    superDark: '#461303'
  },
  sand: {
    superLight: '#FFE3C8',
    light: '#F19037',
    normal: '#E57C1A',
    dark: '#C36106',
    superDark: '#3F1F0'
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

export const transition = '0.3s ease-out'

cssRaw(`*{font-family: 'Helvetica'}`)
cssRaw(`*{font-size: ${defaultFont}px}`)
cssRaw(`*{font-weight: 400}`)
cssRaw(`*{box-sizing: border-box}`)
