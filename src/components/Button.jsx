import { func, string } from "prop-types";

const Button = ({ ...props }) => {
  const { type, text, className, onClick, onSubmit } = props;

  return (
    <button type={type || "button"} className={className} onClick={onClick} onSubmit={onSubmit}>
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

