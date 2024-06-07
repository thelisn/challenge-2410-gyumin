import { string } from "prop-types";

const Textarea = ({ ...props }) => {
  const { label, id, placeholder, className } = props;

  return (
    <>
      <label htmlFor={id} className={`mx-2 font-semibold`}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        role="input"
        className={`h-[200px] border-2 border-gray-300 rounded-md p-2 w-full ${className}`}
      />
    </>
  );
};

export default Textarea;

Textarea.propTypes = {
  label: string,
  id: string,
  placeholder: string,
  className: string,
};
