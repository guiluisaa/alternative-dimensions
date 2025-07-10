'use client';

import { ThHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableHeaderCellElement> { }

export function TableHeaderCell({ className, ...props }: TableHeaderCellProps) {
    return (
        <th
            className={cn('px-6 py-2 border border-neutral-lightGray font-bold', className)}
            {...props}
        />
    );
}
