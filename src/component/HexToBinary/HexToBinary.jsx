import React from "react";
import { useState } from "react";
import styles from "./hexToBinary.module.css";
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
              <h4>Hex To Binary</h4>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your Hex numbers with space:
                <button
                  className={`btn btn-primary position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 mt-3 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your Hex Here"
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
            className={`col-md-8 border-top border-start border-end border-bottom bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>From Hexadecimal To Binary – The Trouble-Free Way</h2>
              <p>
                Computers and other related machines use binary numbers for
                storing data. A binary digit also known as a bit is the smallest
                unit of data in computing and is represented in ones and zeros.
                If we talk about the transistors in a machine, it is a tiny
                switch which upon receiving electrical signals activates, it
                uses signals like 0 and 1 which represent off and on.
              </p>
              <p>
                Just like a computer machine that run on a set of instructions
                which are converted into machine code upon receiving, and they
                are natural binary numbers. A binary number is more manageable
                for a machine to understand but not for a human and today there
                isn’t a large number of people who deal with machine language.
              </p>
              <p>
                When developers and programmers are coding, their every line and
                letter is translated using a translator to help a processor
                understand the instructions for execution. It is without a doubt
                easy for computers to understand, but as not for humans they
                convert it to <strong>hexadecimal values</strong> to shorten and
                to better perceive the code.
              </p>
              <p>
                The hexadecimal is also known as hex or <strong>base 16</strong>
                and is used to share values in the numerical form. Hex uses
                extra numbers that help it to create large quantities; it also
                incorporates the first six letters of Alphabets (A, B, C, D, E,
                and F). The most used numeral system in the world, after that
                binary, is the most popular one, and we all know the reason that
                it is a language understood by computers.
              </p>
              <h2>Hex to Binary Utilization</h2>
              <p>
                The binary system is utilized in many ways, one of which is the
                files we store on a computer, either image or audio, can be
                easily transformed to binary by assigning each character or
                pixel a specific binary number.
              </p>
              <p>
                With the help of <strong>hex Calculator</strong>, you can turn
                all the hex values without performing any calculations manually
                using a calculator or a pen. The
                <strong>
                  <a className={`text-decoration-none`}
                    data-name="11-sst"
                    href="https://smallseotools.com/hex-to-binary/"
                    target="_blank"
                  >
                    Hex to Binary
                  </a>
                </strong>
                conversion method involves multiple steps if done manually which
                are:
              </p>
              <ul>
                
                <li>
                  You will need hexadecimal to the binary table from where you
                  will write down the hex numbers to represent each digit by its
                  binary equivalent number.
                </li>
                <li>
                  You will need to add more zeros if the current grouping number
                  is less than four.
                </li>
                <li>
                  After which you will need to concatenate the digits together
                  to begin assigning.
                </li>
              </ul>
              <p>
                Hex numbers are no doubt used at various places like in an
                assembly language for processing instructions and for bytes to
                represent each value as a hex. However, binary numbers are more
                manageable when it comes to calculations because you will be
                using only two numbers zero and one.
              </p>
              <p>
                There is a reason for why computers only use binary numbers it
                is because they represent on and off plus machines can just read
                and store data in this format. In I.T there are many places
                where binary numbers are utilized, one of which is the code of
                developers, all the colors are represented in hex values, but
                for storing files on a computer, they are translated to binary.
              </p>
              <p>
                Today, in subjects like math and computer, people always talk
                about equations, where the binary form is present in both which
                helps us better understand the machine language made of ones and
                zeros. The above steps can take a lot of your time when we are
                talking about a large group of hex numbers no doubt while
                reading them, they seem short because they are a better
                representation of binary digits, but when you convert them, it
                can become a really large file.
              </p>
              <h2>Binary Converter Tool Without Any Hex To Binary Formula</h2>
              <p>Hex to binary online conversion is entirely trouble-free as compared to manual conversion. Our Hexadecimal to Binary encoder doesn’t require any additional usage of software or asks for extra permissions. You just need to follow some easy below given steps to convert from hexadecimal to binary code:</p>
              <ol> <li>When you have opened the page that comes with title <strong><a className={`text-decoration-none`}  data-name="11-sst" href="https://smallseotools.com/hex-to-binary/" target="_blank">Hex Converter</a></strong> online, you will find a text field where you can type your binary code or paste it from the file if you already have it stored on your computer, as shown in the image:</li> <li>There’s an example of hexadecimal values pasted in the text box, and when you hit the “Process” button after completing the first step, the results will be displayed with not even a second delay below the tool, like this:</li> <li>You can copy the code either by highlighting it or pressing the “<strong>Copy to clipboard</strong>” button as shown in the above image.</li> </ol>
              <p>&nbsp;</p>
              <p>Note: You can also do some other conversions like:&nbsp;<a className={`text-decoration-none`} href="https://smallseotools.com/binary-to-text-tool/" data-name="9-sst">binary to text</a> or <a className={`text-decoration-none`} href="https://smallseotools.com/text-to-binary/" data-name="8-sst">text to binary</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
