import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Mask from './Mask';
import DialogChild from './DialogChild';

function onChange() {
}

class Dialog extends Component {
  constructor(props) {
    super(props);
    let show = this.props.defaultShow;

    if ('show' in props) {
      show = this.props.show;
    }

    this.state = {
      show,
      _show: show,
    };

    [
      'render',
      '_handleClose',
      '_handleOpen',
    ].forEach((method) => this[method] = this[method].bind(this));
  }

  componentWillReceiveProps(nextProps) {
    if ('show' in nextProps) {
      this.setState({
        show: nextProps.show,
      });
    }
  }

  _handleClose() {
    if ('handleClose' in this.props) {
      this.props.handleClose();
    } else {
      this.setState({ show: false });
    }
  }

  _handleOpen() {
    if ('handleOpen' in this.props) {
      this.props.handleOpen();
    } else {
      this.setState({ show: true });
    }
  }

  render() {
    const props = this.props;
    const _state = this.state;
    let mask = null;
    let dialogChild = null;

    if (_state.show) {
      dialogChild = (
        <DialogChild
          rootClassNamePrefix = {`${props.classNamePrefix}`}
          handleChange = {this._handleClose}
          title = {props.dialogTitle}
          content = {props.dialogCOntent}
        >
          {
            React.Children.map(props.children, (child, i) =>
              React.cloneElement(child, {
                key: i,
              }))
          }
        </DialogChild>
      );

      if (props.isMaskOpen) {
        mask = (
          <Mask
            rootClassNamePrefix = {`${props.classNamePrefix}`}
            handleChange = {this._handleClose}
          />
        );
      }
    }


    return (
      <div className = {`${props.classNamePrefix}`}>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="mc-dialog-child"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {dialogChild}
        </ReactCSSTransitionGroup>

        <ReactCSSTransitionGroup
          component="div"
          transitionName="mc-dialog-mask"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {mask}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}


Dialog.propTypes = {
  show: React.PropTypes.bool,
  defaultShow: React.PropTypes.bool,
  classNamePrefix: React.PropTypes.string,
  isMaskOpen: React.PropTypes.bool,
  handleClose: React.PropTypes.func,
  handleOpen: React.PropTypes.func,
  dialogTitle: React.PropTypes.string,
  dialogCOntent: React.PropTypes.string,
  style: React.PropTypes.object,
};

Dialog.defaultProps = {
  defaultShow: false,
  classNamePrefix: 'mc-dialog',
  isMaskOpen: true,
  handleClose: onChange,
  handleOpen: onChange,
};
export default Dialog;
