import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/ButtonStyle'

type ButtonSize = 'small' | 'default'
type ButtonShape = 'square' | 'round' | 'oval'

export interface IButtonProps {
  size?: ButtonSize
  shape?: ButtonShape
  width?: number
  style?: React.CSSProperties
}

export const LoadingButton: React.FunctionComponent<IButtonProps> = props => {
  const {
    size = 'default',
    shape = 'round',
    width,
    style,
    ...restProps
  } = props

  return (
    <button
      className={classnames(styles.Button, 'primary', shape, size)}
      style={style}
      {...restProps}
    >
      <div className={styles.Loader}>
        <div className={styles.Wave}>
          {new Array(3)
            .fill(0)
            .map((a, i) =>
              <div
                key={i}
                className={styles.Dot}
              />
            )}
        </div>
      </div>
    </button>
  )
}

export default LoadingButton
