import * as React from 'react';
import { keyframes } from 'typestyle'
// import * as classnames from 'classnames';
import * as styles from './styles/PreloaderStyle';

export interface IPreloaderProps {
  width?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const DEFAULT_WIDTH = 100

export const Preloader: React.FunctionComponent<IPreloaderProps> = (props) => {
  const {
    disabled = false,
    width = DEFAULT_WIDTH,
    style,
    ...restProps
  } = props

  const renderProgress = () => {
    const radius = 0.425 * width
    const circumference = 2 * Math.PI * radius

    return(
      <svg
        height={'100%'}
        width={'100%'}
        className={styles.PreloaderCircle}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5D2EEB" />
            <stop offset="100%" stopColor="#0091FF" />
          </linearGradient>
        </defs>
        <circle
          className={styles.PreloaderFill}
          data-circumference={circumference}
          style={{
            animationDuration: '2s',
            animationName: keyframes({
              '0%': {
                strokeDashoffset: circumference
              },
              '100%': {
                strokeDashoffset: 0
              }
            })
          }}
          stroke="url(#gradient)"
          fill="none"
          strokeWidth="5%"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
    )
  }

  return (
    <div
      className={styles.Preloader}
      style={{
        width: width ? width : DEFAULT_WIDTH,
        height: width ? width : DEFAULT_WIDTH,
        ...style
      }}
      {...restProps}
    >
      {renderProgress()}
    </div>
  )
};

export default Preloader;
