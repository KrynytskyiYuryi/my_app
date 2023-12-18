import React from "react";
import cl from "./MySelect.module.css";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <div>
      <select
        className={cl.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
