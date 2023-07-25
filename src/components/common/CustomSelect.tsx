// import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
// import selectIcon from '../../assets/icons/select-icon.png';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';

interface CustomSelectProps {
  options: string[];
  defaultValue?: string;
  handleSelect: any
}

const CustomSelect = ({ options, defaultValue, handleSelect }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const selectRef = useRef<HTMLDivElement>(null);

//   const lang = useSelector((state: RootState) => state.lang.value.lang)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    handleSelect(option)
    setIsOpen(false);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={`custom-select ${isOpen ? 'open' : ''}`} ref={selectRef} style={{ position: 'relative' }}>
      <div className="selected-option" onClick={toggleSelect}>
        {selectedOption || defaultValue}
      </div>
      <span
        style={{ position: 'absolute', top: '8px',  cursor: 'pointer' }}
        onClick={toggleSelect}
      >
        {/* <img src={selectIcon} alt="select icon" width="10" height="10" /> */}
        sss
      </span>
      {isOpen && (
        <ul className="options">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;