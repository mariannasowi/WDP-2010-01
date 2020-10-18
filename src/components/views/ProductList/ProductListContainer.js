import { connect } from 'react-redux';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite, getCategoryById } from '../../../redux/productsRedux';
import ProductList from './ProductList';

const mapStateToProps = (state, props) => {
  const category = getCategoryById(state, props.match.params.categoryId);
  return {
    ...category,
    count: getCount(state),
    compare: state.compare,
  };
};

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
