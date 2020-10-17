import { connect } from 'react-redux';

import LatestBlog from './LatestBlog';

import { getAllPosts } from '../../../redux/postsRedux ';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(LatestBlog);
