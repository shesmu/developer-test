import React from 'react';
import { Schedule } from './Schedule';
import { render } from '@testing-library/react';

describe('Schedule', () => {
  it('renders', () => {
    render(<Schedule entries={[]} />);
  });
});
