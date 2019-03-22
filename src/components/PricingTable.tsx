import * as React from 'react';
import * as styles from './styles/PricingTable';
import { H3, PMedium, P } from './typography';
import Button from './Button';

interface PlanOption {
  name: string;
  value: string;
}

interface Plan {
  name: string;
  subTitle: string;
  description: string;
  action: string;
  onClick: () => void;
  options: PlanOption[];
}

export interface PricingProps {
  plans: Plan[];
  title: string;
  options: string[];
}

export const PricingTable = (props: PricingProps) => {
  const { title, plans, options } = props;
  // Transform and sort pricing options
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.PlanString}>
          <H3 style={{ fontWeight: 300 }}>{title}</H3>
        </div>
        <div className={styles.PlansHeaders}>
          {plans.map(p => (
            <div className={styles.PlanHeader}>
              <div className={styles.PlanHeaderTitle}>
                <H3>{p.name}</H3>
              </div>
              <div className={styles.PlanHeaderSubtitle}>
                <PMedium>{p.subTitle}</PMedium>
              </div>

              <div className={styles.PlanHeaderDescription}>
                <P>{p.description}</P>
              </div>
              <Button>{p.action}</Button>
            </div>
          ))}
        </div>
      </div>

      {options.map(o => (
        <div className={styles.PlanLine}>
          <div className={styles.PlanOptionTitle}>
            <P>{o}</P>
          </div>
          <div className={styles.PlanOptions}>
            <div className={styles.PlanOption}>
              <P>unlimited</P>
            </div>
            <div className={styles.PlanOption}>
              <P>unlimited</P>
            </div>
            <div className={styles.PlanOption}>
              <P>unlimited</P>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.PlanActionLine}>
        <div className={styles.PlanActions}>
          {plans.map(p => (
            <div className={styles.PlanOption}>
              <Button>{p.action}</Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
