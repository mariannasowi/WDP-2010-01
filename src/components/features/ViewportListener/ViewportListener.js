import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { setViewport } from '../../../redux/viewportRedux';
import { connect } from 'react-redux';

const ViewportListener = ({ setViewport }) => {
  const breakpoints = {
    tablet: 992,
    mobile: 768,
  };

  function checkViewport() {
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
  }

  function handleresize() {
    setViewport(checkViewport());
  }

  useEffect(() => {
    setViewport(checkViewport());
    window && window.addEventListener('resize', handleresize);
    return () => window.removeEventListener('resize', handleresize);
  }, [checkViewport, handleresize, setViewport]);

  return null;
};

const mapDispatchToProps = dispatch => ({
  setViewport: value => dispatch(setViewport(value)),
});

ViewportListener.propTypes = {
  setViewport: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ViewportListener);
