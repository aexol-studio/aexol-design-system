import * as React from 'react';
import { TypoGraphy } from './style';

export const H0: React.StatelessComponent = ({ children }) => (
  <h1 className={TypoGraphy.H0}>{children}</h1>
);

export const H1: React.StatelessComponent = ({ children }) => (
  <h1 className={TypoGraphy.H1}>{children}</h1>
);

export const H2: React.StatelessComponent = ({ children }) => (
  <h2 className={TypoGraphy.H2}>{children}</h2>
);

export const H3: React.StatelessComponent = ({ children }) => (
  <h3 className={TypoGraphy.H3}>{children}</h3>
);

export const H4: React.StatelessComponent = ({ children }) => (
  <h4 className={TypoGraphy.H4}>{children}</h4>
);

export const P: React.StatelessComponent = ({ children }) => (
  <p className={TypoGraphy.PRegular}>{children}</p>
);
export const PMedium: React.StatelessComponent = ({ children }) => (
  <p className={TypoGraphy.PMedium}>{children}</p>
);
export const PBold: React.StatelessComponent = ({ children }) => (
  <p className={TypoGraphy.PBold}>{children}</p>
);
