const MessageReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return action.payload.messages;
    case 'SEND_MESSAGE': {
      const newMessages = state;
      newMessages.push(action.payload);
      return newMessages;
    }
    default:
      return state;
  }
};

export default MessageReducer;
