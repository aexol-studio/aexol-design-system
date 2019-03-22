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
          'Visual GraphQL Tool',
          'Autocomplete library',
          'Projects',
          'Cloud',
          'Private',
          'Teams',
        ]}
        plans={[
          {
            name: 'Indie',
            action: 'Sign up',
            subTitle: 'free',
            description: `for individuals and companies below 100k$ total revenue`,
            options: [],
            onClick: () => {
              console.log('BUY');
            }
          },
          {
            name: 'Team',
            action: 'Buy',
            subTitle: '39$ per user/month',
            description: `for individuals and companies below 100k$ total revenue`,
            options: [],
            onClick: () => {
              console.log('BUY');
            }
          },
          {
            name: 'Enterprise',
            action: 'Contact us',
            subTitle: 'it depends',
            description: `for individuals and companies below 100k$ total revenue`,
            options: [],
            onClick: () => {
              console.log('BUY');
            }
          },
        ]}
      />
    );
  }
}

export default withRouter(PricingTableComp);
