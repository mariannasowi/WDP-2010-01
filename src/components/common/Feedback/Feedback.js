import React from 'react';
import PropTypes from 'prop-types';
//import styles from './Feedback.module.scss';

const Feedback = ({ name, image, text }) => (
  <div>
    {text}
    <div className='container'>
      <img src={image} alt={name} />
    </div>
  </div>
);

Feedback.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Feedback;
