import './FormInput.scss';

interface Props {
  label?: string;
  htmlFor?: string;
  inputOptions: {
    id: string;
    name: string;
    type: string;
    value: string;
    required: boolean;
    onChange: React.FormEventHandler<HTMLInputElement>;
  };
}

const FormInput = ({ label, htmlFor, inputOptions }: Props) => {
  return (
    <div className="group">
      <input className="form-input" {...inputOptions} />
      <label
        className={`${
          inputOptions.value.length ? 'shrink' : ''
        } form-input-label`}
        htmlFor={htmlFor}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
