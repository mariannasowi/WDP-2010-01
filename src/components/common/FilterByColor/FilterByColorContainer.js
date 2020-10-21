import { connect } from 'react-redux';
import { getActiveFilterColor, getFilterColors } from '../../../redux/categoriesRedux';

import FilterByColor from './FilterByColor';

const mapStateToProps = state => ({
  activeColor: getActiveFilterColor(state),
  colors: getFilterColors(state),
});

export default connect(mapStateToProps)(FilterByColor);
