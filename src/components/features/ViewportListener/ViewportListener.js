import { useEffect, useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { setViewport } from '../../../redux/viewportRedux';
import { connect } from 'react-redux';

const ViewportListener = ({ setViewport }) => {
  const breakpoints = {
    tablet: 992,
    mobile: 768,
  };

  const resizeHandler = useCallback(() => {
    if (window.innerWidth < breakpoints.mobile) {
      return 'mobile';
    } else if (
      window.innerWidth >= breakpoints.mobile &&
      window.innerWidth < breakpoints.tablet
    ) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  }, [breakpoints.mobile, breakpoints.tablet]);

  useEffect(() => {
    setViewport(resizeHandler());
  }, [resizeHandler, setViewport]);

  useLayoutEffect(() => {
    window && window.addEventListener('resize', () => setViewport(resizeHandler()));
    return () =>
      window.removeEventListener('resize', () => setViewport(resizeHandler()));
  }, [resizeHandler, setViewport]);

  return null;
};

const mapDispatchToProps = dispatch => ({
  setViewport: value => dispatch(setViewport(value)),
});

ViewportListener.propTypes = {
  setViewport: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ViewportListener);
