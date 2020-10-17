import { connect } from 'react-redux';
import Gallery from './Gallery';

import {
  getFeatured,
  getTopSeller,
  getSalesOff,
  getTopRated,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  featured :  getFeatured(state),
  topSeller: getTopSeller(state),
  saleOff: getSalesOff(state),
  topRated: getTopRated(state),
});

export default connect(mapStateToProps)(Gallery);
