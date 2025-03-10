import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Grid({ grid = 1, gap = 'sm', className, children }: IProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  };

  const gapSizes = {
    xl: 'gap-8',
    lg: 'gap-6',
    md: 'gap-4',
    sm: 'gap-2',
  };

  return <div className={twMerge('grid', gridCols[grid], gapSizes[gap], className)}>{children}</div>;
}

interface IProps {
  grid?: 1 | 2 | 3 | 4 | 5;
  gap?: 'xl' | 'md' | 'lg' | 'sm';
  className?: string;
  children: ReactNode;
}
