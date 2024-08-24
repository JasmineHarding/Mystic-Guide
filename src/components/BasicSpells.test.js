import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import BasicSpells from '../components/BasicSpells';
import useNote from '../hooks/useNote';

// Mock the useNote hook
jest.mock('../hooks/useNote');

test('BasicSpells component integrates with useNote hook', () => {
  const mockSaveNote = jest.fn();
  useNote.mockReturnValue(['Test note', jest.fn(), mockSaveNote]);

  render(
    <MemoryRouter>
      <BasicSpells />
    </MemoryRouter>
  );

  // Check if the note from the hook is displayed
  expect(screen.getByDisplayValue('Test note')).toBeInTheDocument();

  // Simulate user changing the note
  fireEvent.change(screen.getByPlaceholderText('Write your notes here...'), {
    target: { value: 'Updated note content' },
  });

  // Simulate clicking the save button
  fireEvent.click(screen.getByText('Save'));

  // Check if the save function was called
  expect(mockSaveNote).toHaveBeenCalled();
});
