import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function PageContainer(props: IProps) {
  return <div className={twMerge('px-16 grid gap-6', props.className)}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
