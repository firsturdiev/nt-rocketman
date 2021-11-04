import './confirm.css';


function Confirm({}) {
  return (
    <div className="confirm">
      <div className="confirm__content">
        <p className="confirm__txt">Haqiqatdan ham o’chirmoqchimisiz?</p>
        <div className="btns-wrapper">
          <button className="confirm__btn">YO'Q</button>
          <button className="confirm__btn">HA</button>
        </div>
      </div>
    </div>

  );
}

export default Confirm;