import React from 'react';
import { shallow } from 'enzyme';
import LatestBlog from './LatestBlog';

describe('Component LatestBlog', () => {
  it('should render without crashing', () => {
    const component = shallow(<LatestBlog />);
    expect(component).toBeTruthy();
  });
});
