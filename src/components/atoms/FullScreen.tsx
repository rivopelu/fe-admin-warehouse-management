import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function FullScreen(props: IProps) {
  return <div className={twMerge('min-h-screen w-full', props.className)}>{props.children}</div>;
}

interface IProps {
  children: ReactNode;
  className?: string;
}
