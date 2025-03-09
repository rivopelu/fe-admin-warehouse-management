import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card(props: IProps) {
  return <div className={twMerge('border-2 bg-white rounded-lg', props.className)}>{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={twMerge('p-4 w-full', props.className)}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
