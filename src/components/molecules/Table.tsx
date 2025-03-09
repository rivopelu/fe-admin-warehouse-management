import { ITableColumn } from '../../types/data/ITableColumn.ts';
import { twMerge } from 'tailwind-merge';
import Skeleton from '../atoms/Skeleton.tsx';

function Table(props: IProps) {
  function loadingRow() {
    return (
      <div className={'py-1 pr-4'}>
        <Skeleton className={'w-full  h-5'} />
      </div>
    );
  }

  return (
    <table className="table-auto bg-white border">
      <thead className={'border-b'}>
        <tr>
          {props.column.map((header, i) => (
            <th className={twMerge('text-start py-3  ', i === 0 && 'pl-4')} key={i}>
              {header.headerTitle}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {props.loading
          ? Array.from({ length: 10 }).map((_, i) => (
              <tr key={i}>
                {props.column.map((_, idx) => (
                  <td
                    key={idx + 1}
                    className={twMerge('py-3', idx === 0 && 'pl-4', i % 2 === 0 && 'bg-primary-main/5', 'border-b')}
                  >
                    {loadingRow()}
                  </td>
                ))}
              </tr>
            ))
          : props.data.map((row, i) => {
              return (
                <tr key={i}>
                  {props.column.map((column, idx) => (
                    <td
                      key={idx}
                      className={twMerge('py-3', idx === 0 && 'pl-4', i % 2 === 0 && 'bg-primary-main/5', 'border-b')}
                    >
                      {column.component && column.component(row)}
                    </td>
                  ))}
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}

export default Table;

interface IProps {
  data: any[];
  column: ITableColumn<any>[];
  loading?: boolean;
}
