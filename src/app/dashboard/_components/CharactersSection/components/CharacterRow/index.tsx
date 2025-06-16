import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';

import { TableCell } from '@ui/TableCell';

import { GetCharactersQuery } from '@/generated/graphql';

import * as S from './styles';

type CharacterFromQuery = NonNullable<
  NonNullable<NonNullable<GetCharactersQuery['characters']>['results']>[number]
>;

type CharacterRowProps = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
> & {
  character: CharacterFromQuery | null;
};

export const CharacterRow = forwardRef<HTMLTableRowElement, CharacterRowProps>(
  ({ character, ...props }, ref) => {
    const imageSrc = character?.image || '/placeholder-avatar.png';

    return (
      <tr {...props} ref={ref}>
        <TableCell>
          <S.Avatar src={imageSrc} alt={character?.name ?? ''} loading="lazy" />
        </TableCell>
        <S.NameCell>{character?.name}</S.NameCell>
        <TableCell>{character?.location?.name}</TableCell>
      </tr>
    );
  }
);

CharacterRow.displayName = 'CharacterRow';
