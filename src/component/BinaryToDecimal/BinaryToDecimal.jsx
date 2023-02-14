import React from "react";
import { useState } from "react";
import styles from "./BinaryToDecimal.module.css";
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
              <h4>Binary To Decimal</h4>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your each binary numbers with space:
                <button
                  className={`btn btn-primary position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 mt-3 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your Binary Here"
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
                Convert To Decimal
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
              <h2>Binary to Decimal Conversion and the Binary Number System</h2>
              <p>
                Binary is a numbering system with 2 as its base and is made up
                of two numbers 0 and 1. Also, when it comes to turning the power
                off or on these two numbers are used to represent it, where
                <strong> 1 is </strong> equal to <strong> on </strong>, and
                <strong> 0 is off </strong>. In the computers, the central
                processing units only understand the language of number systems,
                since binary digit is the smallest unit of data known as a bit,
                it causes too many bits to be used. This is the reason why we
                need to convert binary to other number systems while performing
                complex calculations
              </p>
              <p>
                Decimal numbers have base 10 which are <strong> 0 to 9 </strong>
                , and their combinations are used to represent distinct values.
                As, 10 is the radix for decimal number system, all the numbers
                in this format are expressed in powers of 10. Also, it is the
                number system which humans are comfortable with because it also
                takes fewer bits than binary. For example, the binary number
                <strong> 1101 1010 </strong> is represented as
                <strong> 218 </strong> in decimal. In our everyday life, we are
                using this format whenever we are dealing with money, weight,
                etc.
              </p>
              <p>
                Decimal numbers are required when you need precision in your
                work which cannot be provided by the whole numbers. The
                calculation of weight is something not always accurate on the
                weighing machine, means not always equal to a whole number,
                which is why it’s important to learn about the decimal values
                especially if you want to know the exact meaning of the number
                on the scale.
              </p>
              <h2>
                Various Numbering Systems And The Binary To Decimal Translator
              </h2>
              <p>
                The online
                <strong>
                  <a
                    className={`text-decoration-none mx-1`}
                    href="https://smallseotools.com/binary-to-decimal/"
                    target="_blank"
                    data-name="14-sst"
                  >
                    Binary to Decimal
                  </a>
                </strong>
                converter, lets you transform all of your binary values to
                decimal without any extra efforts. As binary represents only two
                digits, thus large numbers can be misapprehended which is why it
                is important to turn them to one of the easiest to understand
                categories of the decimal system. The binary numbers were found
                in the computer technology, and all the programming that takes
                place in the computer uses these two digits which in other words
                is the process of receiving data and illustrating it with
                discrete bits of information.
              </p>
              <p>
                There are different numbering systems and learning about them
                will help us better interpret the computer systems architecture.
                If you aren’t aware, every value you save or take out from the
                computer memory has a unique number system. The most common
                numbers system supported by computers architecture are:
              </p>
              <ul className={`mt-3`}>
                <li>
                  <strong>Binary Number System</strong>
                </li>
                <li>
                  <strong>Decimal Number System</strong>
                </li>
                <li>
                  <strong>Hexadecimal number system (Hex)</strong>
                </li>
              </ul>
              <p>
                A computer takes the information and digitally encodes (it is
                the process where the machine takes in data and represents in
                discreet bits of information), which are the zeros and ones in
                the computer language. The decimal number system has 10 digits
                which range from 0 to 9 with the <strong> base 10 </strong> and
                conversion from binary to decimal can help us better understand
                the compound binary numbers.
              </p>
              <p>
                After that comes the Hexadecimal number system which has 16
                values which are alphanumeric but includes only the first six
                letters of alphabets and the numbers zero to nine. Also, you can
                say that a computer is designed for these numbers because they
                can understand the position occupied by these symbols in the
                figure.
              </p>
              <h2>How To Use Our Online Binary To Decimal Calculator</h2>
              <p>
                The binary to decimal translator lets you turn any amount of
                binary number to decimal without any extra requirements. You can
                use our binary fraction to decimal converter on every operating
                system, without facing any difficulties by following the steps
                given below:
              </p>
              <ol className={`mt-3`}>
                <li>
                  When reached on the page of
                  <strong>
                    <a
                      className={`text-decoration-none mx-1`}
                      href="https://smallseotools.com/binary-to-decimal/"
                      target="_blank"
                      data-name="14-sst"
                    >
                      Binary to Decimal Converter
                    </a>
                  </strong>
                  online you will find a large text box, where you will be
                  entering your binary digits either by copying and pasting from
                  your file or by typing yourself.
                </li>
                <li>
                  When you are done with the first step, all you need is one
                  click on the “Process” button, and the results will be
                  displayed below the
                  <strong> convert binary to decimal online </strong> conversion
                  tool.
                </li>
                <li>
                  You can copy the results by clicking on the “Copy to
                  clipboard” button or you can highlight all the text, right
                  click and select the copy option from the menu and paste it in
                  your desired location.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
