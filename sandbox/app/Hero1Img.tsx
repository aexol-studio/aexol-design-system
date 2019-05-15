import * as React from 'react'
import { Hero1Img } from '../../src';
import { withRouter, RouteComponentProps } from 'react-router'

type IProps = RouteComponentProps<any>

class Hero1Imgview extends React.PureComponent<IProps> {
  render() {
    return (
      <Hero1Img
        headerText="GraphQL Workshops"
        paragraphText={<React.Fragment>Tailored Specially For Your Company Needs & <br />With Core Team.</React.Fragment>}
        paragraphTextLength="long"
        paragraphColor={'Ashes'}
        buttonText="Try it!"
        buttonOnClick={() => console.log('click')}
        imgFile={<img src="https://via.placeholder.com/668x569" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
        imgPosition="center"
        height={600}
      />
    )
  }
}

export default withRouter(Hero1Imgview)
