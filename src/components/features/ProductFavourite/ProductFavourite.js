import React from 'react';
import PropTypes from 'prop-types';
import style from './ProductFavourite.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../common/Button/Button';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const ProductFavourite = ({ id, heart, addToFavourite, removeFromFavourite }) => {
  return (
    <div
      onClick={() => {
        heart ? removeFromFavourite({ id }) : addToFavourite({ id });
      }}
    >
      <Button variant='outline'>
        <FontAwesomeIcon
          id={id}
          heart={heart}
          icon={faHeart}
          className={heart ? style.heart : ''}
        >
          Favorite
        </FontAwesomeIcon>
      </Button>
    </div>
  );
};

ProductFavourite.propTypes = {
  id: PropTypes.string.isRequired,
  heart: PropTypes.bool,
  addToFavourite: PropTypes.func.isRequired,
  removeFromFavourite: PropTypes.func.isRequired,
};

export default ProductFavourite;
