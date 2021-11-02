import './Input.css';

function Input({ className, dataLabel, children, ...props }) {
  return (
    <label className={'input ' + (className || '')}>
      <span className="input__label" hidden={!dataLabel}>{dataLabel}</span>
      <input className="input__field" type="text" {...props} />
      {children}
    </label>
  );
}

export default Input;