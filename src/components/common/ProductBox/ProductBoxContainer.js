import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { setFavourite, getCountFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  count: getCount(state),
  compare: state.compare,
  // countFav: getCountFavourite(state),
  favourite: state.favourite,
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  setFavourite: value => dispatch(setFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
