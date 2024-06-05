import { func, object } from "prop-types";

const SearchBox = ({ config, onChange }) => {
  const { label, type, id, placeholder } = config;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} role="searchbox" onChange={onChange} />
    </div>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  config: object,
  onChange: func,
};
