import "./Button.css";

function Button({ className, children, ...props }) {
  return (
    <button className={"btn " + (className || '')} type="button" {...props}>{children}</button>
  )
}

export default Button;