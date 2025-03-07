import { PAGE_TYPE_ENUM } from '../../enums/page-type-enum.ts';
import { ReactNode } from 'react';
import Sidebar from './Sidebar.tsx';
import TopBar from './TopBar.tsx';

export function Base(props: IProps) {
  function checkPage() {
    switch (props.type) {
      case PAGE_TYPE_ENUM.PRIMARY:
        return (
          <div className={'flex  min-h-screen'}>
            <Sidebar />
            <div className={"flex-1"}>
              <TopBar/>
              <div className={'flex-1'}>{props.children}</div>
            </div>
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
