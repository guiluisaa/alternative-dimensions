'use client';

import { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export interface AlertProps {
  title?: ReactNode;
  description?: ReactNode;
  className?: string;
}

export function Alert({ title, description, className }: AlertProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-2 rounded-lg border border-palette-red p-4',
        className
      )}
    >
      {title && (
        <h4 className="text-xl font-bold text-palette-red">{title}</h4>
      )}
      {description && (
        <p className="text-sm text-palette-red">{description}</p>
      )}
    </div>
  );
}
