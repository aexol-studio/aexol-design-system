import { types, style } from 'typestyle';
export const BaseTypoGraphy: types.NestedCSSProperties = {
  fontFamily: 'Helvetica Neue',
  fontStyle: 'normal'
};
export const BaseTypoGraphyP: types.NestedCSSProperties = {
  lineHeight: 23,
  fontSize: 16
};

export const TypoGraphy = {
  H0: style({
    ...BaseTypoGraphy,
    lineHeight: 73,
    fontSize: 66,
    fontWeight: 'bold'
  }),
  H1: style({
    ...BaseTypoGraphy,
    lineHeight: 48,
    fontSize: 50,
    fontWeight: 'bold'
  }),
  H2: style({
    ...BaseTypoGraphy,
    lineHeight: 42,
    fontSize: 37,
    fontWeight: 'bold'
  }),
  H3: style({
    ...BaseTypoGraphy,
    lineHeight: 28,
    fontSize: 28,
    fontWeight: 'bold'
  }),
  H4: style({
    ...BaseTypoGraphy,
    lineHeight: 21,
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
    lineHeight: 16,
    fontSize: 12,
    fontWeight: 500
  })
};
