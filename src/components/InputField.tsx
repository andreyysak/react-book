import React, { useState } from "react";

interface Props {
  name: string;
  label: string;
  value: string | number;
  onChange: (newValue: string) => void;
  placeholder?: string;
  required?: boolean;
}

function getRandomDigits() {
  return Math.random().toFixed(16).slice(2);
}

export const InputField: React.FC<Props> = React.memo(({
  name,
  label,
  value,
  onChange,
  placeholder = `Enter ${label}`,
  required = false,
}) => {
  const [id] = useState(() => `${name}-${getRandomDigits()}`);

  return (
    <div className="flex flex-col justify-between gap-1">
      <label id={id} className="pl-6">
        {label}
      </label>

      <input 
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={event => onChange(event.target.value)}
        className="w-72 h-12 rounded-full border-2 border-darkText dark:border-light px-5 bg-light text-darkText dark:bg-darkText dark:text-light placeholder:text-darkText dark:placeholder:text-light" 
      />
    </div>
  );
})
