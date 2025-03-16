export default function Checkbox(props: IProps) {
  return (
    <div className="flex cursor-pointer items-center mb-4">
      <input
        id="default-checkbox"
        type="checkbox"
        checked={props?.value || false}
        onChange={(e) => props.onChange && props.onChange(e.target.checked)}
        className="w-4 h-4 cur text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 "
      />
      <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 ">
        {props.label}
      </label>
    </div>
  );
}

interface IProps {
  label?: string;
  onChange?: (e: boolean) => void;
  value?: boolean;
}
