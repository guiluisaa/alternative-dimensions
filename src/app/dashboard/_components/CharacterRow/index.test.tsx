import { renderWithProviders, screen } from '@/__tests__/renderWithProviders';
import { GetCharactersQuery } from '@/generated/graphql';

import { CharacterRow } from './index';

type CharacterFromQuery = NonNullable<
  NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>[number]
>;

const mockCharacter: CharacterFromQuery = {
  __typename: 'Character',
  id: '1',
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  location: {
    __typename: 'Location',
    name: 'Citadel of Ricks'
  }
};

const mockCharacterWithoutLocation: CharacterFromQuery = {
  __typename: 'Character',
  id: '2',
  name: 'Morty Smith',
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  location: null
};

const mockCharacterWithoutImage: CharacterFromQuery = {
  __typename: 'Character',
  id: '3',
  name: 'Summer Smith',
  image: null,
  location: {
    __typename: 'Location',
    name: 'Earth (Replacement Dimension)'
  }
};

describe('CharacterRow', () => {
  it('should render table row element', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={mockCharacter} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toBeInTheDocument();
    expect(row.tagName).toBe('TR');
  });
  it('should render character row with complete data', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={mockCharacter} />
        </tbody>
      </table>
    );

    expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();

    expect(screen.getByText('Citadel of Ricks')).toBeInTheDocument();

    const avatar = screen.getByRole('img', { name: 'Rick Sanchez' });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('rickandmortyapi.com')
    );
    expect(avatar).toHaveAttribute('alt', 'Rick Sanchez');
    expect(avatar).toHaveAttribute('loading', 'lazy');
  });

  it('should render character row without location', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={mockCharacterWithoutLocation} />
        </tbody>
      </table>
    );

    expect(screen.getByText('Morty Smith')).toBeInTheDocument();

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(3);
    expect(cells[2]).toHaveTextContent('');

    const avatar = screen.getByRole('img', { name: 'Morty Smith' });
    expect(avatar).toBeInTheDocument();
  });

  it('should render character row without image', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={mockCharacterWithoutImage} />
        </tbody>
      </table>
    );

    expect(screen.getByText('Summer Smith')).toBeInTheDocument();

    expect(
      screen.getByText('Earth (Replacement Dimension)')
    ).toBeInTheDocument();

    const avatar = screen.getByRole('img', { name: 'Summer Smith' });
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('alt', 'Summer Smith');
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('placeholder-avatar.png')
    );
  });

  it('should render empty row when character is null', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={null} />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    expect(row).toBeInTheDocument();

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(3);

    expect(cells[1]).toHaveTextContent('');
    expect(cells[2]).toHaveTextContent('');

    const avatar = screen.getByRole('presentation');
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('placeholder-avatar.png')
    );
    expect(avatar).toHaveAttribute('alt', '');
  });

  it('should render correct table structure', () => {
    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={mockCharacter} />
        </tbody>
      </table>
    );

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(3);

    const avatarCell = cells[0];
    const avatar = screen.getByRole('img');
    expect(avatarCell).toContainElement(avatar);

    const nameCell = cells[1];
    expect(nameCell).toHaveTextContent('Rick Sanchez');

    const locationCell = cells[2];
    expect(locationCell).toHaveTextContent('Citadel of Ricks');
  });

  it('should handle character with only partial data', () => {
    const partialCharacter: CharacterFromQuery = {
      __typename: 'Character',
      id: '4',
      name: null,
      image: null,
      location: null
    };

    renderWithProviders(
      <table>
        <tbody>
          <CharacterRow character={partialCharacter} />
        </tbody>
      </table>
    );

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(3);

    expect(cells[1]).toHaveTextContent('');
    expect(cells[2]).toHaveTextContent('');

    const avatar = screen.getByRole('presentation');
    expect(avatar).toHaveAttribute(
      'src',
      expect.stringContaining('placeholder-avatar.png')
    );
    expect(avatar).toHaveAttribute('alt', '');
  });
});
