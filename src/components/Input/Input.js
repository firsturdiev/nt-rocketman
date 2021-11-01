import './Input.css';

function Input({ className, placeholder }) {
  return (
    <label className={'input ' + (className || '')}>
      <span className="input__label">Name</span>
      <input className="input__field" placeholder={placeholder} />
    </label>
  );
}

export default Input;