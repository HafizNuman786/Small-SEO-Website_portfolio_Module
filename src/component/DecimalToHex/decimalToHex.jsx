import React from "react";
import { useState } from "react";
import styles from "./DecimalToHex.module.css";
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
              <h4>Decimal To HEX</h4>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your decimal numbers with space:
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
                Convert To Hex
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
            className={`col-md-8 border-top border-start border-bottom border-end bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>Converting Decimal To Hex With Proficiency</h2>
              <p>
                The first thing you need to know is that the decimal numbers
                have base 10 and the digits range from 0 to 9. In fact, any
                amount can be decimal if it has base 10, and it is vital for
                people who are working in the field of information technology.
                If we talk about the decimal system in terms of mathematics,
                then decimal numbers are placed according to their value.
              </p>
              <p>
                For example, in 2.01 the integer is written on the left side of
                the decimal point, and the fractional numbers are added to the
                right. The decimal numbers system has a radix of ten, and all
                the digits are signified within powers of ten.
              </p>
              <p>
                Decimal and hexadecimal are similar, and if we talk about
                hexadecimal then hex is a number system with the base 16 and
                uses digits from 0 to 9 and letter A to F. Also, it’s quite
                beneficial when it comes to computing the reason is each figure
                can represent four bits. Whereas the decimal number system is
                for performing arithmetic calculations in computers.
                <br /> The numbers we use in our everyday life are also decimal
                numbers where a number 10 is made up of two decimal numbers and
                so on. Numbers can be reused as many times as required which is
                why there is no end to these digits.
              </p>
              <p>
                With our
                <strong>
                  <a
                    className={`text-decoration-none mx-1`}
                    href="https://smallseotools.com/decimal-to-hex/"
                    target="_blank"
                    data-name="17-sst"
                  >
                    Decimal to Hex
                  </a>
                </strong>
                Converter, you can convert all the decimal values without
                consulting the hex conversion chart and formulas. It doesn’t
                take much time but still consulting a whole list of numbers can
                really take a lot of your time. The colors used in the content
                of the web basically are represented as a combination of six hex
                digits. For example, hex for white color would be FFFFFF, and
                for black, it is 000000.
              </p>
              <h2>Other Number Systems In Contrast with Hexadecimal</h2>
              <p>
                The hexadecimal numbers are more convenient when representing
                binary values in a computer system; the reason is they lessen
                the abundance of digits because one hex digit is equal to four
                binary digits.
              </p>
              <p>
                It is used widely when it comes to computer languages because
                every hex value has a predefined function in the programming
                languages. Hexadecimal numbers are also used for, defining
                locations in the memory, to view the error messages (by
                specifying the memory location of that error), and for
                representing MAC addresses. The most common benefits of
                converting or using hex values are:
              </p>
              <ul className={`mt-3`}>
                <li>
                  It’s quite succinct, and while representing numbers of binary
                  and decimal, it occupies less space and allows you to save
                  more data.
                </li>
                <li>
                  Those large binary numbers can easily be transformed to hex
                  for few digits. The conversion is simple and requires a few
                  steps when done manually, but can occupy a lot of time when a
                  file is large.
                </li>
                <li>
                  As people like grouping stuff together for better
                  interpretation, a compilation of binary numbers in Hex makes
                  it easier to understand, read, and write. Writing fewer digits
                  also lessens the probability of making errors.
                </li>
              </ul>
              <p>
                The decimal number system is the right choice when you need
                exact values in mathematical operations because “whole” numbers
                don’t provide us with such insight. For example, there are many
                chemicals that need to be weighed in decimal numbers before
                being mixed, and if the right quantity is not incorporated, then
                you might not get your desired results. The values that we are
                saving in our computers today are stored in number systems,
                where each pixel of the picture or fragment of the data is
                assigned a unique value.
              </p>
              <h2>How To Use Decimal To Hexadecimal Converter Online</h2>
              <p>
                Conversion with decimal to hex calculator doesn’t require much
                of your time. If you try getting the figures manually then
                without a doubt, it will demand a lot of concentration and
                effort.
              </p>
              <p>
                Mathematical problems aren’t too complicated which is why they
                are easier to transform, but computational problems are quite
                compound. Our decimal to hexadecimal method doesn’t require any
                extra processing power and is supported by all the operating
                systems.
              </p>
              <p>
                You can convert from decimal to hexadecimal using our
                <strong>
                  <a
                    className={`text-decoration-none mx-1`}
                    href="https://smallseotools.com/decimal-to-hex/"
                    target="_blank"
                    data-name="17-sst"
                  >
                    Decimal Converter
                  </a>
                </strong>
                by following the below-given steps:
              </p>
              <ol className={`mt-3`}>
                <li>
                  After reaching the page of Decimal to Hex online calculator,
                  you will find a large text field with the title “
                  <strong>
                    Enter your decimal numbers with space or comma
                  </strong>
                  ”, this is where you can copy your decimal numbers or write
                  them if you can, for conversion. The example below will show
                  you a demonstration of the tool:
                </li>
                <li>
                  When you are done entering your decimal numbers, you can press
                  the “<strong>Process</strong>” button for instant results as
                  shown in the picture below. Which you can copy by striking the
                  “<strong>Copy to clipboard</strong>” button and paste in your
                  desired location.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
