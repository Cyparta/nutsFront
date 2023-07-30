// import Image from 'next/image';
import React, { useEffect, useState, useRef } from 'react';
// import selectIcon from '../../assets/icons/select-icon.png';
// import { useSelector } from 'react-redux';
// import { RootState } from '@/store/store';
import {BsChevronDown} from 'react-icons/bs';
import '../../style/customSelect.css'

interface CustomSelectProps {
  options: string[];
  defaultValue?: string;
  label?:string;
  handleSelect: any
}

const MainSelect = ({ options, defaultValue, handleSelect, label }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue);
  const selectRef = useRef<HTMLDivElement>(null);

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
        style={{ position: 'absolute', top: '25px',  cursor: 'pointer', right:"20px" }}
        onClick={toggleSelect}
      >
        <BsChevronDown style={{color:"#90B400", fontSize:"20px"}}/>
        {/* <img src={selectIcon} alt="select icon" width="10" height="10" /> */}
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

export default MainSelect;