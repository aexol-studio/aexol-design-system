import * as React from 'react';
import * as styles from './styles/PricingTable';
import * as cx from 'classnames';
import { H3, PMedium, P } from './typography';
import Button from './Button';

interface Plan {
  name: string;
  subTitle: string;
  description: string;
  action: string;
  onClick: () => void;
}

export interface PricingProps {
  plans: Plan[];
  title: string;
  options: Array<{
    name: string;
    values: string[];
  }>;
}

export const PricingTable = (props: PricingProps) => {
  const { title, plans, options } = props;
  // Transform and sort pricing options
  const computedStyle: React.CSSProperties = {
    gridTemplateColumns: `${styles.TITLE_WIDTH}px ${plans.length}fr`
  };

  return (
    <>
      <div className={cx(styles.Main(plans.length))} style={computedStyle}>
        <div className={styles.PlanString(plans.length)}>
          <H3 style={{ fontWeight: 300 }}>{title}</H3>
        </div>
        <div className={styles.PlansHeaders(plans.length)}>
          {plans.map((p, index) => (
            <div className={styles.PlanHeader(plans.length)}>
              <div className={styles.PlanHeaderTitle}>
                <H3>{p.name}</H3>
              </div>
              <div className={styles.PlanHeaderSubtitle}>
                <PMedium>{p.subTitle}</PMedium>
              </div>
              <div className={styles.PlanHeaderOptions(plans.length)}>
                {options
                  .filter(o => o.values[index])
                  .map(o => (
                    <div className={styles.PlanHeaderOption}>
                      <P
                        style={{
                          marginRight: 10
                        }}
                      >
                        {o.name}
                      </P>
                      <PMedium>{o.values[index]}</PMedium>
                    </div>
                  ))}
              </div>

              <div className={styles.PlanHeaderDescription}>
                <P>{p.description}</P>
              </div>
              <Button onClick={p.onClick} >{p.action}</Button>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.PricingHiderResoponsive(plans.length)}>
        {options.map(({ name, values }) => (
          <div className={styles.PlanLine} style={computedStyle}>
            <div className={styles.PlanOptionTitle}>
              <P>{name}</P>
            </div>
            <div className={styles.PlanOptions}>
              {values.slice(0, plans.length).map(ov => (
                <div className={styles.PlanOption}>
                  <P>{ov}</P>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className={styles.PlanActionLine} style={computedStyle}>
          <div className={styles.PlanActions}>
            {plans.map(p => (
              <div className={styles.PlanOption}>
                <Button onClick={p.onClick}>{p.action}</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
