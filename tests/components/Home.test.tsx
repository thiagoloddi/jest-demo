/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../../components/Home';

describe('<Home />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
