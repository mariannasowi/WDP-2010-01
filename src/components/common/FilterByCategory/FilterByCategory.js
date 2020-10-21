import React from 'react';
import PropTypes from 'prop-types';

const FilterByCategory = ({ numberOfProductsByCategory }) => {
  return (
    <div>
      {numberOfProductsByCategory.map(({ name, quantity }, index) => (
        <div key={index}>
          <span>{name}</span> - <span>{quantity}</span>
        </div>
      ))}
    </div>
  );
};

FilterByCategory.propTypes = {
  numberOfProductsByCategory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      quantity: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export default FilterByCategory;
