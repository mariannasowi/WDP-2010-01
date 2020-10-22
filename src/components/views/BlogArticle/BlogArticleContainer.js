import { connect } from 'react-redux';
import BlogArticle from './BlogArticle';
import { setCompare, getCount } from '../../../redux/compareRedux';
import { addToFavourite, getProductById } from '../../../redux/productsRedux';

const mapStateToProps = (state, props) => {
  const article = getProductById(state, props.match.params.articleId);
  return {
    ...article,
    count: getCount(state),
    compare: state.compare,
  };
};

const mapDispatchToProps = dispatch => ({
  setCompare: value => dispatch(setCompare(value)),
  addToFavourite: value => dispatch(addToFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlogArticle);
