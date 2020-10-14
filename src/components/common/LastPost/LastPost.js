import React from 'react';
import PropTypes from 'prop-types';

import styles from './LastPost.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const LastPost = ({ id, date, comments, title, description, image }) => (
  <div className={styles.root}>
    <div className={styles.photo}>
      <img src={image} alt={id} />
    </div>
    <div className={styles.body}>
      <div className='row'>
        <div className='col-6'>
          <p>
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {date}
          </p>
        </div>
        <div className='col-6'>
          <p>
            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon> {comments}
          </p>
        </div>
      </div>
      <h4>{title}</h4>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttons}>
        <Button variant='small'>Read more</Button>
      </div>
    </div>
  </div>
);

LastPost.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string,
  comments: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default LastPost;
