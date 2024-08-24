import { render, screen } from '@testing-library/react';
import CrystalOfTheDay from '../components/CrystalOfTheDay';

jest.mock('../components/CrystalChart', () => () => <div>Mocked CrystalChart</div>);
jest.mock('../components/Crystals', () => [
  {
    name: 'Amethyst',
    image: '/images/amethyst.jpg',
    description: 'A powerful and protective stone.',
  },<img src={`${process.env.PUBLIC_URL}/images/some-image.jpg`} alt="Description" />
]);

test('CrystalOfTheDay integrates with CrystalChart', () => {
  render(<CrystalOfTheDay />);

  // Check if the Crystal of the Day is displayed
  expect(screen.getByText('Amethyst')).toBeInTheDocument();
  expect(screen.getByText('A powerful and protective stone.')).toBeInTheDocument();

  // Check if the CrystalChart component is rendered
  expect(screen.getByText('Mocked CrystalChart')).toBeInTheDocument();
});
