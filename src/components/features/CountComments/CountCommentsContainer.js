import { connect } from 'react-redux';

import CountComments from './CountComments';

import { getAllPosts } from '../../../redux/postsRedux ';

const mapStateToProps = state => ({
  posts: getAllPosts(state),
});

export default connect(mapStateToProps)(CountComments);
