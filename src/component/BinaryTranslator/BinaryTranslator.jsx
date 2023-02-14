import React from "react";
import styles from "./BinaryTranslator.module.css";
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
              <h4>Binary Translator</h4>
            </div>
            <div class="sub_text mx-auto my-4 px-4 fs-7 text-center">
              <p>
                Translate binary code to text using this online binary
                translator. Simply paste the binary code and get plain text in
                one <br /> second.
              </p>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter or paste your Binary:
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
                    row="50"
                    col="100"
                    className={`form-control fs-2 m-0 border-0  ${styles.placeholder}`}
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
                Convert To Text
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
              <h2>How to Use Binary Translator?</h2>
              <p>
                Using our binary translator is quite simple and easy to
                understand. The following steps allow you to execute binary
                translation without facing any intricacies.
              </p>
              <ul className={`mt-3`}>
                <li>
                  First of all, enter the binary values in the given field. You
                  can type, paste, or upload the binary code file on this binary
                  translator.
                </li>
                <li>
                  After that, hit the "Translate Binary"&nbsp;button to initiate
                  the process.
                </li>
                <li>
                  The binary code translator will process your request and
                  present results in seconds. You can copy the translated binary
                  code in English or click the Download button to save the file
                  on your device.&nbsp;
                </li>
              </ul>
              <h2>About Binary Translator</h2>
              <p>
                The binary translator offered on SmallSEOTools is quick and
                efficient in generating binary code to text. This tool is based
                on advanced algorithms that precisely go through the binary
                values submitted by the users and work on generating their
                actual textual representations. This&nbsp;binary language
                translator doesn’t ask you to go through any complexities. You
                don’t need to register on this web portal to convert binary code
                to text.&nbsp;
              </p>
              <h2>Advantages of Binary Code Translator</h2>
              <p>
                The binary translator comes with numerous benefits for its
                users. You can use this binary translator for the following
                reasons.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Simplicity</h3>
                </li>
              </ul>
              <p>
                The users don’t have to carry out complex manual calculations
                using this binary code translator. Its simple interface makes
                the binary translation process quite easy for everyone.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Saves Time and Effort</h3>
                </li>
              </ul>
              <p>
                The binary translator doesn’t ask its users to invest much time
                and effort. You can get your hands on accurate binary
                translation results by following simple steps.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Portability</h3>
                </li>
              </ul>
              <p>
                The super-compatibility of our binary translator makes it easily
                accessible to people all around the globe. You don’t need a
                specific software program to use this facility, as it is
                entirely web-based.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Accuracy</h3>
                </li>
              </ul>
              <p>
                The binary code translator provides its users with 100% accurate
                results. A single-digit error can lead to inaccuracy in the
                manual translation of binary. You can avoid this hassle using
                this online binary translator that delivers exact
                outcomes.&nbsp;
              </p>
              <h2>Features of Binary Translator</h2>
              <p>
                The&nbsp;features make this binary language translator a
                must-have utility for people looking forward to converting
                binary to letters. Some of its features include the
                following.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Supports All Platforms</h3>
                </li>
              </ul>
              <p>
                Using this
                <a
                  className={`text-decoration-none mx-1`}
                  data-name="1435-sst"
                  href="https://smallseotools.com/binary-translator/"
                >
                  binary translator
                </a>
                , you don’t need to get a device running on a specific operating
                system. All platforms support the binary translator; you can use
                it from any device. All you need to have to run this binary
                translator is a stable internet connection.&nbsp;&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Free of Cost</h3>
                </li>
              </ul>
              <p>
                No costs are involved in the usage of this binary translator.
                The binary code translator allows you to convert binary text as
                often as possible without charging a single penny.
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>Easy Upload Options</h3>
                </li>
              </ul>
              <p>
                The binary translator provides easy upload options to convert
                binary text. You can directly upload the file containing binary
                code, drag and drop the file, paste binary values, or type it
                manually without facing any restrictions.
              </p>
              <h2>Binary Number System</h2>
              <p>
                The binary number system is a system that represents codes,
                instructions, and other sorts of commands using just two digits,
                i.e., 0 and 1. This system is also known as the base-2 number
                system, as it only uses two digits. Every digit in a binary code
                is referred to as a bit, and 8 bits form a byte. Computers can
                only understand binary language; hence, it becomes crucial for
                developers to have a firm grip on the binary number system.
                Depicting what instruction a lengthy binary string represents
                becomes hectic for people, as translation is time-consuming. It
                involves complex calculations that can often lead to inaccurate
                results. Therefore, you can rely on a binary translator to
                decode any binary value and find its textual representation
                instantaneously.&nbsp;
              </p>
              <ul className={`mt-3`}>
                <li>
                  <h3 className={`opacity-75`}>
                    Examples of Binary Translations&nbsp;
                  </h3>
                </li>
              </ul>
              <p>
                1. <strong>Binary Code: </strong>1001111 1110000 1100101 1101110
                100000 1110100 1101000 1101001 1110011 100000 1100110 1101001
                1101100 1100101
              </p>
              <p>
                <strong>Translation: </strong>Open this file&nbsp;
              </p>
              <p>
                2. <strong>Binary Code: </strong>1000011 1101100 1101001 1100011
                1101011 100000 1110100 1101111 100000 1110000 1110010 1101111
                1100011 1100101 1100101 1100100
              </p>
              <p>
                <strong>Translation: </strong>Click to proceed&nbsp;
              </p>
              <p>
                3. <strong>Binary Code: </strong>1001000 1101001 1100100 1100101
                100000 1110100 1101000 1101001 1110011 100000 1100010 1110101
                1110100 1110100 1101111 1101110
              </p>
              <p>
                <strong>Translation: </strong>Hide this button&nbsp;
              </p>
              <h2>
                How to Use Binary Translator to Convert Binary to Text, Hex,
                Decimal, and ASCII?
              </h2>
              <p>
                Besides finding binary translation with this binary translator,
                you can also use it to convert
                <a
                  className={`text-decoration-none mx-1`}
                  href="https://smallseotools.com/binary-to-text-tool/"
                  data-name="9-sst"
                >
                  binary to text
                </a>
                ,&nbsp;
                <a
                  className={`text-decoration-none mx-1`}
                  data-name="10-sst"
                  href="https://smallseotools.com/binary-to-hex/"
                >
                  binary to hex
                </a>
                ,
                <a
                  className={`text-decoration-none mx-1`}
                  data-name="14-sst"
                  href="https://smallseotools.com/binary-to-decimal/"
                >
                  decimal
                </a>
                ,
                <a
                  className={`text-decoration-none mx-1`}
                  data-name="12-sst"
                  href="https://smallseotools.com/binary-to-ascii/"
                >
                  ASCII
                </a>
                , and vice versa. To convert any value between different number
                systems, choose the desired options in this tool's ‘From’ and
                ‘To’ fields and click the convert button to find the required
                results instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
