import React from 'react';
import Message from './message';
import MessageList from '../containers/message_list';
import MessageForm from '../containers/message_form';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
