import React from "react";
import { useState } from "react";
import styles from "./TextToAscii.module.css";
export default () => {
  let [showResul, setShowResult] = useState(false);

  const showResult = () => {
    setShowResult((current) => !current);
  };
  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={`row  ${styles.section1}`}>
          <div className="col-md-8 border-top border-start border-end bg-white p-2 mt-3 ">
            <div className="text-center border-bottom p-3">
              <h4>Text To ASCII</h4>
            </div>
            <div className="col justify-content-center p-2 my-4">
              <p className="fs-6 lh-base text-center">
                Translate Text into ASCII numbers format. For example, you got a
                Text “a” ( just enter this char in the tool it will convert to
                ASCII ) and output will be a number like “097”. Enter any
                English text, of a single character, word, or a long string to
                convert into ASCII code instantly.
              </p>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your Text:
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
                Convert To ASCII
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
              <h3>About Text To ASCII: Character Encoding in ASCII Standard</h3>
              <p>
                It is well known that computers are generally programmed to
                interact with numbers and codes. So, if you want to interact
                with your computer or to program some instructions, it might
                require that you understand how to convert String to ASCII
                number codes. That is, ASCII, which is the short form of the
                American Standard Code for Information Interchange, Text in a
                computer is stored as numbers after encoding them into ASCII
                numbers. Numbers are a special code format that computers use in
                storing normal text. Thus, every English letter has its own
                ASCII code in number format. ASCII codes are encoding text
                numbers that are assigned to the 256 (128 extended sets of ASCII
                code) characters entailed in the ASCII standard. Work on ASCII
                started in October 1960 after the meeting of the
                <a
                  className={`text-decoration-none mx-1`}
                  href="https://www.ansi.org/"
                >
                  American National Standards Institute
                </a>
                (ANSI) and in 1963 the first version of ASCII standard was
                introduced. In the start, It uses a 7-bit encoding scheme that
                represents 128 different numbers.
              </p>
              <p>
                Later it was replaced with the UTF-8 encoding scheme until 2007.
                It was the most commonly used character encoding scheme on the
                World Wide Web.
              </p>
              <h2>The Need For Text To ASCII Code Translator</h2>
              <p>
                Note that all text and characters on your computer applications
                or software are actually stored as ASCII codes. You might thus
                be required for one reason or the other, to understand how to
                translate String to ASCII in order to explore or sort through
                the information stored. ASCII codes serve as the equivalent of
                characters, and they are the data that can be interpreted by the
                computer. Usually, computer experts, programmers and all who
                work with computer languages have a fairly good knowledge of
                these codes.
              </p>
              <p>
                However, it would be impossible to memorize or know what each
                letter or character in the text represents in ASCII. For
                instance, the character A is represented as 065 in ASCII, while
                a lowercase “a” is represented as “097”. Many character encoding
                schemes make use of the ASCII format. Obviously, ASCII is still
                relevant today, The manual generation of ASCII characters using
                Text to ASCII conversion table is a quite long process, to do it
                fast use the
                <a
                  className={`text-decoration-none mx-1`}
                  href="https://smallseotools.com/text-to-ascii/"
                  data-name="16-sst"
                >
                  text to ASCII
                </a>
                converter online for some specified purposes.
              </p>
              <h2>Try The Best ASCII Converter Online</h2>
              <p>
                Fortunately, there are ways you can convert text to ASCII code
                using online tools that are readily available for use by anyone.
                However, you would want to ensure that your task is done
                correctly without the unnecessary details for online app
                registration or adverts. Well, you don’t need to worry, because,
                at Small SEO Tools, our text to ASCII online converter is
                equipped to get your conversion tasks done efficiently, promptly
                and with ease.
              </p>
              <h3>How To Use Our Text TO ASCII Converter</h3>
              <p>
                Whenever you use our ASCII Generator, you need not wait through
                any long process, but you simply get your results instantly.
                Also, you can convert a string, text, or any word to ASCII
                characters and also get the correct output as well.
              </p>
              <p>
                Of course, a String to ASCII character codes that are guaranteed
                to not miss out on any detail is the real deal.
              </p>
              <p>
                Thus, This is how to use our super-efficient online ASCII text
                generator, simply follow these steps:
              </p>
              <ul>
                <li>
                  <strong> Step 1: </strong> Got to
                  <strong>
                    <a
                      className={`text-decoration-none mx-1`}
                      href="https://smallseotools.com/text-to-ascii/"
                      target="_blank"
                      data-name="16-sst"
                    >
                      https://smallseotools.com/text-to-ascii/
                    </a>
                  </strong>
                </li>
                <li>
                  <strong>Step 2:</strong> Input or paste the text in the space
                  indicated
                </li>
                <li>
                  <strong>Step 3:</strong> Click on “Process”
                </li>
                <li>
                  The output is immediately given in the equivalent ASCII
                  characters
                </li>
              </ul>
              <p>
                Obviously, these easy steps can be understood by anybody. You
                need not be a computer guru to operate text to ASCII converter.
                But it is equally efficient if you’re an expert too. Try out our
                tool today and get your text in ASCII format.
              </p>
              <h2>Where ASCII Characters Used and Why?</h2>
              <p>
                Ascii code is used in communication devices like in the keyboard
                to identify characters and numerals basically to convert word to
                ASCII format. ASCII Characters also famously used in Ascii Art,
                images are used to draw using symbols. Ascii was the most used
                character encoding on the internet until 2007 but later with the
                expansion of computer needs, it was replaced with UTF-8. Earlier
                in PC, it was used only for the English language. But Global
                companies, like Facebook and Google, said their users use more
                than one language to communicate on the internet and devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
