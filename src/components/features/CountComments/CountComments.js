import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const CountComments = props => {
  const comments = props.comments;
  return (
    <div>
      <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> {comments.length}
    </div>
  );
};

CountComments.propTypes = {
  comments: PropTypes.array,
};

export default CountComments;
