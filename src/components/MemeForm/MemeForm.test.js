import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MemeForm from './MemeForm';

describe('<MemeForm />', () => {
  test('it should mount', () => {
    render(<MemeForm />);

    const MemeForm = screen.getByTestId('MemeForm');

    expect(MemeForm).toBeInTheDocument();
  });
});