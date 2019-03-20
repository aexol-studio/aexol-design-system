import * as React from 'react';
import * as styles from './styles/PoweredCommunityStyles';

// type barColor = '/^#([0-9a-f]{3}|[0-9a-f]{6})$/i'

export interface ICommunityCardProps {
  val: number;
  description: string;
  barColor: string;
  style?: React.CSSProperties;
}

export const CommunityCard: React.FunctionComponent<ICommunityCardProps> = (props) => {

  const {
    val,
    description,
    barColor,
    style,
    ...restProps
  } = props

  return (
    <div
      className={styles.CommunityCardContainer}
      style={{
        borderBottom: `8px solid ${barColor}`,
        ...style
      }}
      {...restProps}
    >
      <div className={styles.CardVal}>
        {`${val}+`}
      </div>
      <div className={styles.CardDescript}>
        {description}
      </div>
    </div>
  )
}
