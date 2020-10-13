import { connect } from 'react-redux';
import Stars from './Stars';

import { setUserStars } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  setUserStars: (id, star) => dispatch(setUserStars({ id: id, star: star })),
});

export default connect(null, mapDispatchToProps)(Stars);
