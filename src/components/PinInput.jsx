import React, { useRef } from 'react';

export const PinInput = ({ style, ...otherProps }) => {
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    if (e.target.value.length >= 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const inputStyle = {
    width: '45px',
    height: '45px',
    borderRadius: '10px',
    border: '2px solid #AAA',
    margin: '0 15px',
    textAlign: 'center',
    fontSize: '1.2em'
  };

  const inputsStyle = {
    width: '100%',
    textAlign: 'center',
    marginBottom: '20px',
    ...style
  };

  return (
    <div style={inputsStyle} {...otherProps}>
      {[...Array(6)].map((_, i) => (
        <input
          key={i}
          type="text"
          style={inputStyle}
          maxLength="1"
          inputMode="numeric"
          ref={el => inputRefs.current[i] = el}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
        />
      ))}
    </div>
  );
};
