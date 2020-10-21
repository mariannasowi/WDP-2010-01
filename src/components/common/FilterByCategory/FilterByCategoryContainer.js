import { connect } from 'react-redux';
import { numberOfProductsByCategory } from '../../../redux/categoriesRedux';
import FilterByCategory from './FilterByCategory';

const mapStateToProps = state => ({
  numberOfProductsByCategory: numberOfProductsByCategory(state),
});

export default connect(mapStateToProps)(FilterByCategory);
