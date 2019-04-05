import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/WhiteTileStyles'
import { Input } from './Input'
import { Checkbox } from './Checkbox'
import { Button } from './Button'

export const WhiteTile: React.FunctionComponent = props => {
  return (
    <div className={classnames(styles.WhiteTileMain)}>
      <div className={styles.WhiteTileContent}>
        <Input
          label="First Name"
          placeholder="Enter your first name"
          type="string"
        />
        <Input
          label="Email"
          placeholder="Enter your email adress"
          type="number"
        />
        <Input
          label="Subject"
          placeholder="How we can help you"
          type="string"
        />
        <div className={styles.WhiteTileCheckboxElement}>
          <div className={styles.WhiteTileCheckboxContent}>
            <Checkbox shape="round" />
            <p className={styles.WhiteTileCheckboxContentParagraph}>
              Aque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
          <div className={styles.WhiteTileCheckboxContent}>
            <Checkbox shape="round" />
            <p className={styles.WhiteTileCheckboxContentParagraph}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium.
            </p>
          </div>
          <div className={styles.WhiteTileContentParagraph}>
            <p className={styles.WhiteTileCheckboxContentParagraph}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt
            </p>
          </div>
          <div className={styles.WhiteTileCheckboxContentButton}>
            <Button>Send Request</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
