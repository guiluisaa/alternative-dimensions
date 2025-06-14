import { ComponentProps } from 'react';

import { Icon } from '@ui/Icon';

import * as S from './styles';

type IconButtonProps = ComponentProps<typeof S.Wrapper> &
  ComponentProps<typeof Icon>;

export function IconButton({ size = 20, name, ...props }: IconButtonProps) {
  return (
    <S.Wrapper size={size} {...props}>
      <Icon size={size} name={name} />
    </S.Wrapper>
  );
}
