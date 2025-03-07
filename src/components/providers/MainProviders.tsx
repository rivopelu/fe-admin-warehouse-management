import { ReactNode } from 'react';
import { Base } from '../molecules/Base.tsx';
import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum.ts';

export function MainProviders(props: IProps) {
  return <Base type={props.type}>{props.children}</Base>;
}

interface IProps {
  children: ReactNode;
  type: PAGE_TYPE_ENUM;
}
