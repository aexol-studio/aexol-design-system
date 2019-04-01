import * as React from 'react';
import { PricingTable } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router';

type IProps = RouteComponentProps<any>;

class PricingTableComp extends React.PureComponent<IProps> {
  render() {
    return (
      <PricingTable
        title="Plans"
        options={[
          {
            name: 'Visual GraphQL Tool',
            values: ['unlimited', 'unlimited', 'unlimited']
          },
          {
            name: 'Autocomplete library',
            values: ['unlimited', 'unlimited', 'unlimited']
          },
          {
            name: 'Projects',
            values: ['unlimited', 'unlimited', 'unlimited']
          },
          {
            name: 'Faker instances',
            values: ['1', 'unlimited', 'unlimited']
          },
          {
            name: 'Private Projects',
            values: ['', 'unlimited', 'unlimited']
          },
          {
            name: 'Teams',
            values: ['', '1', 'unlimited']
          },
        ]}
        plans={[
          {
            name: 'Indie',
            action: 'Sign up',
            subTitle: 'free',
            description: `for individuals and companies below 100k$ total revenue`,
            onClick: () => {
              console.log('BUY');
            }
          },
          {
            name: 'Team',
            action: 'Buy',
            subTitle: '39$ per user/month',
            description: `for individuals and companies below 100k$ total revenue`,
            onClick: () => {
              console.log('Buy team');
            }
          },
          {
            name: 'Enterprise',
            action: 'Contact us',
            subTitle: 'it depends',
            description: `for individuals and companies below 100k$ total revenue`,
            onClick: () => {
              console.log('buy enterprise');
            }
          },
        ]}
      />
    );
  }
}

export default withRouter(PricingTableComp);
