"use client";

import { useEffect, useState } from "react";

interface Props {
  radioButtonOptions: string[];
  handleRadioBtnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  displayResults: string;
}
const RadioButton = ({
  radioButtonOptions,
  handleRadioBtnChange,
  displayResults,
}: Props) => {
  const [checked, setChecked] = useState<any>(undefined);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className='w-full rounded-md flex flex-col justify-between md:flex-row border  overflow-hidden md:m-4 m-1 select-none'>
      <div className='title py-3  px-5 bg-primary text-white text-sm font-normal capitalize'>
        Display results by
      </div>
      {radioButtonOptions.map(item => (
        <label
          key={item}
          className='flex radio p-2 cursor-pointer items-center'
        >
          <input
            className='my-auto transform scale-125'
            type='radio'
            name='displayByName'
            value={item}
            defaultChecked={item === displayResults ? checked : null}
            onChange={handleRadioBtnChange}
          />
          <div className='text-sm px-2'>{item}</div>
        </label>
      ))}
    </div>
  );
};

export default RadioButton;
