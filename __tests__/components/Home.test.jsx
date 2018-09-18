import React from 'react';
import { shallow } from 'enzyme';

import { Home } from '../../client/components';
import { imageObj } from '../../__mocks__/fileMock';

const HomeProps = {
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


describe('Home Component', () => {
  let home;
  beforeEach(() => {
    home = shallow(<Home {...HomeProps} />);
  });

  describe('Header', () => {
    it('should render Welcome To MyFitnessClone', () => {
      expect(home.find('Title').children().text()).toEqual('Welcome to MyFitnessClone!');
    });
  });
});
