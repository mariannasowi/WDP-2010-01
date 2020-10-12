import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite } from '../../../redux/productsRedux';

const mapStateToProps = state => ({
  count: getCount(state),
  compare: state.compare,
});

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
