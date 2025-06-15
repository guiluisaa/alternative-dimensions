import { ReactNode } from 'react';
import * as S from './styles';

type AlertProps = {
  title?: string;
  description?: string | ReactNode;
};

export function Alert({ title, description }: AlertProps) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {description && <S.Description>{description}</S.Description>}
    </S.Wrapper>
  );
}
