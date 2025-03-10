import { FocusEventHandler, useEffect, useState } from 'react';
import Select from 'react-select';
import { twMerge } from 'tailwind-merge';
import LabelInputField from './LabelInputField.tsx';
import { FormikErrors, FormikTouched, useFormikContext } from 'formik';
import { ILabelValue } from '../../types/data/ILabelValue.ts';

function InputSelect(props: IProps) {
  const formik = useFormikContext<any>();

  const errors = formik?.errors as FormikErrors<Record<string, any>>;
  const touched = formik?.touched as FormikTouched<Record<string, any>>;

  const errorMessage: any =
    props.errorMessage ?? (errors?.[props.name] && touched?.[props.name] ? errors[props.name] : '');

  const [selectedOption, setSelectedOption] = useState<ILabelValue<any> | undefined>(undefined);

  useEffect(() => {
    if (!props.options) return;
    else if (formik.values[props.name]) {
      const selected = props.options.find((opt) => opt.value === formik.values[props.name]) || [];
      setSelectedOption(selected as ILabelValue<any>);
    }
  }, [formik.values, props.options]);

  const handleChange = (option: ILabelValue<any>) => {
    setSelectedOption(option);
    props.onChange?.(option ? option.value : undefined);
    if (formik) {
      formik.setFieldValue(props.name, option ? option.value : null).then();
    }
  };

  return (
    <div className="flex flex-col w-full relative">
      {props.label && <LabelInputField required={props.required} label={props.label} />}
      <div className="relative">
        <Select
          isDisabled={props.disabled}
          className={twMerge('w-full', errorMessage ? 'border-red-500' : '', props?.className)}
          onChange={(e) => handleChange(e as ILabelValue<any>)}
          options={props.options}
          placeholder={props.placeholder || ''}
          isClearable
          onBlur={props.onBlur ?? (() => formik?.setFieldTouched(props.name, true))}
          value={selectedOption}
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderRadius: '0.375rem',
              borderColor: state.isFocused ? '#00000080' : '#D1D5DB',
              boxShadow: state.isFocused ? '0 0 0 2px rgba(0,0,0,0.2)' : 'none',
              '&:hover': { borderColor: '#00000080' },
              backgroundColor: state.isDisabled ? '#F3F4F6' : 'white',
            }),
            menu: (provided) => ({
              ...provided,
              zIndex: 10,
            }),
          }}
        />
      </div>
      {errorMessage && (
        <p className={twMerge('text-xs mt-1', errorMessage ? 'text-red-500' : 'text-gray-500')}>{errorMessage}</p>
      )}
    </div>
  );
}

export default InputSelect;

interface IProps {
  options: ILabelValue<any>[];
  label?: string;
  errorMessage?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: (e: ILabelValue<any>) => void;
}
