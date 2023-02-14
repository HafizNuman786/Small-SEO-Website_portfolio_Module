import React from "react"
import styles from './footer.module.css'
export default () => {

  return (
    <>
      <footer classname="text-center text-lg-start bg-white text-muted">
        <section classname={`section ${styles.section}`}>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <a href="https://smallseotools.com/">
                  <img
                    src="https://smallseotools.com/webimages/yearlogo.svg"
                    alt="Image of website logo"
                    className="img-fluid logo_img"
                    width={200}
                    height={31}
                  />
                </a>
                <h3>
                  <p className="fw_800 mt-3 mb-0 text-dark">Languages</p>
                </h3>
                <div className="cus_nav">
                  <div className={`dropdown lang_btn d-inline-flex align-items-center fw_600 bg_fff bg_383b3d ${styles.dropdown}`}>
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
                    <div className="dropdown-menu rounded-0 px-4 lang_drop">
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
                <div className="fw_700 fs22 mt-4 text-dark">
                  <h5>Contact Us</h5>
                </div>
                <div classname="text-dark">support@smallseotools.com</div>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h3 classname="text-dark">Address</h3>
                <p classname="text-dark">438, Streatham High Road</p>
                <p classname="text-dark">London, UK.</p>
                <p classname="text-dark">SW16 3PX</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 text-left">
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Terms of services
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Testimonials
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    About us
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Advertise
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Privacy
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Refund Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Blog
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    FAQs
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className={`text-dark text-decoration-none ${styles.text_decoration_none}`}>
                    Design Studio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container text-center  mt-5">
            <div className="row">
              <div className={`col-md-6 p-2 ${styles.col_md_1}`}>

                <div className={`row cards p-4 mx-0 align-content-center justify-content-center ${styles.cards}`}>
                  <div className="sub_headings text-dark "><h5>You May Like Our Most Popular Tools &amp & Apps</h5></div>

                  <div className="justify-content-center mt-3 mb-4">
                    <a href="" className={`d-inline-flex align-items-center justify-content-center rounded-circle mx-1 ${styles.rounded_circle}`}>
                      <span className={`d-block f_api ${styles.f_api}`}></span>
                    </a>

                    <a href="" className={`d-inline-flex align-items-center justify-content-center rounded-circle mx-1 ${styles.rounded_circle}`}>
                      <span className={`d-block f_api ${styles.apple}`}>

                      </span>
                    </a>

                    <a href="" className={`d-inline-flex align-items-center justify-content-center rounded-circle mx-1 ${styles.rounded_circle}`}>
                      <span className={`d-block f_api ${styles.android}`}></span>
                    </a>

                    <a href="" className={`d-inline-flex align-items-center justify-content-center rounded-circle mx-1 ${styles.rounded_circle}`}>
                      <span className={`d-block f_api ${styles.wordpress}`}></span>
                    </a>
                  </div>

                </div>

              </div>
              <div className={`col-md-6 p-2 ${styles.col_md_2}`}>

                <div className={`row cards p-4 mx-0 align-content-center justify-content-center ${styles.cards}`}>
                  <div className="sub_headings text-dark "><h5>Subscribe to our Newsletter & Stay updated</h5></div>

                  <div className={`input-group mb-1 p-1  ${styles.input_group}`}>
                    <input type="email" name="email" placeholder="Enter your email address" className="form-control rounded-0 border-0 bg_f6f8fa bg_202223 h-100" />

                    <div className={`input-group-append p-2  ${styles.subcribebtn}`}>
                      <button type="submit" className={`btn subs_button text-white rounded-0  ${styles.submit}`}>
                        <img
                          src="https://smallseotools.com/webimages/subscribe_btn.svg"
                          className="img-fluid mr-1 "
                        />
                        Subscribe
                      </button>
                    </div>
                  </div>

                  <div className="social_box mt-1">
                    <a href="" target="_blank" className={`d-inline-block mx-1 sub_facebook ${styles.fb}`}>
                    </a>

                    <a href="" target="_blank" className={`d-inline-block mx-1 sub_facebook ${styles.twiter}`}>
                    </a>

                    <a href="" target="_blank" className={`d-inline-block mx-1 sub_facebook ${styles.linkedin}`}>
                    </a>

                    <a href="" target="_blank" className={`d-inline-block mx-1 sub_facebook ${styles.youtube}`}>
                    </a>
                  </div>

                </div>



              </div>

            </div>
            <div className="row">
              <p className={`text-center m-0 mt-2 w-100 ${styles.copyright}`}>Copyright © 2012-2022 by <a href="" className="text-decoration-none">SmallSEOTools.com</a> All Rights Reserved.</p>
            </div>
          </div>
        </section>
      </footer>

    </>
  )
}