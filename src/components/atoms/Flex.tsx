import { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Flex({
  direction = 'row',
  gap = 'sm',
  justify = 'start',
  align = 'start',
  className,
  children,
}: IProps) {
  const flexDirections = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const gapSizes = {
    xl: 'gap-8',
    lg: 'gap-6',
    md: 'gap-4',
    sm: 'gap-2',
  };

  const justifyOptions = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  };

  const alignOptions = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  };

  return (
    <div
      className={twMerge(
        'flex',
        flexDirections[direction],
        gapSizes[gap],
        justifyOptions[justify],
        alignOptions[align],
        className,
      )}
    >
      {children}
    </div>
  );
}

interface IProps {
  direction?: 'row' | 'col';
  gap?: 'xl' | 'md' | 'lg' | 'sm';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  className?: string;
  children: JSX.Element | JSX.Element[];
}
