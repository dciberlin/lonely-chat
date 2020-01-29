import React from 'react';
import { connect } from 'react-redux';

const MessagesContainer = props => {
  return <h3>{props.message}</h3>;
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(MessagesContainer);
