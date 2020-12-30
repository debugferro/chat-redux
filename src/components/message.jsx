import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectCity } from '../actions/index';

const Message = (props) => {
  return (
    <div>
      <h3>{props.data.author}</h3>
      <p>{props.data.content}</p>-
    </div>
  );
};

export default Message;
