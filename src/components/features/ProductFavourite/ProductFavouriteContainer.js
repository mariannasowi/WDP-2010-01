import { connect } from 'react-redux';
import ProductFavourite from './ProductFavourite';
import { addToFavourite, removeFromFavourite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  addToFavourite: value => dispatch(addToFavourite(value)),
  removeFromFavourite: value => dispatch(removeFromFavourite(value)),
});

export default connect(null, mapDispatchToProps)(ProductFavourite);
