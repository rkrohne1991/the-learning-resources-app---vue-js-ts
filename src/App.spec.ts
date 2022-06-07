import { describe, expect, it } from '@jest/globals';
import { mount } from '@vue/test-utils';

import App from './App.vue';

describe('App', () => {
  it('should display header text', () => {
    const text = 'The Learning Resources App';
    const wrapper = mount(App);

    expect(wrapper.find('h1').text()).toEqual(text);
  });
});
