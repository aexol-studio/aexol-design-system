/// <reference types="react" />
interface Plan {
  name: string
  subTitle: string
  description: string
  action: string
  onClick: () => void
}
export interface PricingProps {
  plans: Plan[]
  title: string
  options: Array<{
    name: string
    values: string[]
  }>
}
export declare const PricingTable: (props: PricingProps) => JSX.Element
export {}
