import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelList extends Component {
  renderChannelList = () => {
    return (this.props.channelList.map((channel) => {
      return (
        <li
          key={channel}
          className={channel === this.props.presentChannel ? 'active' : null}
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

export default connect(mapStateToProps)(ChannelList);
