'use client';

import { TdHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> { }

export function TableCell({ className, ...props }: TableCellProps) {
    return (
        <td
            className={cn('px-6 py-2 border border-neutral-lightGray', className)}
            {...props}
        />
    );
}
