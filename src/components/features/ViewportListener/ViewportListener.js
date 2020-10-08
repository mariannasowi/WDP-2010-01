import { useEffect, useLayoutEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { setViewport } from '../../../redux/viewportRedux';
import { connect } from 'react-redux';

const ViewportListener = ({ setViewport }) => {
  const breakpoints = {
    tablet: 768,
    mobile: 320,
  };

  const resizeHandler = useCallback(() => {
    const width = window && window.innerWidth;

    if (width < breakpoints.tablet && width > breakpoints.mobile) {
      setViewport('tablet');
    } else if (width < breakpoints.mobile) {
      setViewport('mobile');
    } else {
      setViewport('desktop');
    }
  }, [breakpoints.mobile, breakpoints.tablet, setViewport]);

  useEffect(() => {
    resizeHandler();
  }, [resizeHandler]);

  useLayoutEffect(() => {
    window && window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, [resizeHandler]);

  return null;
};

const mapDispatchToProps = dispatch => ({
  setViewport: value => dispatch(setViewport(value)),
});

ViewportListener.propTypes = {
  setViewport: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ViewportListener);
