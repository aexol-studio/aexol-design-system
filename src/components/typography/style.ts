import { types, style } from 'typestyle';
export const BaseTypoGraphy: types.NestedCSSProperties = {
  fontFamily: 'Helvetica Neue',
  fontStyle: 'normal'
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
    fontWeight: 'bold'
  }),
  H1: style({
    ...BaseTypoGraphy,
    lineHeight: `48px`,
    fontSize: 50,
    fontWeight: 'bold'
  }),
  H2: style({
    ...BaseTypoGraphy,
    lineHeight: `42px`,
    fontSize: 37,
    fontWeight: 'bold'
  }),
  H3: style({
    ...BaseTypoGraphy,
    lineHeight: `28px`,
    fontSize: 28,
    fontWeight: 'bold'
  }),
  H4: style({
    ...BaseTypoGraphy,
    lineHeight: `21px`,
    fontSize: 21,
    fontWeight: 500
  }),
  PBold: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP,
    fontWeight: 'bold'
  }),
  PMedium: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP,
    fontWeight: 500
  }),
  PRegular: style({
    ...BaseTypoGraphy,
    ...BaseTypoGraphyP,
    fontWeight: 'normal'
  }),
  Label: style({
    ...BaseTypoGraphy,
    lineHeight: `16px`,
    fontSize: 12,
    fontWeight: 500
  })
};
