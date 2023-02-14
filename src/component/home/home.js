import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import styles from "./home.module.css";
export default () => {
  return (
    <>
      <div className={`fixed_top ${styles.fixed_top}`}>
        <nav className={` navbar_expandlg  p-2 ${styles.navbar_expandlg}`}>
        <img
              src="	https://smallseotools.com/webimages/yearlogo.svg"
              class={`img-fluid ${styles.logo}`}
              alt="Responsive image"
            />
          <nav className={` d-flex justify-content-around w-100 navbarnavbar-expand navbar-dark${styles.navbar}`}>
            
            <div
              className={`collapse navbar-collapse ${styles.collapse} `}
              id="navbarSupportedContent"
            >
              <a
                className={`nav-link cp pro_pricing_bg d-flex align-items-center justify-content-center
                  ${styles.pro_pricing_bg}`}
                href="https://pro.smallseotools.com/pricing"
                onclick="tool_trigger('navbar price')"
              >
                <img
                  src="https://smallseotools.com/webimages/pricing_icon.svg"
                  alt="PRO Pricing"
                  className={`icon img-fluid mr-2 ${styles.icon}`}
                />
                Pricing
              </a>

              <ul className={`d-flex flex-row navbar-nav ${styles.ul}`}>
                <li
                  className={`nav-item mob-link br-hover br-active ${styles.br_hover}`}
                >
                  <a href="#" className="nav-item active nav-link text-dark">
                    Plagiarisim Checker
                  </a>
                </li>

                <li
                  className={`nav-item mob-link br-hover br-active ${styles.br_hover}`}
                >
                  <a href="#" className="nav-item active nav-link text-dark">
                    Grammer Check
                  </a>
                </li>

                <li
                  className={`nav-item mob-link br-hover br-active ${styles.br_hover}`}
                >
                  <a href="#" className="nav item active nav-link text-dark">
                    Reverse Image Search
                  </a>
                </li>

                <li className="nav-item mdn ">
                  <a
                    class="nav-link fw_600 text-dark"
                    href="https://smallseotools.com/login/"
                  >
                    Login
                  </a>
                </li>

                <div className={`search_position ${styles.search_position}`}>
                  <img
                    src="https://smallseotools.com/webimages/search.svg"
                    alt="Type any word to search for SEO tools"
                    className={`search_img mr-3 ml-2 ${styles.search_img}`}
                    id="desktop_toggle_search"
                    width={20}
                    height={20}
                  />
                  <div className={`desk_search ${styles.desk_search}`}>
                    <div
                      className={`bg-white border1 p-2 bg_202223 ${styles.bg_white}`}
                    >
                      <div className="search_position">
                        <img
                          className={`icon-img ${styles.icon_img}`}
                          src="https://smallseotools.com/webimages/search.svg"
                          alt=""
                          style={{ position: "absolute", top: 16, left: 20 }}
                        />
                        <input
                          type="text"
                          className={`form-control search_inp rounded bg_f6f8fa border1 clr_fff pr-4 pl-5 ${styles.form_control}`}
                          placeholder="Type any word to search for SEO tools"
                        />
                        <span className="cross_icon_desktop clr_fff">×</span>
                      </div>
                      <div
                        className={`search_output bg-white pt-3 px-4 pb-4 row mx-0 fw_600 ${styles.search_output}`}
                      >
                        <div className="row"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`dropdown lang_btn d-inline-flex align-items-center fw_600 bg_fff bg_383b3d p-0" ${styles.lang_btn}`}
                >
                  <button
                    type="button"
                    className={`"btn dropdown-toggle clr_fff p-0 border px-2 h-100"${styles.btn}`}
                    data-toggle="dropdown"
                    id="chev_toggle"
                  >
                    <img
                      class={`${styles.dropimg}`}
                      src="https://smallseotools.com/webimages/global_lang.svg"
                      alt="image of languages"
                    />
                    English
                    <span className="d-inline-block up_chev" id="toggle_it" />
                  </button>
                  <div className="dropdown-menu rounded-0 px-4 lang_drop">
                    <div className={`row ${styles.row}`}>
                      <div className={`col-6 ${styles.col - 6}`}>
                        <a
                          className={`d-flex align-items-center dropdown-item px-0 active_lang ${styles.dropdown_item}`}
                          href="https://smallseotools.com/reverse-image-search/"
                        >
                          <span className="countery-icons rk-en" />
                          English - EN
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/ru/reverse-image-search/"
                        >
                          <span className="countery-icons rk-ru" />
                          русский - RU
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/ja/reverse-image-search/"
                        >
                          <span className="countery-icons rk-ja" />
                          日本語 - JA
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/it/reverse-image-search/"
                        >
                          <span className="countery-icons rk-it" />
                          Italiano - IT
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/fr/reverse-image-search/"
                        >
                          <span className="countery-icons rk-fr" />
                          Français - FR
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/pt/reverse-image-search/"
                        >
                          <span className="countery-icons rk-pt" />
                          Português - PT
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/es/reverse-image-search/"
                        >
                          <span className="countery-icons rk-es" />
                          Español - ES
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/de/reverse-image-search/"
                        >
                          <span className="countery-icons rk-de" />
                          Deutsche - DE
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/zh/reverse-image-search/"
                        >
                          <span className="countery-icons rk-zh" />
                          中文 - ZH
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/cs/reverse-image-search/"
                        >
                          <span className="countery-icons rk-cs" />
                          Czech - CS
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/pl/reverse-image-search/"
                        >
                          <span className="countery-icons rk-pl" />
                          Polish - PL
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/ar/reverse-image-search/"
                        >
                          <span className="countery-icons rk-ar" />
                          عربى - AR
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/ko/reverse-image-search/"
                        >
                          <span className="countery-icons rk-ko" />
                          Korean - KO
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/fi/reverse-image-search/"
                        >
                          <span className="countery-icons rk-fi" />
                          Finnish - FI
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/nl/reverse-image-search/"
                        >
                          <span className="countery-icons rk-nl" />
                          Dutch - NL
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/no/reverse-image-search/"
                        >
                          <span className="countery-icons rk-no" />
                          Norwegian - NO
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/vi/reverse-image-search/"
                        >
                          <span className="countery-icons rk-vi" />
                          Vietnamese - VI
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/sv/reverse-image-search/"
                        >
                          <span className="countery-icons rk-sv" />
                          Swedish - SV
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                      <div className="col-6">
                        <a
                          className="d-flex align-items-center dropdown-item px-0 "
                          href="https://smallseotools.com/tr/reverse-image-search/"
                        >
                          <span className="countery-icons rk-tr" />
                          Türk - TR
                        </a>
                        <div className="dropdown-divider my-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
              <form
                action="#"
                method="post"
                className="form-inline my-2 mylg-0"
              ></form>
            </div>
          </nav>
        </nav>
      </div>
    </>
  );
};
