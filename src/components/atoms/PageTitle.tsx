import { IBreadcrumbData } from '../../types/data/IBreadcrumbData.ts';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

export function PageTitle(props: IProps) {
  return (
    <div>
      {props.breadcrumb && (
        <div className={'flex  text-gray-500 mb-3'}>
          {props.breadcrumb.map((item, i) => (
            <div key={i} className={'flex items-center '}>
              <>
                {props.breadcrumb && props.breadcrumb?.length - 1 !== i ? (
                  <Link to={item?.path || ''}>{item.label}</Link>
                ) : (
                  <div className={'text-black'}>{item.label}</div>
                )}
              </>
              {props.breadcrumb && i !== props?.breadcrumb.length - 1 && (
                <span className={'pr-2 pl-4'}>
                  <MdArrowForwardIos className={'text-sm'} />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
      <h3 className={'text-2xl capitalize'}>{props.title}</h3>
    </div>
  );
}

interface IProps {
  title?: string;
  breadcrumb?: IBreadcrumbData[];
}
