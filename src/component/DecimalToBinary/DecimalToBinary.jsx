import React from "react";
import styles from "./DecimalToBinary.module.css";
import { useState } from "react";
export default () => {
  let [showResul, setShowResult] = useState(false);

  const showResult = () => {
    setShowResult((current) => !current);
  };
  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={`row  ${styles.section1}`}>
          <div className="col-md-8 border-top border-start border-end bg-white  p-0 mt-3 ">
            <div className="text-center border-bottom p-3">
              <h4>Decimal To Binary</h4>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your each decimal numbers with space:
                <button
                  className={`btn btn-primary position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 mt-3 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your Decimal Here"
                    row="100"
                    col="100"
                    className={`form-control fs-2 m-0 border-0 ${styles.placeholder}`}
                  />
                </div>

                <div
                  className={`d-flex justify-content-between w-100 ${styles.upload_option}`}
                >
                  <div>
                    <label
                      className={`${styles.labelapload} d-flex justify-content-around text-white align-items-center`}
                      for="fileUpload"
                    >
                      <input
                        className={`${styles.inputaploadFile}`}
                        accept=".txt,.doc,.docx"
                        name="uploadfile"
                        type="file"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-paperclip"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                      </svg>
                      <span className={`text-white${styles.uploadfile}`}>
                        UploadFile
                      </span>
                    </label>
                  </div>
                  <div>
                    <img
                      src="https://smallseotools.com/webimages/clear_txt.svg"
                      onclick="clear_elements({'v':{'textarea':'','fileUpload':''},'t':{'file_upload_status':'Upload File'}},this,'Cleared!')"
                      data-name="Clear?"
                      data-toggle="tooltip"
                      title=""
                      alt="image of clear text"
                      className="img-fluid"
                      data-original-title="Clear?"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`row`}>
          <div
            className={`col-md-8 bg-white border-start border-end  border-bottom`}
          >
            <div className={`d-flex my-4 justify-content-center`}>
              <button
                onClick={showResult}
                className={`text-white d-flex fw-bold justify-content-center border-0 p-3 ${styles.button}`}
              >
                Convert To Binary
              </button>
            </div>
          </div>
        </div>
        <div
          className={
            showResul ? `row  ${styles.result}` : ` row d-none ${styles.result}`
          }
        >
          <div className={`col-md-8 text-center mt-3 fw-bolder fs-4`}>
            Result
          </div>
          <div
            className={`col-md-8 bg-white border-top border-start border-end  border-bottom p-0 mt-3 mh-75`}
          >
            <div className={` m-3 ${styles.area_Result}`}></div>
          </div>

          <div className=" col-md-8 bg-white p-2 border-start border-end  border-bottom share_options_btns d-flex justify-content-center">
            <div className={` p-1 m-2 ${styles.download}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>

            <div className={` p-1 m-2 ${styles.copy}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-copy"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </div>

            {/* </div> */}
          </div>
        </div>
        <div className={`row `}>
          <div
            className={`col-md-8 border-top border-start border-end border-bottom bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>Decimal And Binary Numbering Systems</h2>
              <p>
                The decimal or “denary” binary counting system makes use of base
                ten numbers which is from 0 to 9. It is the most commonly known
                numbering system. In this system, every digit has a position and
                also a decimal point. The binary system, however, uses numbers
                in base two which is from 0 to 1. This system is, in fact, the
                simplest system because it only uses two digits which are 0 and
                1. As a result, there is usually a need to convert the decimal
                code to binary, especially for experts in computer programming
                or such related engineering specialists.
              </p>
              <h2>Decimal To Binary Calculator Because Manual Is Boring</h2>
              <p>
                Converting decimal number to binary is popularly done by
                dividing the digit by 2 and writing out the remainder aside.
                After which the result/quotient is divided repeatedly by 2 until
                the quotient gets to zero. Reversing all the arranged remainders
                is what gives the binary equivalent. However, the process of
                this calculation can seem too long or stressful, particularly if
                you do not have so much time. Therefore, it becomes necessary to
                know how to convert decimal fractions to binary easily and
                quickly. Also, decimal to signed binary conversions needs to be
                accurate, particularly when there are long integer and remainder
                values.
              </p>
              <h2>Online Decimal To Binary Converter</h2>
              <p>
                In such a case, you would need to use a decimal to the binary
                calculator in converting the decimal code to binary online. When
                you search the internet, you would definitely find a lot of
                online conversion tools. However, not all of these services you
                accurately and easily. Basically, all you need to do is put in
                your decimal integer, click on convert to binary, and you get
                your answer in the binary system. Going through the
                <strong>
                  <a
                    className={`text-decoration-none mx-1`}
                    href="https://smallseotools.com/decimal-to-binary/"
                    target="_blank"
                    data-name="15-sst"
                  >
                    Decimal to Binary
                  </a>
                </strong>
                conversion method manually can result in errors and can slow
                down a process.
              </p>
              <h2>How To Convert Decimal To Binary Online</h2>
              <p>
                Therefore, at Small SEO Tools, our tool offers you easy means of
                converting decimal number to binary. You have the advantage of
                getting your calculations done accurately, quickly and
                efficiently. Not only this, our tool provides a way of
                converting the decimal code to binary code with solutions. You
                can explore this tool and observe how accurate the conversions
                are. When a decimal integer or dyadic fraction value is
                converted to binary, you can also recheck it to ensure that the
                decimal matches the original decimal value, the result will be
                an approximation of the original decimal number.
                <br /> You can now get your calculations done easily with our
                decimal to the binary calculator in the following simple steps:
              </p>
              <ul className={`mt-3`}>
                <li>
                  Step 1: Visit the tool web page:
                  https://smallseotools.com/decimal-to-binary
                </li>
                <li>
                  Step 2: Type or paste your decimal value in the space
                  indicated.
                </li>
                <li>Step 3: Click on “Convert to Binary”</li>
                <li>
                  The correct value is displayed and can be copied to clipboard
                </li>
              </ul>
              <p>
                Not every online
                <strong>
                  <a
                    className={`text-decoration-none mx-1`}
                    href="https://smallseotools.com/decimal-to-binary/"
                    target="_blank"
                    data-name="15-sst"
                  >
                    Decimal to Binary Converter
                  </a>
                </strong>
                is reliable as ours is. Besides, you can do multiple
                conversions, and our converter is guaranteed to get them all
                done freely. The tool has served different users over time, both
                experts and non-experts, amateurs and even students. Every user
                who needs to have decimal code to binary code conversions done
                need not search too far anymore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
