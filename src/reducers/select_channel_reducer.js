const selectChannelReducer = (state = null, action) => {
  switch (action.type) {
    case 'CHANGE_CHANNEL':
      return action.payload;
    default:
      return state;
  }
};

export default selectChannelReducer;
