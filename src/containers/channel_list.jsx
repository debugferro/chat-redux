import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeChannel, fetchMessages } from '../actions/index';

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.changeChannel(channel);
    this.props.fetchMessages(channel);
  }

  renderChannelList = () => {
    return (this.props.channelList.map((channel) => {
      return (
        <li
          key={channel}
          className={channel === this.props.presentChannel ? 'active' : null}
          onClick={() => this.handleClick(channel)}
        >
        #{channel}
        </li>
      );
    }));
  }

  render() {
    return (
      <div className="channels-container">
        <ul>
          {this.renderChannelList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    presentChannel: state.selectedChannel,
    channelList: state.channel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeChannel: changeChannel,
      fetchMessages: fetchMessages
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
