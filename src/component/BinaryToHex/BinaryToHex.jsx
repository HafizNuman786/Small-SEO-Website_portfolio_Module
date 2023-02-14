import React from "react";
import { useState } from "react";
import styles from "./BinaryToHex.module.css";
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
              <h4>Binary To HEX</h4>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your Binary numbers with space:
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
                Convert To HEX
              </button>
            </div>
          </div>
        </div>

        <div className={
          showResul 
         ? `row  ${styles.result}`
         : ` row d-none ${styles.result}`
          }>
          <div className={`col-md-8 text-center mt-3 fw-bolder fs-4`}>Result</div>
          <div  className={`col-md-8 bg-white border-top border-start border-end  border-bottom p-0 mt-3 mh-75`}>
            <div className={` m-3 ${styles.area_Result}`}></div>  
          </div>
           
            <div className=" col-md-8 bg-white p-2 border-start border-end  border-bottom share_options_btns d-flex justify-content-center">

             <div className={` p-1 m-2 ${styles.download}`}>
             <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             </div>

             <div className={` p-1 m-2 ${styles.copy}`}>
             <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
             </div>

            {/* </div> */}
            </div>
        </div>

        <div className={`row `}>
          <div
            className={`col-md-8 border-top border-start border-end bg-white border-bottom p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>Binary To Hexadecimal Converter – Complications Free!</h2>
              <p>
                Binary numbers today not only make the designing of computer and
                related technologies simple but also they are easy to understand
                by a machine. The most straightforward explanation of binary
                number system can be a machine representing numbers in the form
                of <strong>0 and 1</strong> instead of the digits
                <strong>0-9</strong>.
              </p>
              <p>
                The names in the binary are added to left as the digits get
                larger and for computers, it gets simplified when they are
                performing tasks. Also, binary numbers can be programmed on and
                off for a switch or a transistor which you can make a part of a
                calculator or any storage device.
              </p>
              <p>
                If you aren’t aware, pictures and audio can also be turned into
                0 and 1. First, they have to be turned into tiny elements which
                can be pixels and sample for sound; later every single pixel is
                assigned a unique number.
              </p>
              <p>
                This is the very reason why this number system is most commonly
                used in computer engineering and networking. Whereas, Hex or
                call it Hexadecimal number system has the system of base 16;
                also, it is interesting in many ways as our decimal system uses
                only ten digits to represent numbers, hexadecimal uses sixteen.
                The six figures after ten are letters of the English alphabets,
                (A, B, C, D, E, and F). This number is used in two different
                places:
              </p>
              <ol className={`mt-3`}>
                <li>
                  <ol className={`mt-3`}>
                    <li>
                      <strong>Information Technologies</strong>In information
                      technologies or math’s, each hex number represent four
                      binary digits, and if there aren’t four digits, then extra
                      zeros are added on the left to meet the condition. If you
                      haven’t seen, in the URL (Uniform Resource Links)
                      character codes are found with percentage prefixes; such
                      numbers are also hexadecimal. In XML and Html, we use the
                      Hexadecimal numbers for representing colors where each
                      color is assigned a six-digit hex value. The IPV6
                      addresses can also be noted as eight groups of hex digits,
                      where every group is divided or separated by a colon.
                    </li>
                    <li>
                      <strong>In Mathematics</strong>When it comes to solving
                      problems and equations and to understand the purpose of
                      hexadecimal characters Math is the subject for you. It is
                      really difficult sometimes to turn binary numbers to
                      hexadecimal characters when they have a large grouping of
                      numbers. It takes a lot of time as the steps include the
                      gathering of figures in four digits, if the long binary
                      number can’t be separated in the group of fours then you
                      will need to add extra zeros to complete the number. Later
                      you will need to consult a chart of hex numbers if you
                      haven’t added them to your memory.
                    </li>
                  </ol>
                </li>
              </ol>
              <p>
                You can avoid all of these steps by using our
                <strong>binary to hex online converter</strong>. This is where
                you can add long binary numbers for conversion to hex.
                Hexadecimal digits are used to view the values of bytes
                contained in the file and are also used in assembly language
                where the operand is specified as a hex value. In a decimal
                system when you get to number ten, there is no specified number
                for this digit, and thus it is represented as 10.
              </p>
              <h2>
                How To Use Binary To Hexadecimal Calculator – A Free Binary To
                Hexa Transformer
              </h2>
              <p>
                You can turn all the binary numbers to hexadecimal with our
                tool, so you don’t have to carry the binary to the hexadecimal
                table for conversion purposes. It definitely takes a lot of time
                when converting large binary numbers to hex plus if you make a
                mistake, the result will not appear as you expect. Sometimes
                even re-checking a manual conversion doesn’t help in finding a
                tiny error and you don’t also have to proofread when you have a
                <strong>
                  <a
                    className={`text-decoration-none`}
                    data-name="10-sst"
                    href="https://smallseotools.com/binary-to-hex/"
                    target="_blank"
                  >
                    Binary to Hexadecimal
                  </a>
                </strong>
                converter online. Follow the below-given steps for converting
                binary to hex.
              </p>
              <ol className={`mt-3`}>
                <li>
                  On the page of Binary to the hexadecimal converter, you will
                  find a large rectangular text box, where you can copy/paste
                  the binary code or write it yourself if you have it in mind,
                  as shown in the picture below:
                </li>
                <li>
                  When you are done writing, all you have to do is hit the “
                  <strong>Process</strong>” button, and the results will be
                  displayed under the tool, like this:
                </li>
                <li>
                  After getting your results, you can copy the converted form of
                  the binary by clicking on the “
                  <strong>Copy to ClipBoard</strong>” button and paste it in
                  your file where the code is required.
                  <br /> This{" "}
                  <strong>
                    <a
                      className={`text-decoration-none`}
                      href="https://smallseotools.com/binary-to-text-tool/"
                      data-name="9-sst"
                    >
                      Binary to text
                    </a>{" "}
                    converter
                  </strong>
                  &nbsp;is easy to use &amp; completely Free.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
