export default function Slider(props: IProps) {
  return (
    <input
      id="small-range"
      type="range"
      min={props.min}
      max={props.max}
      step={props.step}
      value={props.value}
      onChange={(e) => props.onChange && props.onChange(parseInt(e.target.value))}
      className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
    />
  );
}

interface IProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  step: number;
  max: number;
}
