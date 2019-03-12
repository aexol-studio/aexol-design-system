import * as React from 'react';
// import { CommunityCard } from './CommunityCard';
import { ICommunityCardProps, CommunityCard } from './CommunityCard';
import * as styles from './styles/PoweredCommunityStyles';

export interface IPoweredCommunityProps {
  header: string;
  cards: ICommunityCardProps[];
  smallText?: string;
  bigText?: string;
  style?: React.CSSProperties;
}

const DEFAULT_BIG_TEXT = 'Start using GraphQL today and improve your workflow inmediately.'

export const PoweredCommunity: React.FunctionComponent<IPoweredCommunityProps> = (props) => {

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
        barColor={el.barColor}
        key={idx}
        style={el.style}
      />
    )
  }

  return (
    <div
      className={styles.PoweredCommunityContainer}
      {...restProps}
    >
      <div className={styles.PoweredCommunityHeader}>
        {header}
      </div>
      <div className={styles.Cards}>
        {cards.map((el, idx) => renderCards(el, idx))}
      </div>
      {bigText && <div className={styles.CommunityBigText}>
        {bigText}
      </div>}
      {smallText && <div className={styles.CommunitySmallText}>
        {smallText}
      </div>}
    </div>
  )
}
