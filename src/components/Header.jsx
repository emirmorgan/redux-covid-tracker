import React from "react";

function Header() {
  return (
    <div className="d-flex flex-column align-items-center gap-1 mt-3">
      <img
        src="https://github.com/aemirdnr/redux-covid-tracker/blob/master/img/covid.png?raw=true"
        alt="Covid19 Image"
        style={{ width: "370px" }}
      />
      <b>Global and Country Wise Cases of Corona Virus</b>
      <span>(For a Particular country, select a Country from below)</span>
    </div>
  );
}

export default React.memo(Header);
