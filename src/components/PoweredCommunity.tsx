import * as React from 'react';
import { ICommunityCardProps, CommunityCard } from './CommunityCard';
import { H1, H4, P } from './typography';
import { Colors } from './styles/Colors'
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
      <H1 style={{textAlign: 'center', marginBottom: 50}}>
        {header}
      </H1>
      <div className={styles.Cards}>
        {cards.map((el, idx) => renderCards(el, idx))}
      </div>
      {bigText && <H4 style={{color: Colors['Dark Side'], marginBottom: 16}}>
        {bigText}
      </H4>}
      {smallText && <P style={{color: Colors['Ancient Stone']}}>
        {smallText}
      </P>}
    </div>
  )
}
