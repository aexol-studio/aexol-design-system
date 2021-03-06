import { cssRaw, fontFace } from 'typestyle'

export const containerWidth = '80%'
export const maxWidth = 1170

export const defaultFont = 16
export const smallFont = 12
export const largeFont = 22

export const transition = '0.3s ease-out'

fontFace({
  fontFamily: 'Helvetica Neue',
  fontWeight: 450,
  fontStyle: 'normal',
  src: `url(${require('./assets/fonts/HelveticaNeue.eot')});
  src: url(${require('./assets/fonts/HelveticaNeue.eot')}) format('embedded-opentype'),
        url(${require('./assets/fonts/HelveticaNeue.woff2')}) format('woff2'),
        url(${require('./assets/fonts/HelveticaNeue.woff')}) format('woff'),
        url(${require('./assets/fonts/HelveticaNeue.ttf')}) format('truetype')`
})

fontFace({
  fontFamily: 'Helvetica Neue-Medium',
  fontWeight: 650,
  fontStyle: 'normal',
  src: `url(${require('./assets/fonts/HelveticaNeue-Medium.eot')});
  src: url(${require('./assets/fonts/HelveticaNeue-Medium.eot')}) format('embedded-opentype'),
        url(${require('./assets/fonts/HelveticaNeue-Medium.woff2')}) format('woff2'),
        url(${require('./assets/fonts/HelveticaNeue-Medium.woff')}) format('woff'),
        url(${require('./assets/fonts/HelveticaNeue-Medium.ttf')}) format('truetype')`
})

fontFace({
  fontFamily: 'Helvetica Neue-CondensedBold',
  fontWeight: 770,
  fontStyle: 'normal',
  src: `url(${require('./assets/fonts/HelveticaNeue-CondensedBold.eot')});
  src: url(${require('./assets/fonts/HelveticaNeue-CondensedBold.eot')}) format('embedded-opentype'),
        url(${require('./assets/fonts/HelveticaNeue-CondensedBold.woff2')}) format('woff2'),
        url(${require('./assets/fonts/HelveticaNeue-CondensedBold.woff')}) format('woff'),
        url(${require('./assets/fonts/HelveticaNeue-CondensedBold.ttf')}) format('truetype')`
})

fontFace({
  fontFamily: 'Helvetica Neue-Thin',
  fontWeight: 370,
  fontStyle: 'normal',
  src: `url(${require('./assets/fonts/HelveticaNeue-Thin.eot')});
  src: url(${require('./assets/fonts/HelveticaNeue-Thin.eot')}) format('embedded-opentype'),
        url(${require('./assets/fonts/HelveticaNeue-Thin.woff2')}) format('woff2'),
        url(${require('./assets/fonts/HelveticaNeue-Thin.woff')}) format('woff'),
        url(${require('./assets/fonts/HelveticaNeue-Thin.ttf')}) format('truetype')`
})

fontFace({
  fontFamily: 'Helvetica Neue-Bold',
  fontWeight: 750,
  fontStyle: 'normal',
  src: `url(${require('./assets/fonts/HelveticaNeue-Bold.eot')});
  src: url(${require('./assets/fonts/HelveticaNeue-Bold.eot')}) format('embedded-opentype'),
        url(${require('./assets/fonts/HelveticaNeue-Bold.woff2')}) format('woff2'),
        url(${require('./assets/fonts/HelveticaNeue-Bold.woff')}) format('woff'),
        url(${require('./assets/fonts/HelveticaNeue-Bold.ttf')}) format('truetype')`
})

cssRaw(`*{font-family: 'Helvetica Neue'}`)
cssRaw(`*{font-size: ${defaultFont}px}`)
cssRaw(`*{font-weight: 450}`)
cssRaw(`*{box-sizing: border-box}`)
cssRaw(`
  html,body{
    scroll-behavior: smooth;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
`)
