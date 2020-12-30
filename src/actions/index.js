// TODO: add and export your own actions

export function fetchMessages(channel) {
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
    .then(response => response.json());

  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  };
}

export function sendMessage(channel, username, messageContent) {
  const body = { author: username, content: messageContent  }
  const promise = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: 'SEND_MESSAGE',
    payload: promise
  };
}

export function changeChannel(channel) {
  return {
    type: 'CHANGE_CHANNEL',
    payload: channel
  };
}
