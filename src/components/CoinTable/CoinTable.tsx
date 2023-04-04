import React from "react";
import tableData from "../../api/mockup-table";
import loupe from "../../assets/loupe_icon.png";
import "./CoinTable.scss";
import { useNavigate } from "react-router-dom";

function CoinTable() {
  const navigate = useNavigate();
  return (
    <div className="table__container">
      <div className="table__container__search">
        <a
          href="#"
          className="table__container__search__link"
          onClick={() => {
            navigate("/projects");
          }}
        >
          view all
        </a>
        <div className="table__container__search__bar">
          <img className="table__container__search__bar__icon" src={loupe} alt="loupe_icon" />
          <input className="table__container__search__bar__input" placeholder="search" type="text" />
        </div>
      </div>

      <table className="table__container__table">
        <tr className="table__container__table__row">
          <th className="table__container__table__row__head">Projects</th>
          <th className="table__container__table__row__head">SHO Total Raise </th>
          <th className="table__container__table__row__head">All Time High</th>
          <th className="table__container__table__row__head">Lead</th>
          <th className="table__container__table__row__head">Marketmakers</th>
          <th className="table__container__table__row__head">Type</th>
        </tr>
        {tableData.map((coin) => (
          <tr className="table__container__table__rowdata">
            <td className="table__container__table__rowdata__name">
              <div className="table__container__table__rowdata__name__photo">{coin.initialCoin}</div>
              <div className="table__container__table__rowdata__name__element">
                <p className="table__container__table__rowdata__name__element__text">{coin.projectName}</p>
                <span className="table__container__table__rowdata__name__element__coin">{coin.projectCoin}</span>
              </div>
            </td>
            <td className="table__container__table__rowdata__data">{coin.SHO} $</td>
            <td className="table__container__table__rowdata__data">{coin.allTimeHigh}</td>
            <td className="table__container__table__rowdata__data">{coin.lead}</td>
            <td className="table__container__table__rowdata__data">{coin.marketMakers}</td>
            <td className="table__container__table__rowdata__data">{coin.type}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default CoinTable;
