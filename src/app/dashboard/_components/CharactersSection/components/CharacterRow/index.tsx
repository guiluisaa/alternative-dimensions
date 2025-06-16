import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react';

import Image from 'next/image';

import { TableCell } from '@ui/TableCell';

import { GetCharactersQuery } from '@/generated/graphql';

import * as styles from './styles.css';

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
            className={styles.avatar}
            src={imageSrc}
            alt={character?.name ?? ''}
            width={50}
            height={50}
            loading="lazy"
          />
        </TableCell>
        <TableCell className={styles.nameCell}>{character?.name}</TableCell>
        <TableCell>{character?.location?.name}</TableCell>
      </tr>
    );
  }
);

CharacterRow.displayName = 'CharacterRow';
