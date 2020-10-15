import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { setViewport } from '../../../redux/viewportRedux';
import { connect } from 'react-redux';

const ViewportListener = ({ setViewport }) => {
  const breakpoints = {
    tablet: 992,
    mobile: 768,
  };

  const checkViewport = useCallback(() => {
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

  const handleResize = useCallback(() => {
    setViewport(checkViewport());
  }, [checkViewport, setViewport]);

  useEffect(() => {
    setViewport(checkViewport());
    window && window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [checkViewport, handleResize, setViewport]);

  return null;
};

const mapDispatchToProps = dispatch => ({
  setViewport: value => dispatch(setViewport(value)),
});

ViewportListener.propTypes = {
  setViewport: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ViewportListener);
