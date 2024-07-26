import React, { useRef, useState, useEffect } from 'react';

export const PinInput = ({ style, ...otherProps }) => {
  const inputRefs = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const getInputStyle = () => {
    let baseStyle = {
      width: '45px',
      height: '45px',
      borderRadius: '10px',
      border: '2px solid #AAA',
      margin: '0 15px',
      textAlign: 'center',
      fontSize: '1.2em'
    };

    if (windowWidth <= 600) {
      return {
        ...baseStyle,
        width: '45px',
        height: '45px',
        margin: '0 10px',
      };
    } else if (windowWidth <= 768) {
      return {
        ...baseStyle,
        width: '50px',
        height: '50px',
        margin: '0 13px',
      };
    }

    return baseStyle;
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
          style={getInputStyle()}
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