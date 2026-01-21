import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('allows dropping a video file and shows it as selected', () => {
  render(<App />);

  const dropzone = screen.getByLabelText(/video upload dropzone/i);
  const file = new File(['fake'], 'sample.mp4', { type: 'video/mp4' });

  fireEvent.drop(dropzone, { dataTransfer: { files: [file] } });

  expect(screen.getByLabelText(/selected video/i)).toBeInTheDocument();
  expect(screen.getByText('sample.mp4')).toBeInTheDocument();
});
