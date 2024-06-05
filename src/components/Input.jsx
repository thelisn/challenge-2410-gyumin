import { func, object } from "prop-types";

const Input = ({ onChange, ...children }) => {
  const { label, type, id, role, placeholder, hiddenLabel, className } = children;

  return (
    <>
      <label htmlFor={id} className={`${!hiddenLabel || "sr-only"} mx-2 font-semibold`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        role={role}
        onChange={onChange}
        className={`border-2 border-gray-300 rounded-md p-2 w-full ${className}`}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  config: object,
  onChange: func,
};
