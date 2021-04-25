import React from 'react';

import './index.less';

export const TextArea = ({
  name = 'textarea',
  className,
  defaultValue,
  placeholder,
  onChange = (name, value) => console.log(name, value),
}) => {
  const textareaRef = React.useRef();

  String.prototype.lines = function () {
    return this.split(/\r*\n/);
  };
  String.prototype.lineCount = function () {
    return this.lines().length;
  };

  const handleInputChange = target => {
    const { name, value = '' } = target;
    onTextareaNewLine(value);
    console.log();
  };

  const onTextareaNewLine = (value = '') => {
    const nlines = value.lineCount();
    if (nlines <= 10) {
      textareaRef.current.style.height = `${nlines + 5}rem`;
    }
  };

  return (
    <textarea
      ref={textareaRef}
      defaultValue={defaultValue}
      className={`textarea card-bg ${className}`}
      onChange={({ target }) => handleInputChange(target)}
      name={name}
      style={{ height: '5rem', fontSize: '1.2rem', resize: 'none' }}
      placeholder={placeholder}
    ></textarea>
  );
};
