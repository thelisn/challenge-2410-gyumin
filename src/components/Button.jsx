import { func, string } from "prop-types";

const Button = ({ ...children }) => {
  const { text, onClick, className, onSubmit, type } = children;

  return (
    <button type={type || "button"} className={`px-4 text-lg rounded-md border border-gray-400 py-1 ${className}`} onClick={onClick} onSubmit={onSubmit}>
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
