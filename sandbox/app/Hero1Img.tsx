import * as React from 'react'
// import { Hero1Img } from '../../src';
import { WhiteTile } from '../../src'
import { withRouter, RouteComponentProps } from 'react-router'

type IProps = RouteComponentProps<any>

class Hero1Imgview extends React.PureComponent<IProps> {
  render() {
    return (
      // <Hero1Img
      //   headerText="GraphQL Workshops"
      //   paragraphText={<React.Fragment>Tailored Specially For Your Company Needs & <br />With Core Team.</React.Fragment>}
      //   paragraphTextLength="long"
      //   paragraphColor={'Ashes'}
      //   buttonText="Try it!"
      //   buttonOnClick={() => console.log('click')}
      //   imgFile={<img src="https://via.placeholder.com/668x569" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />}
      //   imgPosition="center"
      //   height={600}
      // />
      <WhiteTile
        SelectComumnsTxt={{
          options: [
            {
              label: 'test',
              value: 1
            },
            {
              label: 'test2',
              value: 2
            },
            {
              label: 'test3',
              value: 3
            },
          ],
          label: 'Subject*',
          placeholder: 'How can we help you?'
        }}
        InputTextName={{
          labelName: 'First Name',
          placeholderName: 'Enter your first name',
          type: 'text',
          starLabel: true
        }}
        InputTextEmail={{
          labelEmail: 'E-mail',
          placeholderEmail: 'Enter your e-mail address',
          type: 'email',
          starLabel: true
        }}
        CheckboxTextFirst={{
          shapeFirst: 'round',
          checkboxParagraphFirst:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
        }}
        CheckboxTextSecond={{
          shapeSecond: 'round',
          checkboxParagraphSecond:
            'Aque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo'
        }}
        WhiteTileParagraph="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt "
        WhiteTileButton={{ href: 'https://www.google.pl/' }}
        WhiteButtonText="Send"
      />
    )
  }
}

export default withRouter(Hero1Imgview)
