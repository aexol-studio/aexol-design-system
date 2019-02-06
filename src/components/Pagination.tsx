import * as React from 'react';
import * as classnames from 'classnames';
import * as styles from './styles/PaginationStyle';

export interface IPaginationProps {
  pageSize?: number;
  total?: number;
  onChange?: (page: number, pageSize: number) => void;
}

interface IPaginationState {
  page: number;
  pageSize: number;
}

const DEFAULT_PAGESIZE = 10
// const DEFAULT_TOTAL = 0

export class Pagination extends React.PureComponent<IPaginationProps, IPaginationState> {
  constructor(props: IPaginationProps) {
    super(props)
    this.state = {
      page: 1,
      pageSize: props.pageSize || DEFAULT_PAGESIZE
    }
  }

  handleOnClick = (page: number) => {
    this.setState({
      page: page
    })
    if (this.props.onChange) {
      this.props.onChange(page, this.state.pageSize)
    }
  }

  handleNavOnClick = (inc: number) => {
    const maxNumber = this.props.total
      ? Math.ceil(this.props.total / this.state.pageSize)
      : 3

    if (this.state.page > 1 && inc === -1 ||
      this.state.page < maxNumber && inc === 1 ||
      !this.props.total && inc === 1 ) {
      this.setState((prevState => ({
        page: prevState.page + inc
      })))
      if (this.props.onChange) {
        this.props.onChange(this.state.page + inc, this.state.pageSize)
      }
    }
  }

  renderElements = () => {
    const maxNumber = this.props.total
      ? Math.ceil(this.props.total / this.state.pageSize)
      : Math.max(3, this.state.page)
    const elements = Array.from({ length: maxNumber }, (v, k) => k + 1)

    return(
      <React.Fragment>
        <li
          className={styles.NavElement}
          onClick={e => this.handleNavOnClick(-1)}
        >
          Prev
        </li>
        {elements.map(el => {
          return(
            <li
              key={el}
              className={classnames({
                [styles.Element]: true,
                active: this.state.page === el
              })}
              onClick={e => this.handleOnClick(el)}
            >
              {el}
            </li>
          )
        })}
        {!this.props.total && <li
          className={classnames({
            [styles.Element]: true,
            disabled: true
          })}
        >
          ...
        </li>}
        <li
          className={styles.NavElement}
          onClick={e => this.handleNavOnClick(1)}
        >
          Next
        </li>
      </React.Fragment>
    )
  }

  render() {
    return (
      <ul className={styles.Pagination}>
        {this.renderElements()}
      </ul>
    )
  }
}
