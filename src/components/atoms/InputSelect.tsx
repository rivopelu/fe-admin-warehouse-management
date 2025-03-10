import { useState, useEffect, useRef } from 'react';
import { MdArrowDropDown, MdClose } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import LabelInputField from './LabelInputField.tsx';
import * as React from 'react';
import { t } from 'i18next';

function InputSelect(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(props.options);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const selectedOption = props.options.find((opt) => opt.value === props.value);
    setInputValue(selectedOption ? selectedOption.label : '');
  }, [props.value, props.options]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFilteredOptions(props.options);
        setInputValue(props.options.find((opt) => opt.value === props.value)?.label || '');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [props.value, props.options]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setInputValue(query);
    setIsOpen(true);
    setFilteredOptions(props.options.filter((opt) => opt.label.toLowerCase().includes(query.toLowerCase())));
  };

  const handleSelect = (option: { label: string; value: any }) => {
    setInputValue(option.label);
    setIsOpen(false);
    props.onChange?.(option.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      setHighlightIndex((prev) => (prev < filteredOptions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      setHighlightIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      handleSelect(filteredOptions[highlightIndex]);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setInputValue('');
    props.onChange?.(null);
  };

  return (
    <div className="flex flex-col w-full relative" ref={dropdownRef}>
      {props.label && <LabelInputField required={props.required} label={props.label} />}

      <div className="relative">
        <input
          type="text"
          className={twMerge(
            'h-[40px] px-3 w-full duration-300 bg-white outline-2 outline-gray-300 rounded-md',
            'focus:outline-black/50 focus:bg-primary-main/5',
            props?.errorMessage ? ' outline-red-500 bg-red-100' : '',
            props?.className,
          )}
          value={inputValue}
          onChange={handleInputChange}
          onClick={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={props?.placeholder || ''}
        />

        {inputValue && (
          <MdClose
            className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
            size={18}
            onClick={handleClear}
          />
        )}

        {/* Dropdown Icon */}
        <MdArrowDropDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
          size={22}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className="absolute top-0 translate-y-18 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-40 overflow-auto">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div
                key={option.value}
                className={twMerge(
                  'px-3 py-2 cursor-pointer transition-all',
                  highlightIndex === index ? 'bg-primary-light/10 text-primary-main' : 'hover:bg-gray-100',
                )}
                onMouseEnter={() => setHighlightIndex(index)}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500 text-center">{t('not_found_result')}</div>
          )}
        </div>
      )}

      {props?.errorMessage && <p className="text-sm text-red-500 mt-1">{props?.errorMessage}</p>}
    </div>
  );
}

export default InputSelect;

interface IProps {
  options: { label: string; value: any }[];
  label?: string;
  errorMessage?: string;
  className?: string;
  onChange?: (value: any) => void;
  value?: any;
  required?: boolean;
  placeholder?: string;
}
