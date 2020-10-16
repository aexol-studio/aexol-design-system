var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {}
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p]
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]]
      }
    return t
  }
import * as React from 'react'
import { keyframes } from 'typestyle'
import * as styles from './styles/LoaderStyle'
const DEFAULT_WIDTH = 100
const DEFAULT_DURATION = '3s'
export class Loader extends React.PureComponent {
  constructor(props) {
    super(props)
    this.renderProgress = () => {
      const radius = this.props.width
        ? 0.425 * this.props.width
        : 0.425 * DEFAULT_WIDTH
      const circumference = 2 * Math.PI * radius
      const animationDuration = this.props.duration
        ? this.props.duration + 's'
        : DEFAULT_DURATION
      return React.createElement(
        'svg',
        { height: '100%', width: '100%', className: styles.LoaderCircle },
        React.createElement(
          'defs',
          null,
          React.createElement(
            'linearGradient',
            { id: 'gradient', x1: '0%', y1: '0%', x2: '100%', y2: '100%' },
            React.createElement('stop', { offset: '0%', stopColor: '#5D2EEB' }),
            React.createElement('stop', {
              offset: '100%',
              stopColor: '#0091FF'
            })
          )
        ),
        React.createElement('circle', {
          className: styles.LoaderFill,
          'data-circumference': circumference,
          style: {
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
          },
          stroke: 'url(#gradient)',
          fill: 'none',
          strokeWidth: '5%',
          strokeDasharray: circumference,
          strokeDashoffset: circumference,
          r: radius,
          cx: '50%',
          cy: '50%'
        })
      )
    }
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
  render() {
    const _a = this.props,
      { width = DEFAULT_WIDTH, duration, progress, style } = _a,
      restProps = __rest(_a, ['width', 'duration', 'progress', 'style'])
    return React.createElement(
      'div',
      Object.assign(
        {
          className: styles.Loader,
          style: Object.assign(
            {
              width: width ? width : DEFAULT_WIDTH,
              height: width ? width : DEFAULT_WIDTH
            },
            style
          )
        },
        restProps
      ),
      this.renderProgress(),
      progress &&
        duration &&
        React.createElement(
          'div',
          {
            className: styles.LoaderProgress,
            style: {
              fontSize: width ? (width / 100) * 20 : 20
            }
          },
          `${this.state.progress}%`
        )
    )
  }
}
export default Loader
//# sourceMappingURL=Loader.js.map
