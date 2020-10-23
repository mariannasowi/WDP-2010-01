import { connect } from 'react-redux';

import { getAllBrands } from '../../../redux/brandsRedux';

import Brands from './Brands';

const mapStateToProps = state => ({
  brands: getAllBrands(state),
});

export default connect(mapStateToProps)(Brands);
