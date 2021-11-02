import "./button.css"
function Button({classname, content}) {
  return (

    <>
      <button className={classname} type="button">{content}</button>
      {/* <button className="btn btn-primary" type="button">Kirish</button>
      <button className="btn btn-edit" type="button"></button>
      <button className="btn btn-exit" type="button"></button>
      <button className="btn btn-delete" type="button"></button>
      <button className="btn btn-reply" type="button"></button>
      <button className="btn btn-more" type="button"></button>
      <button className="btn btn-add" type="button">Qo'shish</button>
      <button className="btn btn-copy-link" type="button">Copy address link</button>
      <button className="btn btn-log-out" type="button">Log Out</button> */}
    </>
  );
}

export default Button;