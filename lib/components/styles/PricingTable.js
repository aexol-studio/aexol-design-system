import { style, media } from 'typestyle'
import { Colors } from './Colors'
import { Breakpoints } from './Breakpoints'
const OBJECT_WIDTH = 200
export const TITLE_WIDTH = 190
const computeWidth = n => TITLE_WIDTH + n * OBJECT_WIDTH + 30
const LineProperties = {
  display: 'grid',
  gridTemplateColumns: `${TITLE_WIDTH} 3fr`,
  padding: `15px 0`
}
const ObjectInLineProperties = {
  width: OBJECT_WIDTH,
  textAlign: 'center'
}
const FlexRowProperties = {
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'space-between'
}
export const Main = n =>
  style(
    Object.assign({}, LineProperties, {
      gridTemplateAreas: `
  "planString plansHeaders"
  `,
      marginBottom: 100
    }),
    media(
      {
        maxWidth: computeWidth(n)
      },
      {
        display: 'block'
      }
    )
  )
export const PlanLine = style(
  Object.assign({}, LineProperties, {
    gridTemplateAreas: `
  "planOptionTitle planOptions"
  `,
    borderBottom: `1px solid ${Colors.Sopel}`
  })
)
export const PlanActionLine = style(
  Object.assign({}, LineProperties, {
    marginTop: 25,
    gridTemplateAreas: `
    ". actions"
    `
  })
)
export const PlanActions = style(
  Object.assign({}, FlexRowProperties, { gridArea: 'actions' })
)
export const PlanString = n =>
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
export const PlansHeaders = n =>
  style(
    Object.assign({}, FlexRowProperties, {
      flexFlow: 'row nowrap',
      gridArea: 'plansHeaders'
    }),
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
export const PlanOptions = style(
  Object.assign({}, FlexRowProperties, { gridArea: 'planOptions' })
)
export const PlanOption = style(
  Object.assign({}, ObjectInLineProperties, {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: Colors.Ashes
  }),
  media(
    { minWidth: Breakpoints.TabletPortrait, maxWidth: Breakpoints.Tablet },
    {
      width: 170
    }
  )
)
export const PlanHeader = n =>
  style(
    Object.assign({}, ObjectInLineProperties, {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'center'
    }),
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
export const PlanHeaderOptions = n =>
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
export const PricingHiderResoponsive = n =>
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
//# sourceMappingURL=PricingTable.js.map
