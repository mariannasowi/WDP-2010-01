import { connect } from 'react-redux';
import Gallery from './Gallery';

import {
  getFeatured,
  getTopSeller,
  getSale,
  getTopRated,
} from '../../../redux/productsRedux.js';
import { setWishList, setCompareList } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  featured: getFeatured(state),
  topSeller: getTopSeller(state),
  saleOff: getSale(state),
  topRated: getTopRated(state),
});

const mapDispatchToProps = dispatch => ({
  setWishList: id => dispatch(setWishList(id)),
  setCompareList: id => dispatch(setCompareList(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
