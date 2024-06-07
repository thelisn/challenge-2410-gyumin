import { bool, func, string } from "prop-types";
import debounce from "@/utils/debounce";

const Input = ({ onChange, ...props }) => {
  const { label, type, id, role, placeholder, hiddenLabel, className } = props;

  return (
    <>
      <label htmlFor={id} className={`${!hiddenLabel || "sr-only"} mx-2 font-semibold`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        role={role}
        placeholder={placeholder}
        onChange={debounce(onChange)}
        className={className}
      />
    </>
  );
};

export default Input;

Input.propTypes = {
  label: string,
  type: string,
  id: string,
  role: string,
  placeholder: string,
  hiddenLabel: bool,
  className: string,
  onChange: func,
};
