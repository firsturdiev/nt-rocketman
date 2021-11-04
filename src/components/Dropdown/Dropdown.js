import { useRef } from "react";
import Button from "../Button/Button";
import "./Dropdown.css";

function Dropdown({className, userName, ...props}) {
  const logoutRef = useRef();

  const handleClickLogOut = (evt) => {
    logoutRef.current.classList.remove('btn-logout');
  } 

  return (
    <div className={'dropdown ' + (className || '')} type="button">
      <Button onClick={handleClickLogOut} className="profile-modal__btn">
        <span className="profile-modal__btn-user">
          {userName}
        </span>
      </Button>
      <Button ref={logoutRef} className="btn btn--logout btn-logout">
        <span className="btn--logout__user">
          Log Out
        </span>
      </Button>
    </div>
  )
}


export default Dropdown;