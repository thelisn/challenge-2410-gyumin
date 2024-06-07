import { func, string } from "prop-types";

const Button = ({ ...props }) => {
  const { type, text, className, onClick, onSubmit } = props;

  return (
    <button type={type || "button"} className={`px-4 text-lg rounded-md border border-gray-400 py-1 ${className}`} onClick={onClick} onSubmit={onSubmit}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: string,
  text: string,
  className: string,
  onClick: func,
  onSubmit: func,
};

