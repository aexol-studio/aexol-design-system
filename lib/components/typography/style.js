import { style } from 'typestyle'
export const BaseTypoGraphy = {
  fontFamily: 'Helvetica Neue',
  margin: 0,
  padding: 0
}
export const BaseTypoGraphyP = {
  lineHeight: `23px`,
  fontSize: 16
}
export const TypoGraphy = {
  H0: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `73px`,
      fontSize: 66,
      fontFamily: 'Helvetica Neue-Bold'
    })
  ),
  H1: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `48px`,
      fontSize: 50,
      fontFamily: 'Helvetica Neue-Bold'
    })
  ),
  H2: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `42px`,
      fontSize: 37,
      fontFamily: 'Helvetica Neue-Bold'
    })
  ),
  H3: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `28px`,
      fontSize: 28,
      fontFamily: 'Helvetica Neue-Bold'
    })
  ),
  H4: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `21px`,
      fontSize: 21,
      fontFamily: 'Helvetica Neue-Medium'
    })
  ),
  PBold: style(
    Object.assign({}, BaseTypoGraphy, BaseTypoGraphyP, {
      fontFamily: 'Helvetica Neue-Bold'
    })
  ),
  PMedium: style(
    Object.assign({}, BaseTypoGraphy, BaseTypoGraphyP, {
      fontFamily: 'Helvetica Neue-Medium'
    })
  ),
  PRegular: style(Object.assign({}, BaseTypoGraphy, BaseTypoGraphyP)),
  Label: style(
    Object.assign({}, BaseTypoGraphy, {
      lineHeight: `16px`,
      fontSize: 12,
      fontFamily: 'Helvetica Neue-Medium'
    })
  ),
  PFooterTitle: style(
    Object.assign({}, BaseTypoGraphy, BaseTypoGraphyP, {
      color: '#514E5A',
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 0,
      marginTop: 0
    })
  ),
  PFooterName: style(
    Object.assign({}, BaseTypoGraphy, BaseTypoGraphyP, {
      color: '#514E5A',
      fontSize: 16,
      marginBottom: 0,
      marginTop: 5
    })
  )
}
//# sourceMappingURL=style.js.map
