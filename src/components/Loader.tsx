import * as React from 'react'
import { keyframes } from 'typestyle'
// import * as classnames from 'classnames';
import * as styles from './styles/LoaderStyle'

export interface ILoaderProps {
  width?: number
  duration?: number
  progress?: boolean
  style?: React.CSSProperties
}

export interface ILoaderState {
  progress: number
}

const DEFAULT_WIDTH = 100
const DEFAULT_DURATION = '3s'

export class Loader extends React.PureComponent<ILoaderProps, ILoaderState> {
  constructor(props: ILoaderProps) {
    super(props)
    this.state = {
      progress: 0
    }
  }

  componentDidMount() {
    if (this.props.duration && this.props.progress) {
      const t = setInterval(() => {
        if (this.state.progress < 100) {
          this.setState(prevState => ({
            progress: prevState.progress + 1
          }))
        } else if (this.state.progress === 100) {
          clearInterval(t)
        }
      }, 10 * this.props.duration)
    }
  }

  componentWillUnmount() {
    clearInterval()
  }

  renderProgress = () => {
    const radius = this.props.width
      ? 0.425 * this.props.width
      : 0.425 * DEFAULT_WIDTH
    const circumference = 2 * Math.PI * radius
    const animationDuration = this.props.duration
      ? this.props.duration + 's'
      : DEFAULT_DURATION

    return (
      <svg height={'100%'} width={'100%'} className={styles.LoaderCircle}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5D2EEB" />
            <stop offset="100%" stopColor="#0091FF" />
          </linearGradient>
        </defs>
        <circle
          className={styles.LoaderFill}
          data-circumference={circumference}
          style={{
            animationIterationCount: this.props.duration ? 1 : 'infinite',
            animationDuration: animationDuration,
            animationName: keyframes({
              '0%': {
                strokeDashoffset: circumference
              },
              '100%': {
                strokeDashoffset: 0
              }
            }),
            animationFillMode: 'forwards'
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

  render() {
    const {
      width = DEFAULT_WIDTH,
      duration,
      progress,
      style,
      ...restProps
    } = this.props

    return (
      <div
        className={styles.Loader}
        style={{
          width: width ? width : DEFAULT_WIDTH,
          height: width ? width : DEFAULT_WIDTH,
          ...style
        }}
        {...restProps}
      >
        {this.renderProgress()}
        {progress && duration && (
          <div
            className={styles.LoaderProgress}
            style={{
              fontSize: width ? (width / 100) * 20 : 20
            }}
          >
            {`${this.state.progress}%`}
          </div>
        )}
      </div>
    )
  }
}

export default Loader
