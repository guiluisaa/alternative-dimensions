import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';

import { TableCell } from '@ui/TableCell';

import Image from 'next/image';

import { GetCharactersQuery } from '@/generated/graphql';

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
          <Image
            src={imageSrc}
            alt={character?.name ?? ''}
            width={50}
            height={50}
            loading="lazy"
            className="rounded-full"
          />
        </TableCell>
        <TableCell className="w-[250px]">{character?.name}</TableCell>
        <TableCell>{character?.location?.name}</TableCell>
      </tr>
    );
  }
);

CharacterRow.displayName = 'CharacterRow';
