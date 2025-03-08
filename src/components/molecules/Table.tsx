import { ITableColumn } from '../../types/data/ITableColumn.ts';
import { twMerge } from 'tailwind-merge';

function Table(props: IProps) {
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
        {props.data.map((row, i) => {
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
}
