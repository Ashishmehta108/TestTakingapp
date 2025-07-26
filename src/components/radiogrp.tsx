import React, { useState } from "react";
import { Check } from "lucide-react";

interface RadioGroupProps {
  name: string;
  options?: string[];
  defaultValue?: string;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioGroup({
  name,
  options = [],
  defaultValue,
  onChange,
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(event as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      {options.map(
        (option, index) => (
          console.log(option),
          (
            <label
              key={index}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="relative flex items-center ">
                <input
                  type="radio"
                  name={name}
                  value={option}
                  checked={selectedValue === option}
                  onChange={handleChange}
                  className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out border-2 border-gray-300 focus:ring-blue-500 focus:ring-2 appearance-none rounded-full"
                />
                {selectedValue === option && (
                  <Check className="h-3 w-3 text-blue-600 dark:text-blue-500 absolute top-1 left-1" />
                )}
              </div>
              <span className="text-gray-700 dark:text-neutral-300">{option}</span>
            </label>
          )
        )
      )}
    </div>
  );
}
