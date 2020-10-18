import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
<<<<<<< HEAD
import Gallery from '../../features/Gallery/GalleryContainer';
=======
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';

>>>>>>> master
import PromotedProduct from '../../features/PromotedProduct/PromotedProductContainer';
import SalesContainer from '../../features/Sales/SalesContainer';
import LatestBlog from '../../features/LatestBlog/LatestBlogContainer';
import Brands from '../../features/Brands/BrandsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromotedProduct />
    <FeatureBoxes />
    <SalesContainer />
    <NewFurniture />
    <Gallery />
    <LatestBlog />
    <Brands />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
