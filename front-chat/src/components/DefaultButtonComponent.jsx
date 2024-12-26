/* eslint-disable react/prop-types */

const DefaultButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {text}
    </button>
  );
};

export default DefaultButton;
