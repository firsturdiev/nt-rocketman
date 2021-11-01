import './Login.css';
import Logo from '../assets/img/logo.svg';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

function Login() {
  return (
    <main className="site-content">
      <a className="logo" href="/">
        <img src={Logo} width="75" height="86" alt="Logo of the RocketMan" />
      </a>

      <form className="login-form" action="https://echo.htmlacademy.ru" method="POST">
        <fieldset className="login-form__inner">
          <legend className="login-form__heading">Kirish</legend>
          <Input className="login-form__input--login input--icon input--icon--user" placeholder="Login" name="username" minLength="5" required />
          <Input className="login-form__input--password input--icon input--icon--lock" placeholder="Parol" type="password" name="password" minLength="8" required />
          <Button className="login-form__btn btn--block" type="submit">Kirish</Button>
        </fieldset>
      </form>
    </main>
  )
}

export default Login;