import React from 'react';
import { connect } from 'react-redux';

const MessagesContainer = props => {
  return <h3>Message</h3>;
};

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default connect(mapStateToProps)(MessagesContainer);
