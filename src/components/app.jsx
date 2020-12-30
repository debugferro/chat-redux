import React from 'react';
import Message from './message';
import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <MessageList />
    </div>
  );
};

export default App;
