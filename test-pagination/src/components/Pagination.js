import React from 'react';
import Buttons from './Buttons';
import Select from './Select';

function temp() { }

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    const start = 2;
    const end = start + props.displayLength - 1;

    let current = props.defaultCurrent;

    if ('current' in props) {
      current = props.current;
    }

    let pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      pageSize = props.pageSize;
    }

    this.state = {
      current,
      _current: current,
      pageSize,
      leftAnchor: start,
      rightAnchor: end,
    };

    [
      'render',
      '_handleChange',
      '_isValid',
      '_leftMore',
      '_rightMore',
      '_hasPrev',
      '_hasNext',
      '_prev',
      '_next',
      '_handleKeyEnter',
      '_changePageSize',
    ].forEach((method) => this[method] = this[method].bind(this));
  }
  componentWillReceiveProps(nextProps) {
    const n = nextProps.current;
    const tempAnchor = this._calcPage(n);

    if ('current' in nextProps) {
      this.setState({
        current: tempAnchor.n,
        _current: tempAnchor.n,
        leftAnchor: tempAnchor.start,
        rightAnchor: tempAnchor.end,
      });
    }

    if ('pageSize' in nextProps) {
      const newState = {};
      let current = this.state.current;
      const newCurrent = this._calcTotalPage(nextProps.pageSize);
      current = current > newCurrent ? newCurrent : current;
      const tempAnchor2 = this._calcPage(current);
      if (!('current' in nextProps)) {
        newState.current = tempAnchor2.n;
        newState._current = tempAnchor2.n;
        newState.leftAnchor = tempAnchor2.start;
        newState.rightAnchor = tempAnchor2.end;
      }
      newState.pageSize = nextProps.pageSize;
      this.setState(newState);
    }
  }

  _calcTotalPage(s) {
    let pageSize = s;
    if (typeof pageSize === 'undefined') {
      pageSize = this.state.pageSize;
    }
    return Math.floor((this.props.total - 1) / pageSize) + 1;
  }

  _calcPage(n) {
    const anchor = this.state.leftAnchor;
    const length = this._calcTotalPage();
    const dl = this.props.displayLength;
    let start = 2;
    let end = start + dl - 1;
    if (n <= 0) {
      n = 1;
    }

    if (this._isValid(n)) {
      if (n >= length) {
        n = length;
      }

      if (n >= anchor) {
        start = anchor;
      } else {
        start = n;
      }
      end = start + dl - 1;
      if (end <= n) {
        start = n;
        end = start + dl - 1;
      }

      if (start <= 1) {
        start = 2;
        end = start + dl - 1;
      }

      if (end >= length - 1) {
        end = length - 1;
        start = end - dl + 1;
        if (start <= 1) {
          start = 2;
        }
      }
    }
    return {
      start,
      end,
      n,
    };
  }

  _changePageSize(size) {
    let current = this.state.current;
    const newCurrent = this._calcTotalPage(size);
    current = current > newCurrent ? newCurrent : current;
    const tempAnchor = this._calcPage(current);
    if (typeof size === 'number') {
      if (!('pageSize' in this.props)) {
        this.setState({
          pageSize: size,
        });
      }

      if (!('current' in this.props)) {
        this.setState({
          current: tempAnchor.n,
          _current: tempAnchor.n,
          leftAnchor: tempAnchor.start,
          rightAnchor: tempAnchor.end,
        });
      }
    }

    return size;
  }

  _handleChange(n) {
    const tempAnchor = this._calcPage(n);
    if (this._isValid(n)) {
      if (!('current' in this.props)) {
        this.setState({
          current: tempAnchor.n,
          _current: tempAnchor.n,
          leftAnchor: tempAnchor.start,
          rightAnchor: tempAnchor.end,
        });
      }

      const pageSize = this.state.pageSize;
      this.props.onChange(n, pageSize);

      return n;
    }

    return this.state.current;
  }

  _handleKeyEnter(event) {
    const value = event.target.value;
    let tempValue;
    if (isNaN(Number(value))) {
      tempValue = this.state.current;
    } else {
      tempValue = Number(value);
    }
    if (event.keyCode === 13) {
      this._handleChange(tempValue);
    }
  }

  _hasPrev() {
    return this.state.current > 1;
  }

  _hasNext() {
    return this.state.current < this._calcTotalPage();
  }

  _isValid(num) {
    return typeof num === 'number' && num >= 1 && num !== this.state.current;
  }

  _leftMore() {
    return this._handleChange((this.state.current - this.props.displayLength) <= 0 ?
      1 : (this.state.current - this.props.displayLength));
  }

  _rightMore() {
    const totalPage = this._calcTotalPage();
    return this._handleChange((this.state.current + this.props.displayLength) >= totalPage ?
      totalPage : (this.state.current + this.props.displayLength));
  }

  _prev() {
    if (this._hasPrev()) {
      this._handleChange(this.state.current - 1);
    }
  }

  _next() {
    if (this._hasNext()) {
      this._handleChange(this.state.current + 1);
    }
  }

  render() {
    const props = this.props;
    const pageList = [];
    const totalPage = this._calcTotalPage();
    const { current, pageSize } = this.state;

    pageList.push(<Buttons
      rootClassNamePrefix={props.classNamePrefix}
      title={1}
      key={1}
      onClick={this._handleChange.bind(this, 1)}
      btnContent={1}
      pageNumber={1}
      active={current === 1}
    />);
    if (this.state.leftAnchor > 2) {
      pageList.push(<Buttons
        rootClassNamePrefix={props.classNamePrefix}
        className={`${props.classNamePrefix}-jump-prev`}
        title={`•••`}
        key={`leftMore`}
        onClick={this._leftMore}
        btnContent={`•••`}
      />);
    }
    for (let i = this.state.leftAnchor; i <= this.state.rightAnchor; i++) {
      const isActive = this.state.current === i;
      pageList.push(
        <Buttons
          rootClassNamePrefix={props.classNamePrefix}
          title={i}
          key={i}
          onClick={this._handleChange.bind(this, i)}
          btnContent={i}
          pageNumber={i}
          active={isActive}
        />);
    }
    if (this.state.rightAnchor < (totalPage - 1)) {
      pageList.push(<Buttons
        rootClassNamePrefix={props.classNamePrefix}
        className={`${props.classNamePrefix}-jump-next`}
        title={`•••`}
        key={`rightMore`}
        onClick={this._rightMore}
        btnContent={`•••`}
      />);
    }
    pageList.push(<Buttons
      rootClassNamePrefix={props.classNamePrefix}
      title={totalPage}
      key={totalPage}
      onClick={this._handleChange.bind(this, totalPage)}
      btnContent={totalPage}
      pageNumber={totalPage}
      active={this.state.current === totalPage}
    />);
    return (
      <ul className={props.classNamePrefix}>
        <Buttons
          rootClassNamePrefix={props.classNamePrefix}
          title={`上一页`}
          onClick={this._prev}
          btnContent={<svg viewBox={`0 0 24 24`}
            style={{
              display: 'inline-block',
              color: (this._hasPrev() ? 'rgba(0, 0, 0, 0.870588)' : '#ccc'),
              fill: 'currentcolor',
              height: '24px',
              width: '24px',
              userSelect: 'none',
              transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            }}
          >
            <path
              d={'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'}
            ></path>
          </svg>}
          className={`${props.classNamePrefix}-btn-prev ${this._hasPrev() ? '' :
            `${props.classNamePrefix}-btn-disabled`}`}
        />
        {pageList}
        <Buttons
          rootClassNamePrefix={props.classNamePrefix}
          title={`下一页`}
          onClick={this._next}
          btnContent={<svg
            viewBox={`0 0 24 24`}
            style={{
              display: 'inline-block',
              color: (this._hasNext() ? 'rgba(0, 0, 0, 0.870588)' : '#ccc'),
              fill: 'currentcolor',
              height: '24px',
              width: '24px',
              userSelect: 'none',
              transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            }}
          >
            <path
              d={`M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z`}
            >
            </path></svg>}
          className={`${props.classNamePrefix}-btn-next ${this._hasNext() ? '' :
            `${props.classNamePrefix}-next-btn ${props.classNamePrefix}-btn-disabled`}`}
        />
        <li className={`${props.classNamePrefix}-options`}>
          <Select changeSize={this._changePageSize.bind(this)}/></li>
        <li className={`${props.classNamePrefix}-input-go`}>跳至<input
          type="text" onKeyUp={this._handleKeyEnter}
        />页</li>
      </ul>
    );
  }
}

Pagination.propTypes = {
  current: React.PropTypes.number,
  defaultCurrent: React.PropTypes.number,
  defaultPageSize: React.PropTypes.number,
  total: React.PropTypes.number,
  pageSize: React.PropTypes.number,
  classNamePrefix: React.PropTypes.string,
  onChange: React.PropTypes.func,
  displayLength: React.PropTypes.number,
};

Pagination.defaultProps = {
  defaultCurrent: 1,
  defaultPageSize: 5,
  total: 0,
  classNamePrefix: 'mc-pagination',
  onChange: temp,
  displayLength: 5,
};

export default Pagination;
