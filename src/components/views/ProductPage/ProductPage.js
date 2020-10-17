import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';

const url = window.location.href;

const ProductPage = () => <div className={styles.root}>This is ProductPage{url}</div>;

// ProductPage.propTypes = {};

export default ProductPage;
