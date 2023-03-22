import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-infor">
        <div className="hotline">Hệ thống Showroom | Mua hàng: 0931733469</div>

        <div className="account">Tài khoản | Giỏ hàng</div>
      </div>
      <div className="header-nav">
        <img
          src="https://raw.githubusercontent.com/ducnguyenhn128/html/duc/Project/logo1.png"
          alt="#"
        />
      </div>
    </div>
  );
};

export default Header;
