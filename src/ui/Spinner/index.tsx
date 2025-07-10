'use client';

import { HTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
}

export function Spinner({ size = 20, className, ...props }: SpinnerProps) {
    return (
        <div
            className={cn(
                'inline-block animate-spin rounded-full border-4 border-neutral-lightGray border-t-neutral-black',
                className
            )}
            style={{ width: size, height: size }}
            {...props}
        />
    );
}
