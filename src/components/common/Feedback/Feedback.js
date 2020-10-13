import React from 'react';
import PropTypes from 'prop-types';
import styles from './Feedback.module.scss';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feedback = ({ image, text, name, category }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.icona}>
          <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.photo}>
          <img src={image} alt={name} />
          <div>
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Feedback.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
};

export default Feedback;
