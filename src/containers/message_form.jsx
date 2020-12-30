import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../actions/index';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
  }


  componentDidMount() {
    this.messageBox.focus();
  }

  shouldComponentUpdate() {
    return true;
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.sendMessage(this.props.selectedChannel, this.props.username, this.state.value);
    this.setState({ value: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor" >
        <textarea
          ref={(textarea) => { this.messageBox = textarea; }}
          value={this.state.value}
          onChange={this.handleChange}
          className="form-control"
        />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    username: state.username,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
