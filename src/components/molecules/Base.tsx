import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum.ts';
import { ReactNode } from 'react';

export function Base(props: IProps) {
  function checkPage() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div>
            <div>TOP BAR</div>
            <div>{props.children}</div>
          </div>
        );
      default:
        return <>{props.children}</>;
    }
  }
  return <>{checkPage()}</>;
}

interface IProps {
  type: PAGE_TYPE_ENUM;
  children: ReactNode;
}
