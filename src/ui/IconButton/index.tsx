import { ComponentProps } from 'react';

import { Button } from '@/components/ui/button';
import { Icon } from '@ui/Icon';

type IconButtonProps = Omit<ComponentProps<typeof Button>, 'size'> & {
  name: ComponentProps<typeof Icon>['name'];
  size?: number;
};

export function IconButton({ size = 20, name, ...props }: IconButtonProps) {
  return (
    <Button
      size="icon"
      variant="secondary"
      className="bg-transparent hover:bg-transparent text-neutral-dark-gray hover:text-neutral-deep-gray transition-colors"
      {...props}
    >
      <Icon size={size} name={name} />
    </Button>
  );
}
