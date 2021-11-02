import "./header.css";
import logo from"../../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo-link" href="#">
        <img className="header__logo-img" src={logo} alt="logo" />
      </a>
      {/* <Input /> */}
      <label className="header__search-lable">
        <input className="header__search-input" type="search" name="search" placeholder="Search" />
      </label>
      <a className="header__user-link" href="#">John Doe</a>
    </header>
  );
}

export default Header;