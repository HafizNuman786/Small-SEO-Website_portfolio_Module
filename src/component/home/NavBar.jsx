/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import style from "./Nav.module.css";
const NavBar = () => {
  let [showinput, setShowInput] = useState(false);
  let [showNav, setShowNav] = useState(false);

  const showSearch = () => {
    setShowInput((current) => !current);
  };

  const showNavBar = () => {
    setShowNav((current) => !current);
  };
  
  return (
    <div className="border">
      <nav className={`d-flex align-items-center  ${style.nav}  bg-white`}>
        <div>
          <img src="https://smallseotools.com/webimages/yearlogo.svg" alt="" />
        </div>
        <div>
          <button onClick={showNavBar} className={`${style.hamburger}`}>
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            className={
              showNav
                ? `${style.shownav} align-items-center mt-1 ${style.ul}`
                : `align-items-center ${style.ul}`
            }
          >
            <li className={`${style.pricing} ${style.b_hover} px-3 py-2`}>
              {" "}
              <img
                src="https://smallseotools.com/webimages/pricing_icon.svg"
                alt=""
              />{" "}
              <a className="text-decoration-none text-white" href="#">
                Pricing
              </a>
            </li>
            <li className={`${style.br_hover} p-2`}>
              <a className="text-decoration-none text-dark" href="#">
                {" "}
                Plagiaris Checker
              </a>
            </li>
            <li className={`${style.br_hover} p-2`}>
              <a className="text-decoration-none text-dark" href="#">
                {" "}
                Plagiaris Checker
              </a>
            </li>
            <li className={`${style.br_hover} p-2`}>
              <a className="text-decoration-none text-dark" href="#">
                Grammmer Checker
              </a>{" "}
            </li>
            <li className={`${style.br_hover} p-2`}>
              <a className="text-decoration-none text-dark" href="#">
                Reverse Image Search
              </a>{" "}
            </li>
            <li className="p-2">
              <a className=" text-decoration-none text-dark" href="#">
                Login
              </a>
            </li>
            <li className={`position-relative`}>
              <a href="#" onClick={showSearch}>
                <img
                className="p-2"
                  src="https://smallseotools.com/webimages/search.svg"
                  alt=""
                />
              </a>
              <div
                className={
                  showinput
                    ? `d-block position-absolute ${style.search}`
                    : `d-none position-absolute ${style.search}`
                }
              >
                <img
                  src="https://smallseotools.com/webimages/search.svg"
                  alt=""
                />
                <input
                  placeholder="Type any word to search for SEO tools"
                  type="text"
                />
              </div>
            </li>
            <li className={`${style.language} px-3 py-2`}>
                
            <div className="cus_nav">
                  <div className={`dropdown lang_btn d-inline-flex align-items-center fw_600  ${style.dropdown}`}>
                    <button
                      type="button"
                      className="btn dropdown-toggle clr_fff p-0 px-2 h-100 "
                      data-toggle="dropdown"
                      id="chev_toggle"
                    >
                      <img
                        className="p-1"
                        src="https://smallseotools.com/webimages/global_lang.svg"
                        alt="image of languages"
                      />
                      English
                      <span className="d-inline-block up_chev" id="toggle_it" />
                    </button>
                    <div  className="dropdown-menu rounded-0 px-4 lang_drop">
                      <div className="row">
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 active_lang"
                            href="https://smallseotools.com/"
                          >
                            <span className="countery-icons rk-en" />
                            English - EN
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/ru/"
                          >
                            <span className="countery-icons rk-ru" />
                            русский - RU
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/es/"
                          >
                            <span className="countery-icons rk-es" />
                            Español - ES
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/ja/"
                          >
                            <span className="countery-icons rk-ja" />
                            日本語 - JA
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/it/"
                          >
                            <span className="countery-icons rk-it" />
                            Italiano - IT
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/fr/"
                          >
                            <span className="countery-icons rk-fr" />
                            Français - FR
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/pt/"
                          >
                            <span className="countery-icons rk-pt" />
                            Português - PT
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/de/"
                          >
                            <span className="countery-icons rk-de" />
                            Deutsche - DE
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                        <div className="col-6">
                          <a
                            className="d-flex align-items-center dropdown-item px-0 "
                            href="https://smallseotools.com/zh/"
                          >
                            <span className="countery-icons rk-zh" />
                            中文 - ZH
                          </a>
                          <div className="dropdown-divider my-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`container ${style.shotiSearch}`}>
        <div className={`col-md-8 ${style.inputdiv} p-3`}>
          <input
            className={`${style.mainInput}`}
            type="text"
            placeholder="Type any word to search for SEO tools"
          />
          <button className={`bg-primary border-0 `}>
            <img src="https://smallseotools.com/webimages/search.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
