import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../component/dropdown/Dropdown';

const options = ['Option 1', 'Option 2', 'Option 3'];

storiesOf('Dropdown', module)
  .add('Default', () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log('Selected:', e.target.value)}
      selectedItem={options[0]}
    />
  ))
  .add('With Selected Item', () => (
    <Dropdown
      options={options}
      onChange={(e) => console.log('Selected:', e.target.value)}
      selectedItem={options[1]}
    />
  ));