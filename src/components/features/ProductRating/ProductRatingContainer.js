import { connect } from 'react-redux';
import ProductRating from './ProductRating';
import { setStars } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  setStars: value => dispatch(setStars(value)),
});

export default connect(null, mapDispatchToProps)(ProductRating);
