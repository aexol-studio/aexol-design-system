import * as React from 'react';
import { TypoGraphy } from './style';

interface PropsI {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const H0: React.StatelessComponent<PropsI> = (props) => (
  <h1 className={TypoGraphy.H0} {...props}>{props.children}</h1>
);

export const H1: React.StatelessComponent<PropsI> = (props) => (
  <h1 className={TypoGraphy.H1} {...props}>{props.children}</h1>
);

export const H2: React.StatelessComponent<PropsI> = (props) => (
  <h2 className={TypoGraphy.H2} {...props}>{props.children}</h2>
);

export const H3: React.StatelessComponent<PropsI> = (props) => (
  <h3 className={TypoGraphy.H3} {...props}>{props.children}</h3>
);

export const H4: React.StatelessComponent<PropsI> = (props) => (
  <h4 className={TypoGraphy.H4} {...props}>{props.children}</h4>
);

export const P: React.StatelessComponent<PropsI> = (props) => (
  <p className={TypoGraphy.PRegular} {...props}>{props.children}</p>
);

export const PMedium: React.StatelessComponent<PropsI> = (props) => (
  <p className={TypoGraphy.PMedium} {...props}>{props.children}</p>
);

export const PBold: React.StatelessComponent<PropsI> = (props) => (
  <p className={TypoGraphy.PBold} {...props}>{props.children}</p>
);
export const PFooterTitle: React.StatelessComponent<PropsI> = (props) => (
  <p className={TypoGraphy.PFooterTitle} {...props}>{props.children}</p>
);

export const PFooterName: React.StatelessComponent<PropsI> = (props) => (
  <p className={TypoGraphy.PFooterName} {...props}>{props.children}</p>
);
