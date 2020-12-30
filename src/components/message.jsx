import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

const Message = (props) => {
  const { author, content, created_at } = props.data;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span>{author}</span>
        <small>{time}</small>
      </i>
      <p>{content}</p>-
    </div>
  );
};

export default Message;
