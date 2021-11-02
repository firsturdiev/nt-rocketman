import './Switch.css';

function Switch({className, ...props}) {
  return (
    <label class="switch">
      <input className={"switch__field visually-hidden " + (className || '')} {...props} type="checkbox" />
      <span class="switch__round" />
    </label>
  )
}

export default Switch;