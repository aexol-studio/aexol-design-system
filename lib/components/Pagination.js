import * as React from 'react'
import * as classnames from 'classnames'
import * as styles from './styles/PaginationStyle'
const DEFAULT_PAGESIZE = 10
export class Pagination extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleOnClick = page => {
      this.setState({
        page: page
      })
      if (this.props.onChange) {
        this.props.onChange(page, this.state.pageSize)
      }
    }
    this.handleNavOnClick = inc => {
      const maxNumber = this.props.total
        ? Math.ceil(this.props.total / this.state.pageSize)
        : 3
      if (
        (this.state.page > 1 && inc === -1) ||
        (this.state.page < maxNumber && inc === 1) ||
        (!this.props.total && inc === 1)
      ) {
        this.setState(prevState => ({
          page: prevState.page + inc
        }))
        if (this.props.onChange) {
          this.props.onChange(this.state.page + inc, this.state.pageSize)
        }
      }
    }
    this.renderElements = () => {
      const maxNumber = this.props.total
        ? Math.ceil(this.props.total / this.state.pageSize)
        : Math.max(3, this.state.page)
      const elements = Array.from({ length: maxNumber }, (v, k) => k + 1)
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'li',
          {
            className: styles.NavElement,
            onClick: e => this.handleNavOnClick(-1)
          },
          'Prev'
        ),
        elements.map(el => {
          return React.createElement(
            'li',
            {
              key: el,
              className: classnames({
                [styles.Element]: true,
                active: this.state.page === el
              }),
              onClick: e => this.handleOnClick(el)
            },
            el
          )
        }),
        !this.props.total &&
          React.createElement(
            'li',
            {
              className: classnames({
                [styles.Element]: true,
                disabled: true
              })
            },
            '...'
          ),
        React.createElement(
          'li',
          {
            className: styles.NavElement,
            onClick: e => this.handleNavOnClick(1)
          },
          'Next'
        )
      )
    }
    this.state = {
      page: 1,
      pageSize: props.pageSize || DEFAULT_PAGESIZE
    }
  }
  render() {
    return React.createElement(
      'ul',
      { className: styles.Pagination },
      this.renderElements()
    )
  }
}
//# sourceMappingURL=Pagination.js.map
