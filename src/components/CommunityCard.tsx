import * as React from 'react';
import * as styles from './styles/PoweredCommunityStyles';
import { Colors } from './styles/Colors';

export interface ICommunityCardProps {
  val: number;
  description: string;
  barColor: keyof typeof Colors;
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
        borderBottom: `8px solid ${Colors[barColor]}`,
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
