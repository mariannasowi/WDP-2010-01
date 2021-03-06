import React from 'react';
import { shallow } from 'enzyme';
import ProductBox from './ProductBox';

const props = {
  id: 'aa',
  setCompare: () => {},
  count: 2,
  compare: { products: [{ id: '1' }, { id: '2' }] },
  addToFavourite: () => {},
};

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBox {...props} />);
    expect(component).toBeTruthy();
  });
});
