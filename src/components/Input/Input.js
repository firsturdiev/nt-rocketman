import './Input.css';

function Input({ className, dataLabel, ...props }) {
  return (
    <label className={'input ' + (className || '')}>
      <span className="input__label" hidden={!dataLabel}>{dataLabel}</span>
      <input className="input__field" type="text" {...props} />
    </label>
  );
}

export default Input;