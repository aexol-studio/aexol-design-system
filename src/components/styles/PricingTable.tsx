import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { Breakpoints } from './Breakpoints'
// import * as vars from '../../vars'

const OBJECT_WIDTH = 200
export const TITLE_WIDTH = 190
const computeWidth = (n: number) => TITLE_WIDTH + n * OBJECT_WIDTH + 30
const LineProperties: NestedCSSProperties = {
  display: 'grid',
  gridTemplateColumns: `${TITLE_WIDTH} 3fr`,
  padding: `15px 0`
}
const ObjectInLineProperties: NestedCSSProperties = {
  width: OBJECT_WIDTH,
  textAlign: 'center'
}

const FlexRowProperties: NestedCSSProperties = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between'
}

export const Main = (n: number) =>
  style(
    {
      ...LineProperties,
      gridTemplateAreas: `
  "planString plansHeaders"
  `,
      marginBottom: 100
    },
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        display: 'block'
      }
    )
  )
export const PlanLine = style({
  ...LineProperties,
  gridTemplateAreas: `
  "planOptionTitle planOptions"
  `,
  borderBottom: `1px solid ${Colors.Sopel}`
})

export const PlanActionLine = style({
  ...LineProperties,
  marginTop: 25,
  gridTemplateAreas: `
    ". actions"
    `
})
export const PlanActions = style({
  ...FlexRowProperties,
  gridArea: 'actions'
})
export const PlanString = (n: number) =>
  style(
    {
      gridArea: 'planString',
      width: '100%'
    },
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        display: 'none'
      }
    )
  )
export const PlansHeaders = (n: number) =>
  style(
    {
      ...FlexRowProperties,
      flexFlow: 'row nowrap',
      gridArea: 'plansHeaders'
    },
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        flexFlow: 'column nowrap',
        alignItems: 'center'
      }
    )
  )
export const PlanOptionTitle = style(
  {
    width: TITLE_WIDTH,
    gridArea: 'planOptionTitle',
    color: Colors.Lead
  },
  media(
    { minWidth: Breakpoints.TabletPortrait, maxWidth: Breakpoints.Tablet },
    {
      width: 170
    }
  )
)
export const PlanOptions = style({
  ...FlexRowProperties,
  gridArea: 'planOptions'
})
export const PlanOption = style(
  {
    ...ObjectInLineProperties,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: Colors.Ashes
  },
  media(
    { minWidth: Breakpoints.TabletPortrait, maxWidth: Breakpoints.Tablet },
    {
      width: 170
    }
  )
)
export const PlanHeader = (n: number) =>
  style(
    {
      ...ObjectInLineProperties,
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    },
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        marginBottom: 15,
        padding: `40px 20px`,
        width: '100%',
        maxWidth: 400,
        background: Colors.Sopel
      }
    ),
    media(
      { minWidth: Breakpoints.TabletPortrait, maxWidth: Breakpoints.Tablet },
      {
        width: 170
      }
    )
  )

export const PlanHeaderTitle = style({
  marginBottom: 15
})

export const PlanHeaderSubtitle = style({
  marginBottom: 30
})
export const PlanHeaderOptions = (n: number) =>
  style(
    {
      display: 'none'
    },
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        display: 'block',
        marginBottom: 25
      }
    )
  )
export const PlanHeaderOption = style({
  display: 'flex',
  flexFlow: 'row nowrap',
  padding: 10
})
export const PlanHeaderDescription = style({
  marginBottom: 30,
  color: Colors.Ashes
})
export const PricingHiderResoponsive = (n: number) =>
  style(
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        display: 'none'
      }
    )
  )
