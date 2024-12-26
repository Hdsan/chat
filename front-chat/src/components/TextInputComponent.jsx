/* eslint-disable react/prop-types */

const TextInput = ({ placeholder ,value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="input"
      placeholder={placeholder}
    />
  );
};

export default TextInput;
