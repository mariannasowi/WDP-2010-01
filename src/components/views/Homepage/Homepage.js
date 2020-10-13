import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedbackContainer';
import SalesContainer from '../../features/Sales/SalesContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SalesContainer />
    <NewFurniture />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
