import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  expect('hello world').toStrictEqual('hello world');
});