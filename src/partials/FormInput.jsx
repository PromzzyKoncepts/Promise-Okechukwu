import React from 'react';
import Proptypes from 'prop-types';

const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => (
  <div className="input">
    <label
      className=""
      htmlFor={labelFor}
    >
      {inputLabel}
    </label>
    <input
      className="input"
      type={inputType}
      id={inputId}
      name={inputName}
      placeholder={placeholderText}
      aria-label={ariaLabelName}
      required
    />
  </div>
);

export default FormInput;
FormInput.propTypes = {
  inputLabel: Proptypes.string.isRequired,
  labelFor: Proptypes.string.isRequired,
  inputType: Proptypes.string.isRequired,
  inputId: Proptypes.string.isRequired,
  inputName: Proptypes.string.isRequired,
  placeholderText: Proptypes.string.isRequired,
  ariaLabelName: Proptypes.string.isRequired,
};
