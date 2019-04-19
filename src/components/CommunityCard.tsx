import * as React from 'react'
import * as styles from './styles/PoweredCommunityStyles'
import { Colors } from './styles/Colors'
import { H3 } from './typography'

export interface ICommunityCardProps {
  val: string
  description: string
  backColor: keyof typeof Colors
  icon: JSX.Element
  style?: React.CSSProperties
}

export const CommunityCard: React.FunctionComponent<ICommunityCardProps> = props => {
  const {
    val,
    description,
    backColor,
    icon,
    style,
    ...restProps
  } = props

  const renderDescription = () => {
    const descript = props.description.split(props.val)

    return (
      <React.Fragment>
        <div style={{ fontSize: 28, lineHeight: '28px' }}>{descript[0]}</div>
        <H3 style={{ display: 'inline-block' }}>{props.val}</H3>
        {descript[1]}
      </React.Fragment>
    )
  }

  return (
    <div
      className={styles.CommunityCardContainer}
      style={{
        backgroundColor: Colors[backColor],
        ...style
      }}
      {...restProps}
    >
      <div className={styles.Icon}>{icon}</div>
      <div className={styles.CardDescript}>{renderDescription()}</div>
    </div>
  )
}
