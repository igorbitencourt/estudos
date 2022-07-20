import React from "react";

const Radio = ({ pergunta, options, onChange, value, id, active }) => {
  if (active === false) return null;

  return (
    <fieldset>
      <legend>{pergunta}</legend>
      {options.map((option) => (
        <label key={option} style={{ fontFamily: "monospace" }}>
          {option}
          <input
            type="radio"
            value={option}
            id={id}
            checked={value === option}
            onChange={onChange}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
