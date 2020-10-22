import React from 'react';
import styles from './BlogArticle.module.scss';
//import LatestBlog from '../../features/LatestBlog/LatestBlog';

const BlogArticle = () => {
  return (
    <div className={styles.root}>
      <div className={styles.blog}>
        <h3>Blog Article</h3>
      </div>
    </div>
  );
};

export default BlogArticle;
