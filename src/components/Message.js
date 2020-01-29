import React from 'react';

const Message = props => {
  return (
    <div
      className={
        'message ' + (props.message.user === 'user-1' ? 'left' : 'right')
      }
    >
      <p>{props.message.text}</p>
    </div>
  );
};

export default Message;
