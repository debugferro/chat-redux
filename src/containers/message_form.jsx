import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage, fetchMessages } from '../actions/index';

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

  keySubmit = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.handleSubmit(event);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="channel-editor" ref={(form) => { this.form = form; }} >
        <textarea
          ref={(textarea) => { this.messageBox = textarea; }}
          value={this.state.value}
          onChange={this.handleChange}
          className="form-control"
          onKeyDown={this.keySubmit}
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
    { sendMessage: sendMessage, fetchMessages: fetchMessages }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
