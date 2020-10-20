import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite } from '../../../redux/productsRedux';
import { addToCart } from '../../../redux/cartRedux';

const mapStateToProps = state => ({
  count: getCount(state),
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
  addToCart: value => dispatch(addToCart(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
