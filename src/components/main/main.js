import "./main.css";

const Section = () => {
  return (
    <section>
      <ul className="menu__list">
        <li className="menu__item active">
          <a className="menu__link buyurtma" href="#">Buyurtmalar</a>
        </li>
        <li className="menu__item">
          <a className="menu__link mijoz" href="#">Mijozlar</a>
        </li>
        <li className="menu__item">
          <a className="menu__link mahsulot" href="#">Mahsulotlar</a>
        </li>
        <li className="menu__item">
          <a className="menu__link taklif" href="#">Takliflar</a>
        </li>
        <li className="menu__item">
          <a className="menu__link sozlama" href="#">Sozlamalar</a>
        </li>
      </ul>
    </section>
  );
}

export default Section;