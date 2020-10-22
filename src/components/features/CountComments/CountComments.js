import React from 'react';
import PropTypes from 'prop-types';

class CountComments extends React.Component {
  render() {
    const { posts } = this.props;
    let numberOfComments = [];
    posts.forEach(element => {
      numberOfComments.push(element.comments.length);
    });

    return <p>{numberOfComments}</p>;
  }
}

CountComments.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      date: PropTypes.string,
      comments: PropTypes.array,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};

export default CountComments;
