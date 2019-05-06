import * as React from 'react'
import { ICommunityCardProps, CommunityCard } from './CommunityCard'
import { H2, H4, P } from './typography'
import { Colors } from './styles/Colors'
import * as styles from './styles/PoweredCommunityStyles'

export interface IPoweredCommunityProps {
  header: string
  cards: ICommunityCardProps[]
  smallText?: string
  bigText?: string
  style?: React.CSSProperties
}

const DEFAULT_BIG_TEXT =
  'Start using GraphQL today and improve your workflow inmediately.'

export const PoweredCommunity: React.FunctionComponent<
  IPoweredCommunityProps
> = props => {
  const {
    header,
    cards,
    smallText,
    bigText = DEFAULT_BIG_TEXT,
    style,
    ...restProps
  } = props

  const renderCards = (el: ICommunityCardProps, idx: number) => {
    return (
      <CommunityCard
        val={el.val}
        description={el.description}
        backColor={el.backColor}
        key={idx}
        icon={el.icon}
        style={el.style}
      />
    )
  }

  return (
    <div
      className={styles.PoweredCommunityContainer}
      style={style}
      {...restProps}
    >
      <div className={styles.Header}>
        <img
          src={require('../assets/images/logoText.png')}
          className={styles.HeaderImage}
        />
        <img
          src={require('../assets/images/logo.png')}
          className={styles.HeaderImagePhone}
        />
        <div className={styles.HeaderLine} />
        <H2 style={{ color: Colors.Ashes }}>{header}</H2>
      </div>
      <div className={styles.Cards}>
        {cards.map((el, idx) => renderCards(el, idx))}
      </div>
      {bigText && (
        <H4
          style={{
            color: Colors['Dark Side'],
            marginBottom: 16,
            textAlign: 'center'
          }}
        >
          {bigText}
        </H4>
      )}
      {smallText && (
        <P style={{ color: Colors['Ancient Stone'], textAlign: 'center' }}>
          {smallText}
        </P>
      )}
    </div>
  )
}
