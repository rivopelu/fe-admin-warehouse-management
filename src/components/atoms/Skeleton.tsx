import { twMerge } from 'tailwind-merge';

function Skeleton(props: IProps) {
  return <div className={twMerge('h-2.5 animate-pulse bg-gray-200 rounded-full  w-full ', props.className)}></div>;
}

export default Skeleton;

interface IProps {
  className?: string;
}
