'use client';

import { InputHTMLAttributes } from 'react';

import { cn } from '@/lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                'px-6 py-2 rounded-sm border border-neutral-lightGray',
                className
            )}
            {...props}
        />
    );
}
