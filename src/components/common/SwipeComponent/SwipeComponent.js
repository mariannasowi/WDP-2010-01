import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';

const SwipeComponent = props => {
  const SwiperRef = useRef(null);

  useEffect(() => {
    if (SwiperRef.current && SwiperRef.current.swiper) {
      SwiperRef.current.swiper.slideTo(props.activePage, 0);
    }
  });

  const params = {
    spaceBetween: 20,
    grabCursor: props.grabCursor === false ? false : true,
    noSwiping: props.noSwiping === true ? true : false,
    on: {
      slideNextTransitionStart: props.leftAction,
      slidePrevTransitionStart: props.rightAction,
    },
  };

  return (
    <Swiper ref={SwiperRef} {...params}>
      {props.children}
    </Swiper>
  );
};

SwipeComponent.propTypes = {
  rightAction: PropTypes.func,
  leftAction: PropTypes.func,
  children: PropTypes.node,
  activePage: PropTypes.number,
  noSwiping: PropTypes.bool,
  grabCursor: PropTypes.bool,
};

export default SwipeComponent;
