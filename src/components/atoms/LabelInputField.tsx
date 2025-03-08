function LabelInputField(props: IProps) {
  return (
    <label className="mb-1 text-sm font-medium text-gray-700">
      {props.label}
      {props.required && <span className={'text-red-700'}> *</span>}
    </label>
  );
}

export default LabelInputField;

interface IProps {
  required?: boolean;
  label: string;
}
