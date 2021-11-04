import "./offer.css"

function Offer(){
  return(
    <ul className="offer">
      <h2 className="offer__title">Taklif va shikoyatlar</h2>

      <li className="offer__item">
        <span className="span span__number">22</span>

        <div className="offer-item__info">
          <h2 className="offer-item__info-name">Bobur Mavlonov</h2>

          <span className="offer-item__info-date">01/01/2021</span>
        </div>

        <p className="offer-item__text">
        Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit. Purus ornare mattis tincidunt tellus mauris malesuada facilisi urna. Libero, feugiat volutpat diam nullam duis dui sed pulvinar. Nunc duis facilisis fringilla etiam. Lorem dignissim molestie volutpat in dolor arcu. In vitae fusce dignissim sodales.
        </p>

        <div className="offer-item__buttons">
          <button className="offer-item__reply-button">reply</button>
          <button className="offer-item__delete-button">delete</button>
        </div>
      </li>

      <li className="offer__item">
        <span className="span span__number">22</span>

        <div className="offer-item__info">
          <h2 className="offer-item__info-name">Devon Lane</h2>

          <span className="offer-item__info-date">01/01/2021</span>
        </div>

        <p className="offer-item__text">
        Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit. Purus ornare mattis tincidunt tellus mauris malesuada facilisi urna.        </p>

        <div className="offer-item__buttons">
          <button className="offer-item__reply-button">reply</button>
          <button className="offer-item__delete-button">delete</button>
        </div>
      </li>

      <li className="offer__item">
        <span className="span span__number">22</span>

        <div className="offer-item__info">
          <h2 className="offer-item__info-name">Darrell Steward</h2>

          <span className="offer-item__info-date">01/01/2021</span>
        </div>

        <p className="offer-item__text">
        Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit.
        </p>

        <div className="offer-item__buttons">
          <button className="offer-item__reply-button">reply</button>
          <button className="offer-item__delete-button">delete</button>
        </div>
      </li>

      <li className="offer__item">
        <span className="span span__number">22</span>

        <div className="offer-item__info">
          <h2 className="offer-item__info-name">Albert Flores</h2>

          <span className="offer-item__info-date">01/01/2021</span>
        </div>

        <p className="offer-item__text">
        Tinchmi, usta
        </p>

        <div className="offer-item__buttons">
          <button className="offer-item__reply-button">reply</button>
          <button className="offer-item__delete-button">delete</button>
        </div>
      </li>

      <li className="offer__item">
        <span className="span span__number">22</span>

        <div className="offer-item__info">
          <h2 className="offer-item__info-name">Devon Lane</h2>

          <span className="offer-item__info-date">01/01/2021</span>
        </div>

        <p className="offer-item__text">
        Imperdiet arcu auctor ac quis at adipiscing odio morbi blandit. Purus ornare mattis tincidunt tellus mauris malesuada facilisi urna.
        </p>

        <div className="offer-item__buttons">
          <button className="offer-item__reply-button">reply</button>
          <button className="offer-item__delete-button">delete</button>
        </div>
      </li>
    </ul>
  );
}

export default Offer;