import './Sidebar.css';

const Sidebar = () => {
  return (
    <section className="sidebar">
      <nav className="sidebar__menu menu" aria-label="Sidebar navigation">
        <ul className="menu__list">
          <li className="menu__item menu__item--active">
            <a className="menu__link menu__link--orders" href="#">Buyurtmalar</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--clients" href="#">Mijozlar</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--products" href="#">Mahsulotlar</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--offers" href="#">Takliflar</a>
          </li>
          <li className="menu__item">
            <a className="menu__link menu__link--settings" href="#">Sozlamalar</a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Sidebar;