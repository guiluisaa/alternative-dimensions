import styled from 'styled-components';

import { IconButton } from '@ui/IconButton';
import { Input as InputComponent } from '@ui/Input';
import { Spinner as SpinnerComponent } from '@ui/Spinner';

export const Wrapper = styled.div`
  min-width: 400px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled(InputComponent)`
  flex: 1;
  padding-right: 2.5rem;
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
`;

export const Spinner = styled(SpinnerComponent).attrs({
  size: 20
})`
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
`;
