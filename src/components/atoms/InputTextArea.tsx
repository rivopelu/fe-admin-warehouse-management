import { twMerge } from 'tailwind-merge';
import { ChangeEventHandler, FocusEventHandler } from 'react';
import { useFormikContext, FormikErrors, FormikTouched } from 'formik';
import LabelInputField from './LabelInputField.tsx';

export default function InputTextarea(props: IProps) {
  const formik = useFormikContext<any>();

  const errors = formik?.errors as FormikErrors<Record<string, any>>;
  const touched = formik?.touched as FormikTouched<Record<string, any>>;

  const errorMessage = props.errorMessage ?? (errors?.[props.name] && touched?.[props.name] ? errors[props.name] : '');

  return (
    <div className="grid gap-1">
      {props.label && <LabelInputField label={props.label} required={props.required} />}
      <div className={twMerge('relative flex flex-col bg-white')}>
        <textarea
          autoComplete={props.autoComplete}
          onBlur={props.onBlur ?? formik?.handleBlur}
          onChange={props.onChange ?? formik?.handleChange}
          value={props.value ?? formik?.values?.[props.name] ?? ''}
          name={props.name}
          placeholder={props.placeholder || ''}
          rows={props.rows || 3}
          className={twMerge(
            'px-3 py-2 w-full duration-300 bg-white outline-2 outline-gray-300 rounded-md',
            'focus:outline-black/50 focus:bg-primary-main/5',
            errorMessage ? 'outline-red-500 bg-red-100' : '',
          )}
          id={props.id}
        />
      </div>
      {(errorMessage || props.helperText) && (
        <p className={twMerge('text-xs mt-1', errorMessage ? 'text-red-500' : 'text-gray-500')}>
          {errorMessage || props.helperText}
        </p>
      )}
    </div>
  );
}

interface IProps {
  id: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  errorMessage?: any;
  helperText?: string;
  name: string;
  value?: string;
  onBlur?: FocusEventHandler<HTMLTextAreaElement>;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  autoComplete?: string;
  rows?: number;
}
