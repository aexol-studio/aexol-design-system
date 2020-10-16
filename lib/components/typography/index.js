import * as React from 'react'
import { TypoGraphy } from './style'
export const H0 = props =>
  React.createElement(
    'h1',
    Object.assign({ className: TypoGraphy.H0 }, props),
    props.children
  )
export const H1 = props =>
  React.createElement(
    'h1',
    Object.assign({ className: TypoGraphy.H1 }, props),
    props.children
  )
export const H2 = props =>
  React.createElement(
    'h2',
    Object.assign({ className: TypoGraphy.H2 }, props),
    props.children
  )
export const H3 = props =>
  React.createElement(
    'h3',
    Object.assign({ className: TypoGraphy.H3 }, props),
    props.children
  )
export const H4 = props =>
  React.createElement(
    'h4',
    Object.assign({ className: TypoGraphy.H4 }, props),
    props.children
  )
export const P = props =>
  React.createElement(
    'p',
    Object.assign({ className: TypoGraphy.PRegular }, props),
    props.children
  )
export const PMedium = props =>
  React.createElement(
    'p',
    Object.assign({ className: TypoGraphy.PMedium }, props),
    props.children
  )
export const PBold = props =>
  React.createElement(
    'p',
    Object.assign({ className: TypoGraphy.PBold }, props),
    props.children
  )
export const PFooterTitle = props =>
  React.createElement(
    'p',
    Object.assign({ className: TypoGraphy.PFooterTitle }, props),
    props.children
  )
export const PFooterName = props =>
  React.createElement(
    'p',
    Object.assign({ className: TypoGraphy.PFooterName }, props),
    props.children
  )
//# sourceMappingURL=index.js.map
