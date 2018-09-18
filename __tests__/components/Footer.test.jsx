import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '../../client/components';


const FooterProps = {
  user: {
    first_name: 'bob',
    weight: [1, 2, 3, 4, 5],
    avatarUrl: ''

  },

  goal: {
    calorie: 5,
    protein: 5,
    fat: 5,
    carbs: 5
  },

  uploadImage: jest.fn()
};


describe('Footer Component', () => {
  let footer;
  beforeEach(() => {
    footer = shallow(<Footer {...FooterProps} />);
  });
  it('Should have a cool copyright', () => {
    expect(footer.find('StyledCopyright').children().text()).toEqual(' © 2018 Joey Zheng ');
  });
});
