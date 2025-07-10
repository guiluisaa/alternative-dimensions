import { ReactNode } from 'react';

import { Alert as ShadcnAlert, AlertTitle, AlertDescription } from '@/components/ui/alert';

type AlertProps = {
  title?: string;
  description?: string | ReactNode;
};

export function Alert({ title, description }: AlertProps) {
  return (
    <ShadcnAlert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      {description && <AlertDescription>{description}</AlertDescription>}
    </ShadcnAlert>
  );
}
