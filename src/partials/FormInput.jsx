import React from 'react';
import Proptypes from 'prop-types';

const FormInput = ({
  inputType,
  inputId,
  inputName,
  placeholderText,
  ariaLabelName,
}) => (
  <div className="input">
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
  inputType: Proptypes.string.isRequired,
  inputId: Proptypes.string.isRequired,
  inputName: Proptypes.string.isRequired,
  placeholderText: Proptypes.string.isRequired,
  ariaLabelName: Proptypes.string.isRequired,
};
