import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import styles from './Stars.module.scss';

const Stars = ({ stars, userStars }) => {
  const [hover, setHover] = useState(null);
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map(i => {
        let count = stars;
        if (userStars) {
          count = userStars;
        }
        if (hover) {
          count = hover;
        }
        return (
          <a key={i} href='/#' className={userStars}>
            <FontAwesomeIcon
              onMouseOver={() => {
                setHover(i);
              }}
              onMouseLeave={() => {
                setHover(null);
              }}
              icon={farStar}
            >
              {i} stars
            </FontAwesomeIcon>
          </a>
        );
      })}
    </div>
  );
};

Stars.propTypes = {
  stars: PropTypes.number,
  userStars: PropTypes.number,
};

export default Stars;
