import React from "react";
import "./Card.scss";
import logoWhite from "../../assets/logo_white.png";
import { Link } from "react-router-dom";

function Card({ item }: any) {
  console.log(item);

  return (
    <Link to="/mockUpProject">
      <div className="cards__container__element">
        <div className="cards__container__element__header">
          <img src={logoWhite} className="cards__container__element__header__img" />
          <h3 className="cards__container__element__header__title">{item.title}</h3>
        </div>

        <div className="cards__container__element__content">
          <p className="cards__container__element__content__pitch">{item.pitch}</p>
          <p className="cards__container__element__content__coin">{item.coin}</p>
          <p className="cards__container__element__content__fundRaise">
            <span className="cards__container__element__content__fundRaise__span">Fundraise Goal:</span>
            {item.fundRaise}
          </p>
          <p className="cards__container__element__content__allocation">
            <span className="cards__container__element__content__allocation__span">Max Allocation:</span>
            {item.maxAllocation}
          </p>
        </div>
        <Link to="/mockUpProject">
          <button className="cards__container__element__btn">Tokken Sale</button>
        </Link>
      </div>
    </Link>
  );
}

export default Card;
