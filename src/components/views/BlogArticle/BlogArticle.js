import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogArticle.module.scss';
import LatestBlog from '../../features/LatestBlog/LatestBlog';

const BlogArticle = ({ articles }) => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.blog}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Blog Article</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a href='#0'> </a>
                </li>
                <li>
                  <a href='#1'> </a>
                </li>
                <li>
                  <a href='#2'> </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.latestBlog}>
          {articles.map(article => {
            return <LatestBlog {...article} key={article.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

BlogArticle.propTypes = {
  articles: PropTypes.array,
};

export default BlogArticle;
