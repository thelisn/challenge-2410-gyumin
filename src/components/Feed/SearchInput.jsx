import { func, object } from "prop-types";

const SearchInput = ({ config, onChange, ...children }) => {
  const { label, type, id, placeholder } = config;
  const { hiddenLabel } = children;
  
  return (
    <>
      <label htmlFor={id} className={`${!hiddenLabel || "sr-only"} mx-2`}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} role="searchbox" onChange={onChange} className="border-2 border-gray-300 rounded-md p-2 w-full" />
    </>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  config: object,
  onChange: func,
};
