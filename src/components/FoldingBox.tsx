import * as React from 'react'
import * as styles from './styles/FoldingBoxStyles'
import classnames from 'classnames'
import { PMedium } from './typography'
import { Colors } from './styles/Colors'

export interface FoldingBoxProps {
  title: string
  text: string
  style?: React.CSSProperties
}

interface FoldingBoxState {
  open: boolean
}

export class FoldingBox extends React.PureComponent<
  FoldingBoxProps,
  FoldingBoxState
> {
  constructor(props: FoldingBoxProps) {
    super(props)
    this.state = {
      open: false
    }
  }
  handleOpen = (e: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  render() {
    const { title, text, style, ...restProps } = this.props

    return (
      <div className={styles.FoldingContainer} style={style} {...restProps}>
        <div className={styles.TitleBox} onClick={this.handleOpen}>
          <div
            className={classnames({
              [styles.Arrow]: true,
              open: this.state.open
            })}
            onClick={this.handleOpen}
          />
          <PMedium style={{ color: Colors.Lead, width: 330 }}>{title}</PMedium>
        </div>
        <div
          className={classnames({
            [styles.Content]: true,
            open: this.state.open
          })}
        >
          <PMedium style={{ color: Colors.Ashes }}>{text}</PMedium>
        </div>
      </div>
    )
  }
}
