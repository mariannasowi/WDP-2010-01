import React from 'react';
import { shallow } from 'enzyme';
import LastPost from './LastPost';

describe('Component LastPost', () => {
  it('should render without crashing', () => {
    const component = shallow(<LastPost id='aaa' />);
    expect(component).toBeTruthy();
  });
});
