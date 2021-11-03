import Logo from "../../assets/img/logo-captioned.svg";
import Input from '../Input/Input';
import Button from '../Button/Button';
import ProfileModal from "../ProfileModal/ProfileModal";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <a className="logo" href="./">
        <img src={Logo} width="168" height="33" alt="Logo of the Rocketman" />
      </a>

      <div className="site-header__inner">
        <form className="search-form" action="https://echo.htmlacademy.ru" method="GET">
          <Input className="search-form__input" placeholder="Mijozni qidiring" name="search" required>
            <Button className="search-form__btn" type="submit" aria-label="Search for users"></Button>
          </Input>
        </form>
        
        <ProfileModal className="site-header__profile-modal" userName="John Doe" />
      </div>
    </header>
  );
}

export default Header;