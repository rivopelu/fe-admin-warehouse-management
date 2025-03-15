import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export function Card(props: IProps) {
  return <div className={twMerge('border-2 bg-white rounded-lg', props.className)}>{props.children}</div>;
}

export function CardBody(props: IProps) {
  return <div className={twMerge('p-4 w-full', props.className)}>{props.children}</div>;
}

export function CardTitle(props: IPropsTitle) {
  return <div className={twMerge('text-lg ', props.className)}>{props.title}</div>;
}

interface IPropsTitle {
  title: string;
  className?: string;
}
interface IProps {
  children: ReactNode;
  className?: string;
}
