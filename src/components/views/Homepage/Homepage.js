import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SalesContainer from '../../features/Sales/SalesContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SalesContainer />
    <NewFurniture />
    <LatestBlog />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
