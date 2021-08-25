/* eslint-disable no-undef */
/**
 * @jest-environment jsdom
 */

import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../components/product_overview/Overview.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 2 and 2', () => {
    expect(2 + 2).toEqual(4);
  });
});

<<<<<<< HEAD
describe('Product Overview', function () {
  it('should render the carousel widget without crashing', function () {
    const wrapper = shallow(<Carousel productId='test' images={[test, test]} currentImage='test' styles={[test, test]} currentStyle={{}} thumbnailClick={test} />);
=======
describe('Carousel', function () {
  it('should render the Carousel part of the overview widget without crashing', function () {
    const wrapper = shallow(<Overview />);
>>>>>>> main
    expect(wrapper.hasClass('carousel')).toBeTruthy();
  });
});
