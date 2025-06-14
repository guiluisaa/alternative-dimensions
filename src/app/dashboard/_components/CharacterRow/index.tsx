import { DetailedHTMLProps, HTMLAttributes } from 'react';

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

export function CharacterRow({ character, ...props }: CharacterRowProps) {
  const imageSrc = character?.image || '/placeholder-avatar.png';

  return (
    <tr {...props}>
      <TableCell>
        <S.Avatar src={imageSrc} alt={character?.name ?? ''} loading="lazy" />
      </TableCell>
      <S.NameCell>{character?.name}</S.NameCell>
      <TableCell>{character?.location?.name}</TableCell>
    </tr>
  );
}
