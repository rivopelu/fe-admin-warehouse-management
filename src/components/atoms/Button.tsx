import { twMerge } from 'tailwind-merge';
import type { MouseEventHandler, ReactNode } from 'react';

export default function Button(props: IProps) {
  function checkRounded() {
    switch (props.rounded) {
      case 'full':
        return 'rounded-full';
      case 'small':
        return 'rounded-sm';
      case 'large':
        return 'rounded-lg';
      case 'medium':
        return 'rounded-md';
      default:
        return 'rounded-lg';
    }
  }

  function checkVariant() {
    const colorClasses = {
      primary: 'border-primary-main text-primary-main bg-transparent hover:bg-primary-main/5 active:bg-primary-main/10',
      info: 'border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500/5 active:bg-blue-500/10',
      error: 'border-red-500 text-red-500 bg-transparent hover:bg-red-500/5 active:bg-red-500/10',
      gray: 'border-gray-500 text-gray-500 bg-transparent hover:bg-gray-500/5 active:bg-gray-500/10',
    };

    const solidClasses = {
      primary: 'bg-primary-main text-white border-primary-main hover:bg-primary-dark active:bg-primary-light',
      info: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-600 active:bg-blue-400',
      error: 'bg-red-500 text-white border-red-500 hover:bg-red-600 active:bg-red-400',
      gray: 'bg-gray-500 text-white border-gray-500 hover:bg-gray-600 active:bg-gray-400',
    };

    if (props.variant === 'outlined') {
      return colorClasses[props.color || 'primary'];
    }
    return solidClasses[props.color || 'primary'];
  }

  function checkSize() {
    switch (props.size) {
      case 'sm':
        return 'h-[32px] text-sm px-3';
      default:
        return 'h-field-height px-3';
    }
  }

  return (
    <button
      onClick={(e) => !props.disable && !props.loading && props.onClick && props.onClick(e)}
      type={props.type}
      disabled={props.disable}
      className={twMerge(
        'border-2 w-full duration-200 cursor-pointer ',
        checkVariant(),
        checkRounded(),
        checkSize(),
        props.disable ? 'opacity-50 cursor-not-allowed' : '',
        props.className,
      )}
    >
      <div>{props.loading ? 'loading...' : props.children}</div>
    </button>
  );
}

interface IProps {
  children: ReactNode;
  rounded?: 'full' | 'small' | 'medium' | 'large';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'outlined' | 'solid';
  size?: 'sm' | 'default';
  disable?: boolean;
  color?: 'primary' | 'info' | 'error' | 'gray';
}
