import { style } from 'typestyle';
import { Colors } from './Colors';
import { NestedCSSProperties } from 'typestyle/lib/types';

const LineProperties: NestedCSSProperties = {
  display: 'grid',
  gridTemplateColumns: `1fr 3fr`,
  padding: `15px 30px`
};
const ObjectInLineProperties: NestedCSSProperties = {
  width: 200,
  textAlign: 'center'
};

const FlexRowProperties: NestedCSSProperties = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between'
};

export const Main = style({
  ...LineProperties,
  gridTemplateAreas: `
  "planString plansHeaders"
  `,
  marginBottom: 100
});
export const PlanLine = style({
  ...LineProperties,
  gridTemplateAreas: `
  "planOptionTitle planOptions"
  `,
  borderBottom: `1px solid ${Colors.Sopel}`
});

export const PlanActionLine = style({
  ...LineProperties,
  marginTop: 25,
  gridTemplateAreas: `
    ". actions"
    `
});
export const PlanActions = style({
  ...FlexRowProperties,
  gridArea: 'actions'
});
export const PlanString = style({
  gridArea: 'planString',
  width: 250
});
export const PlansHeaders = style({
  ...FlexRowProperties,
  gridArea: 'plansHeaders'
});
export const PlanOptionTitle = style({
  width: 250,
  gridArea: 'planOptionTitle',
  color: Colors.Lead
});
export const PlanOptions = style({
  ...FlexRowProperties,
  gridArea: 'planOptions'
});
export const PlanOption = style({
  ...ObjectInLineProperties,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  color: Colors.Ashes
});
export const PlanHeader = style({
  ...ObjectInLineProperties,
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'center'
});

export const PlanHeaderTitle = style({
  marginBottom: 15
});

export const PlanHeaderSubtitle = style({
  marginBottom: 30
});

export const PlanHeaderDescription = style({
  marginBottom: 30,
  color: Colors.Ashes
});
