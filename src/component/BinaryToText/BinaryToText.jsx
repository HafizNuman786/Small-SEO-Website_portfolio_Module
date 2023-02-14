import React from "react";
import { useState } from "react";
import styles from "./binaryToText.module.css";
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
              <h4>BINARY TO TEXT</h4>
            </div>
            <div className="col justify-content-center p-2 my-4">
              <p className="fs-6 lh-base text-center">
                Binary to text converter is a completely free tool that helps
                you to convert binary to English text online. Simply enter
                binary and get the text for free.
              </p>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-4 ${styles.hpaste}`}
              >
                Enter or paste your Binary:
                <button
                  className={`btn btn-primary position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your Binary Here"
                    row="100"
                    col="100"
                    className={`form-control fs-2 m-0 border-0 ${styles.placeholder}`}
                  />
                </div>

                <div className={`d-flex justify-content-between w-100 ${styles.upload_option }`}>
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
                className={`text-white d-flex fw-bold justify-content-center border-0 p-2 ${styles.button}`}
              >
                Convert To Text
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
            className={`col-md-8 border-top border-start border-end bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>Use The Best Binary To Text Converter&nbsp;Online</h2>
              <p>
                Converting binary to the English alphabet has been made very
                easy with SmallSEOTools' binary to text&nbsp;tool. You can now
                easily get it converted to information. This can be done for
                free, without registration or installation stress, and within
                seconds. Our online converter is suited to translate a long
                stretch of binary code to words or in a single letter which
                depends on your input you enter in our online binary code
                translator.
              </p>
              <h2>How To Convert Binary To Text?</h2>
              <p>
                To convert binary to English letters using the best binary to
                text converter, take these steps;
              </p>
              <p>Step 1: Enter or paste your binary into the text box.</p>
              <p>
                Step 2: Click on “<strong>Convert to Text</strong>”
              </p>
              <p>
                Step 3: The tool will convert your binary Input e.g (01000001),
                into Plain Text (A)
              </p>
              <p>The right result is provided immediately.</p>
              <p>
                Although there are multiple online binary to text converters,
                our tool ensures accuracy in every task. Some tools help you
                convert binary to text online and for its vice versa, you can
                try
                <a
                  data-name="8-sst"
                  href="https://smallseotools.com/text-to-binary/"
                >
                  Text to Binary Converter
                </a>
                . We equally have specific tools for the two distinct tasks.
              </p>
              <h2>
                Ensure You Input The Right Code In Binary to Text Converter
              </h2>
              <p>
                To get accurate English text, make sure you input the right
                binary number in the binary to English converter. You must,
                however, ensure that the right code is inputted from you to have
                the accurate result from our converter. Using a binary to
                English text converter saves you some of the stress of learning
                how the binary system works. Knowing that each letter of the
                word has a corresponding binary value. It is simply impossible
                to memorize what each letter represents in binary. This is why
                you need a binary to plain text converters such as ours which is
                versatile and super-efficient. While computers make use of these
                codes to function, they still need to be interpreted,
                particularly when you have no coding experience. Coding with
                binary has been made easy with tools that can aid in encoding
                and decoding data. Try out our binary-to-text converter today
                and get smooth results.
              </p>
              <h2>What Are Binary Numbers?</h2>
              <p>
                In digital electronics, a binary number is expressed in the base
                of 2 numerical numbers. Which is (0, 1). The computer reads
                these bits as On and Off respectively (0 as off/false &amp; 1 as
                on/true). The digital term BIT means "Binary digIT” The bit is
                the smallest unit of data in a computer system that represents a
                single binary value, either 0 or 1. The byte is equal to 8 bits,
                a combination of 8 bits (byte) used to encode a single text
                character.
              </p>
              <p>
                Representation of binary value (01001101) equivalent text (M) in
                eight (bits) switches.
              </p>
              <p>
                The computer cannot understand human language, and humans
                usually don’t understand binary language (0,1). Then how can we
                transmit our instructions to the computer? Obviously, we need a
                tool that can convert human language into binary digits or
                digits into plain text so we can understand it easily. SST
                offers you a fantastic free tool that can convert a binary to
                words that can easily be understood and printed by humans.
              </p>
              <h2>
                What term can be used to describe anything that uses binary
                numbers?
              </h2>
              <p>
                Usually, the devices use binary numbers. The term "Digital" can
                be used to describe them. Mostly all of the digital data is
                stored in binary format.
              </p>
              <p>
                Usually, the devices use binary numbers. The term "Digital" can
                be used to describe them. Mostly all of the digital data is
                stored in binary format.
              </p>
              <h2>
                Binary to English Converter: Convert Binary To English Text
              </h2>
              <p>
                When you come across a long stretch of information written in
                codes of 0s and 1s, you might wonder how to translate it into
                plain text. These details cannot be decoded easily to normal
                text. To convert binary to text online, The tool will save you
                time by directly converting binary into its English text. If you
                want to do it manually first, you will need to change binary to
                decimal, then decimal to ASCII value (English Text), which is a
                very time-consuming task. To change it manually, you can take
                help from the Binary table below.
              </p>
              <h2>
                Converting Manually Can Be Tiring – Use Binary to English
                Converter&nbsp;
              </h2>
              <p>
                This would be a long process when converting every long string
                or even 8 bits code to plain text. Translating a length of code
                into text can be a frightening experience due to the long string
                of numbers that would be translated to only a few words in a
                text. This can, however, be made easy when you use an online
                <a
                  data-name="9-sst"
                  href="https://smallseotools.com/binary-to-text-tool/"
                >
                  binary to text converter
                </a>
              </p>
              <p>
                Binary code is mostly used and interpreted by computers. It is
                functional in passing instructions to the computer. However,
                when the computer or any electronic device presents results in
                binary form, they would need it to translate to text for this
                purpose; they use the binary decoder. It is tough to understand
                binary digits for the human so electronic devices use a binary
                decoder to present it into any human-readable language (English
                text)
              </p>
              <p>
                Some of the binary numbers and their meaning in English text
                (ASCII)
              </p>
              <h3>What does binary digit 01000001 mean in Text (ASCII)?</h3>
              <p>
                This stands for the uppercase alphabet “A” in ASCII text, which
                you can verify from ASCII Table and with the Binary to plain
                text converter.
              </p>
              <h3>
                What does binary number 01100001 mean in English Text (ASCII)?
              </h3>
              <p>
                This stands for the lowercase letter “a” in ASCII text; use the
                binary to English words conversion tool given at the start to
                verify the number or use the ASCII Table.
              </p>
              <h3>Can I change Binary digits to Decimal too?</h3>
              <p>
                Yes, you can! if you want to change any binary number first into
                a decimal value, use binary to a
                <a
                  href="https://smallseotools.com/binary-to-decimal/"
                  data-name="14-sst"
                >
                  decimal translator
                </a>
              </p>
              <h3>Binary Numbers To ASCII Characters Conversion Table</h3>
              <p>
                Get the English text of binary numbers from the Binary text
                conversion table
              </p>
              <table className={`table table-bordered`}>
                <tbody>
                  
                  <tr>
                    
                    <th>Binary</th> <th>Text (ASCII)</th>
                  </tr>
                  <tr>
                    
                    <td>00000000</td> <td>NUL</td>
                  </tr>
                  <tr>
                    
                    <td>00000001</td> <td>SOH</td>
                  </tr>
                  <tr>
                    
                    <td>00000010</td> <td>STX</td>
                  </tr>
                  <tr>
                    
                    <td>00000011</td> <td>ETX</td>
                  </tr>
                  <tr>
                    
                    <td>00000100</td> <td>EOT</td>
                  </tr>
                  <tr>
                    
                    <td>00000101</td> <td>ENQ</td>
                  </tr>
                  <tr>
                    
                    <td>00000110</td> <td>ACK</td>
                  </tr>
                  <tr>
                    
                    <td>00000111</td> <td>BEL</td>
                  </tr>
                  <tr>
                    
                    <td>00001000</td> <td>BS</td>
                  </tr>
                  <tr>
                    
                    <td>00001001</td> <td>HT</td>
                  </tr>
                  <tr>
                    
                    <td>00001010</td> <td>LF</td>
                  </tr>
                  <tr>
                    
                    <td>00001011</td> <td>VT</td>
                  </tr>
                  <tr>
                    
                    <td>00001100</td> <td>FF</td>
                  </tr>
                  <tr>
                    
                    <td>00001101</td> <td>CR</td>
                  </tr>
                  <tr>
                    
                    <td>00001110</td> <td>SO</td>
                  </tr>
                  <tr>
                    
                    <td>00001111</td> <td>SI</td>
                  </tr>
                  <tr>
                    
                    <td>00010000</td> <td>DLE</td>
                  </tr>
                  <tr>
                    
                    <td>00010001</td> <td>DC1</td>
                  </tr>
                  <tr>
                    
                    <td>00010010</td> <td>DC2</td>
                  </tr>
                  <tr>
                    
                    <td>00010011</td> <td>DC3</td>
                  </tr>
                  <tr>
                    
                    <td>00010100</td> <td>DC4</td>
                  </tr>
                  <tr>
                    
                    <td>00010101</td> <td>NAK</td>
                  </tr>
                  <tr>
                    
                    <td>00010110</td> <td>SYN</td>
                  </tr>
                  <tr>
                    
                    <td>00010111</td> <td>ETB</td>
                  </tr>
                  <tr>
                    
                    <td>00011000</td> <td>CAN</td>
                  </tr>
                  <tr>
                    
                    <td>00011001</td> <td>EM</td>
                  </tr>
                  <tr>
                    
                    <td>00011010</td> <td>SUB</td>
                  </tr>
                  <tr>
                    
                    <td>00011011</td> <td>ESC</td>
                  </tr>
                  <tr>
                    
                    <td>00011100</td> <td>FS</td>
                  </tr>
                  <tr>
                    
                    <td>00011101</td> <td>GS</td>
                  </tr>
                  <tr>
                    
                    <td>00011110</td> <td>RS</td>
                  </tr>
                  <tr>
                    
                    <td>00011111</td> <td>US</td>
                  </tr>
                  <tr>
                    
                    <td>00100000</td> <td>Space</td>
                  </tr>
                  <tr>
                    
                    <td>00100001</td> <td>!</td>
                  </tr>
                  <tr>
                    
                    <td>00100010</td> <td>"</td>
                  </tr>
                  <tr>
                    
                    <td>00100011</td> <td>#</td>
                  </tr>
                  <tr>
                    
                    <td>00100100</td> <td>$</td>
                  </tr>
                  <tr>
                    
                    <td>00100101</td> <td>%</td>
                  </tr>
                  <tr>
                    
                    <td>00100110</td> <td>&amp;</td>
                  </tr>
                  <tr>
                    
                    <td>00100111</td> <td>'</td>
                  </tr>
                  <tr>
                    
                    <td>00101000</td> <td>(</td>
                  </tr>
                  <tr>
                    
                    <td>00101001</td> <td>)</td>
                  </tr>
                  <tr>
                    
                    <td>00101010</td> <td>*</td>
                  </tr>
                  <tr>
                    
                    <td>00101011</td> <td>+</td>
                  </tr>
                  <tr>
                    
                    <td>00101101</td> <td>-</td>
                  </tr>
                  <tr>
                    
                    <td>00101110</td> <td>.</td>
                  </tr>
                  <tr>
                    
                    <td>00101111</td> <td>/</td>
                  </tr>
                  <tr>
                    
                    <td>00110000</td> <td>0</td>
                  </tr>
                  <tr>
                    
                    <td>00110001</td> <td>1</td>
                  </tr>
                  <tr>
                    
                    <td>00110010</td> <td>2</td>
                  </tr>
                  <tr>
                    
                    <td>00110011</td> <td>3</td>
                  </tr>
                  <tr>
                    
                    <td>00110100</td> <td>4</td>
                  </tr>
                  <tr>
                    
                    <td>00110101</td> <td>5</td>
                  </tr>
                  <tr>
                    
                    <td>00110110</td> <td>6</td>
                  </tr>
                  <tr>
                    
                    <td>00110111</td> <td>7</td>
                  </tr>
                  <tr>
                    
                    <td>00111000</td> <td>8</td>
                  </tr>
                  <tr>
                    
                    <td>00111001</td> <td>9</td>
                  </tr>
                  <tr>
                    
                    <td>00111010</td> <td>:</td>
                  </tr>
                  <tr>
                    
                    <td>00111011</td> <td>;</td>
                  </tr>
                  <tr>
                    
                    <td>00111100</td> <td>&lt;</td>
                  </tr>
                  <tr>
                    
                    <td>00111101</td> <td>=</td>
                  </tr>
                  <tr>
                    
                    <td>00111110</td> <td>&gt;</td>
                  </tr>
                  <tr>
                    
                    <td>00111111</td> <td>?</td>
                  </tr>
                  <tr>
                    
                    <td>01000000</td> <td>@</td>
                  </tr>
                  <tr>
                    
                    <td>01000001</td> <td>A</td>
                  </tr>
                  <tr>
                    
                    <td>01000010</td> <td>B</td>
                  </tr>
                  <tr>
                    
                    <td>01000011</td> <td>C</td>
                  </tr>
                  <tr>
                    
                    <td>01000100</td> <td>D</td>
                  </tr>
                  <tr>
                    
                    <td>01000101</td> <td>E</td>
                  </tr>
                  <tr>
                    
                    <td>01000110</td> <td>F</td>
                  </tr>
                  <tr>
                    
                    <td>01000111</td> <td>G</td>
                  </tr>
                  <tr>
                    
                    <td>01001000</td> <td>H</td>
                  </tr>
                  <tr>
                    
                    <td>01001001</td> <td>I</td>
                  </tr>
                  <tr>
                    
                    <td>01001010</td> <td>J</td>
                  </tr>
                  <tr>
                    
                    <td>01001011</td> <td>K</td>
                  </tr>
                  <tr>
                    
                    <td>01001100</td> <td>L</td>
                  </tr>
                  <tr>
                    
                    <td>01001101</td> <td>M</td>
                  </tr>
                  <tr>
                    
                    <td>01001110</td> <td>N</td>
                  </tr>
                  <tr>
                    
                    <td>01001111</td> <td>O</td>
                  </tr>
                  <tr>
                    
                    <td>01010000</td> <td>P</td>
                  </tr>
                  <tr>
                    
                    <td>01010001</td> <td>Q</td>
                  </tr>
                  <tr>
                    
                    <td>01010010</td> <td>R</td>
                  </tr>
                  <tr>
                    
                    <td>01010011</td> <td>S</td>
                  </tr>
                  <tr>
                    
                    <td>01010100</td> <td>T</td>
                  </tr>
                  <tr>
                    
                    <td>01010101</td> <td>U</td>
                  </tr>
                  <tr>
                    
                    <td>01010110</td> <td>V</td>
                  </tr>
                  <tr>
                    
                    <td>01010111</td> <td>W</td>
                  </tr>
                  <tr>
                    
                    <td>01011000</td> <td>X</td>
                  </tr>
                  <tr>
                    
                    <td>01011001</td> <td>Y</td>
                  </tr>
                  <tr>
                    
                    <td>01011010</td> <td>Z</td>
                  </tr>
                  <tr>
                    
                    <td>01011011</td> <td>[</td>
                  </tr>
                  <tr>
                    
                    <td>01011100</td> <td>\</td>
                  </tr>
                  <tr>
                    
                    <td>01011101</td> <td>]</td>
                  </tr>
                  <tr>
                    
                    <td>01011110</td> <td>^</td>
                  </tr>
                  <tr>
                    
                    <td>01011111</td> <td>_</td>
                  </tr>
                  <tr>
                    
                    <td>01100000</td> <td>`</td>
                  </tr>
                  <tr>
                    
                    <td>01100001</td> <td>a</td>
                  </tr>
                  <tr>
                    
                    <td>01100010</td> <td>b</td>
                  </tr>
                  <tr>
                    
                    <td>01100011</td> <td>c</td>
                  </tr>
                  <tr>
                    
                    <td>01100100</td> <td>d</td>
                  </tr>
                  <tr>
                    
                    <td>01100101</td> <td>e</td>
                  </tr>
                  <tr>
                    
                    <td>01100110</td> <td>f</td>
                  </tr>
                  <tr>
                    
                    <td>01100111</td> <td>g</td>
                  </tr>
                  <tr>
                    
                    <td>01101000</td> <td>h</td>
                  </tr>
                  <tr>
                    
                    <td>01101001</td> <td>i</td>
                  </tr>
                  <tr>
                    
                    <td>01101010</td> <td>j</td>
                  </tr>
                  <tr>
                    
                    <td>01101011</td> <td>k</td>
                  </tr>
                  <tr>
                    
                    <td>01101100</td> <td>l</td>
                  </tr>
                  <tr>
                    
                    <td>01101101</td> <td>m</td>
                  </tr>
                  <tr>
                    
                    <td>01101110</td> <td>n</td>
                  </tr>
                  <tr>
                    
                    <td>01101111</td> <td>o</td>
                  </tr>
                  <tr>
                    
                    <td>01110000</td> <td>p</td>
                  </tr>
                  <tr>
                    
                    <td>01110001</td> <td>q</td>
                  </tr>
                  <tr>
                    
                    <td>01110010</td> <td>r</td>
                  </tr>
                  <tr>
                    
                    <td>01110011</td> <td>s</td>
                  </tr>
                  <tr>
                    
                    <td>01110100</td> <td>t</td>
                  </tr>
                  <tr>
                    
                    <td>01110101</td> <td>u</td>
                  </tr>
                  <tr>
                    
                    <td>01110110</td> <td>v</td>
                  </tr>
                  <tr>
                    
                    <td>01110111</td> <td>w</td>
                  </tr>
                  <tr>
                    
                    <td>01111000</td> <td>x</td>
                  </tr>
                  <tr>
                    
                    <td>01111001</td> <td>y</td>
                  </tr>
                  <tr>
                    
                    <td>01111010</td> <td>z</td>
                  </tr>
                  <tr>
                    
                    <td>01111011</td> <td></td>
                  </tr>
                  <tr>
                    
                    <td>01111100</td> <td>|</td>
                  </tr>
                  <tr>
                    
                    <td>01111101</td> <td></td>
                  </tr>
                  <tr>
                    
                    <td>01111110</td> <td>~</td>
                  </tr>
                  <tr>
                    
                    <td>01111111</td> <td>DEL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
