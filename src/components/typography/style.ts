import { types, style } from 'typestyle';
export const BaseTypoGraphy: types.NestedCSSProperties = {
  fontFamily: 'Helvetica Neue',
  margin: 0,
  padding: 0
};
export const BaseTypoGraphyP: types.NestedCSSProperties = {
  lineHeight: `23px`,
  fontSize: 16
};

export const TypoGraphy = {
  H0: style({
    ...BaseTypoGraphy,
    lineHeight: `73px`,
    fontSize: 66,
    fontFamily: 'Helvetica Neue-Bold'
  }),
  H1: style({
    ...BaseTypoGraphy,
    lineHeight: `48px`,
    fontSize: 50,
    fontFamily: 'Helvetica Neue-Bold'
  }),
  H2: style({
    ...BaseTypoGraphy,
    lineHeight: `42px`,
    fontSize: 37,
    fontFamily: 'Helvetica Neue-Bold'
  }),
  H3: style({
    ...BaseTypoGraphy,
    lineHeight: `28px`,
    fontSize: 28,
    fontFamily: 'Helvetica Neue-Bold'
  }),
  H4: style({
    ...BaseTypoGraphy,
    lineHeight: `21px`,
    fontSize: 21,
    fontFamily: 'Helvetica Neue-Medium'
  }),
  PBold: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP,
    fontFamily: 'Helvetica Neue-Bold'
  }),
  PMedium: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP,
    fontFamily: 'Helvetica Neue-Medium'
  }),
  PRegular: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP
  }),
  Label: style({
    ...BaseTypoGraphy,
    lineHeight: `16px`,
    fontSize: 12,
    fontFamily: 'Helvetica Neue-Medium'
  }),
  // PLead: style({
  //   ...BaseTypoGraphy,
  //   ...BaseTypoGraphyP,

  // }),
};
