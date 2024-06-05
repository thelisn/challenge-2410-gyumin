import { func, string } from "prop-types";

const Button = ({ text, onClick, className }) => {
  return (
    <button type="button" className={`px-4 text-lg rounded-md border border-gray-400 py-1 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: string,
  onClick: func,
  className: string,
};
