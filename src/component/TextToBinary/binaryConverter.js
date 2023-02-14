import React from "react";
import { useState } from "react";
import styles from "./binaryconverter.module.css";

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
            <div className="text-center border-bottom p-4">
              <h4>Text To Binary Converter</h4>
            </div>
            <div className="col justify-content-center my-4">
              <p className="fs-6 lh-base text-center">
                Convert any ASCII Text into Binary numbers.Text to Binary tool
                is one of the free tools provided by SST for Text
                <br /> conversion.Just enter any English text, of a single
                character, word, or a long string to convert into a binary code.
              </p>
            </div>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-4 ${styles.hpaste}`}
              >
                Enter Or Paste Text To Convert
                <button
                  className={`btn btn-primary  position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your Text Here"
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
            className={`col-md-8 border-top border-start border-end bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>About Text To Binary Conversion Online Tool.</h2>
              <p>
                At SmallSEOTools, our text to binary converter is your best
                option to get your English words converted to binary digits
                (binary numbers 0 and 1) that can be interpreted via electronic
                machines. When Translated, the text becomes a long string of
                numbers, due to the fact that its own 8-bits code (one byte)
                represents each letter. For instance, a single letter A is
                represented in binary as one byte 01000001.
              </p>
              <h2>Why We Use Text Converter to Get Binary Code?</h2>
              <p>
                In the computer coding system, binary code is basically used to
                represent text or instructions for a system to interpret. You
                need to interact with the electronic device using the language
                that it understands, and this is basically done with Text
                converter to provide binary code. There are quite a number of
                reasons you might require an English text to a binary
                translator. Binary code has been used for centuries and is
                commonly used in computers. When you need to convert text into a
                string of binary numbers consisting of 0 and 1, you need an
                efficient letter to number converter.
              </p>
              <h2>
                Save Time And Energy With Conversion of Text File To Binary File
              </h2>
              <p>
                When you need a quick functional machine to confirm that what
                will be the binary equivalent number of the ASCII text, it would
                be advisable to use an online letter to binary conversion tool.
                This is less challenging and can be done in a short time.
              </p>
              <p>
                Converting English Text to Binary will allow you to send an
                encoded message which any random person wouldn’t have access to,
                thereby securing sensitive information from unauthorized access.
                The actual purpose of ASCII text is to use in electronic
                equipment which is a standard for character-sets
              </p>
              <p>
                Our easy-to-use text converter enables you to convert letters to
                binary for free and without the constraints of unnecessary
                details or instructions. It is an online-based tool that does
                not require any special installation or expertise before it can
                be used. All that is required is that you give your text and it
                would get converted to binary codes in a matter of seconds.
              </p>
              <h3>How To Use Text To Binary Tool</h3>
              <ul>
                <li>
                  Get started by visiting our tool’s web page at
                  https://smallseotools.com/text-to-binary
                </li>
                <li>
                  Enter text in the box indicated or upload your text file.
                </li>
                <li>Click on “Convert to Binary” button</li>
                <li>
                  That’s it! Your text immediately gets displayed in its binary
                  form. Save to clipboard or download in a text file.
                </li>
              </ul>
              <p>
                if you want to translate ASCII number to binary code, you can
                use our
                <a
                  href="https://smallseotools.com/ascii-to-binary/"
                  data-name="13-sst"
                >
                  ASCII to binary converter
                </a>
              </p>
              <p>
                Our tool functions as a text to binary code generator where
                words are accurately translated to binary codes without
                mistakes. Doing this manually might result in errors that would
                affect the final outcome of the code. Thus, the best option
                would be using a reliable and efficient text file to binary file
                converter. Just the same way a
                <a
                  href="https://smallseotools.com/binary-to-text-tool/"
                  data-name="9-sst"
                >
                  binary to text decoder
                </a>
                might be needed to decode what is the English text encrypted in
                binary code, our tool can reverse this function and encode plain
                text. You can try this out by trying to convert the letters of
                your name to numbers in binary. You are however not limited to
                one-word texts. You can equally paste a long English word of
                string and simply convert a complete text file to binary format.
                Try out our
                <a
                  href="https://smallseotools.com/text-to-binary/"
                  data-name="8-sst"
                >
                  Text to Binary Converter
                </a>
                today and get your tasks done with ease and accuracy.
              </p>
              <h2>How to Convert Text to Binary Manually</h2>
              <p>
                Although there is a manual calculation that can be done. See
                ASCII(text) to binary table below, Translate text to binary with
                the help of ASCII table It’s just simple math, ASCII pronounced
                as ask-ee, ASCII is the acronym for the American Standard Code
                for Information Interchange.
              </p>
              <table className={`border w-100 mt-4`}>
                <tbody>
                  <tr>
                    <td className={`border p-3`}>&nbsp;</td>
                    <td className={`p-3`}>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <h2>Text To Binary Conversion Table</h2>
              <p>
                Get the binary numbers of English text from the Text - Binary
                conversion table
              </p>

              <table className={`table table-bordered mt-3`}>
                <tbody>
                  <tr>
                    <th>Text</th> <th>Binary</th>
                  </tr>
                  <tr>
                    <td>NUL</td> <td>00000000</td>
                  </tr>
                  <tr>
                    <td>SOH</td> <td>00000001</td>
                  </tr>
                  <tr>
                    <td>STX</td> <td>00000010</td>
                  </tr>
                  <tr>
                    <td>ETX</td> <td>00000011</td>
                  </tr>
                  <tr>
                    <td>EOT</td> <td>00000100</td>
                  </tr>
                  <tr>
                    <td>ENQ</td> <td>00000101</td>
                  </tr>
                  <tr>
                    <td>ACK</td> <td>00000110</td>
                  </tr>
                  <tr>
                    <td>BEL</td> <td>00000111</td>
                  </tr>
                  <tr>
                    <td>BS</td> <td>00001000</td>
                  </tr>
                  <tr>
                    <td>HT</td> <td>00001001</td>
                  </tr>
                  <tr>
                    <td>LF</td> <td>00001010</td>
                  </tr>
                  <tr>
                    <td>VT</td> <td>00001011</td>
                  </tr>
                  <tr>
                    <td>FF</td> <td>00001100</td>
                  </tr>
                  <tr>
                    <td>CR</td> <td>00001101</td>
                  </tr>
                  <tr>
                    <td>SO</td> <td>00001110</td>
                  </tr>
                  <tr>
                    <td>SI</td> <td>00001111</td>
                  </tr>
                  <tr>
                    <td>DLE</td> <td>00010000</td>
                  </tr>
                  <tr>
                    <td>DC1</td> <td>00010001</td>
                  </tr>
                  <tr>
                    <td>DC2</td> <td>00010010</td>
                  </tr>
                  <tr>
                    <td>DC3</td> <td>00010011</td>
                  </tr>
                  <tr>
                    <td>DC4</td> <td>00010100</td>
                  </tr>
                  <tr>
                    <td>NAK</td> <td>00010101</td>
                  </tr>
                  <tr>
                    <td>SYN</td> <td>00010110</td>
                  </tr>
                  <tr>
                    <td>ETB</td> <td>00010111</td>
                  </tr>
                  <tr>
                    <td>CAN</td> <td>00011000</td>
                  </tr>
                  <tr>
                    <td>EM</td> <td>00011001</td>
                  </tr>
                  <tr>
                    <td>SUB</td> <td>00011010</td>
                  </tr>
                  <tr>
                    <td>ESC</td> <td>00011011</td>
                  </tr>
                  <tr>
                    <td>FS</td> <td>00011100</td>
                  </tr>
                  <tr>
                    <td>GS</td> <td>00011101</td>
                  </tr>
                  <tr>
                    <td>RS</td> <td>00011110</td>
                  </tr>
                  <tr>
                    <td>US</td> <td>00011111</td>
                  </tr>
                  <tr>
                    <td>Space</td> <td>00100000</td>
                  </tr>
                  <tr>
                    <td>!</td> <td>00100001</td>
                  </tr>
                  <tr>
                    <td>"</td> <td>00100010</td>
                  </tr>
                  <tr>
                    <td>#</td> <td>00100011</td>
                  </tr>
                  <tr>
                    <td>$</td> <td>00100100</td>
                  </tr>
                  <tr>
                    <td>%</td> <td>00100101</td>
                  </tr>
                  <tr>
                    <td>&amp;</td> <td>00100110</td>
                  </tr>
                  <tr>
                    <td>'</td> <td>00100111</td>
                  </tr>
                  <tr>
                    <td>(</td> <td>00101000</td>
                  </tr>
                  <tr>
                    <td>)</td> <td>00101001</td>
                  </tr>
                  <tr>
                    <td>*</td> <td>00101010</td>
                  </tr>
                  <tr>
                    <td>+</td> <td>00101011</td>
                  </tr>
                  <tr>
                    <td>-</td> <td>00101101</td>
                  </tr>
                  <tr>
                    <td>.</td> <td>00101110</td>
                  </tr>
                  <tr>
                    <td>/</td> <td>00101111</td>
                  </tr>
                  <tr>
                    <td>0</td> <td>00110000</td>
                  </tr>
                  <tr>
                    <td>1</td> <td>00110001</td>
                  </tr>
                  <tr>
                    <td>2</td> <td>00110010</td>
                  </tr>
                  <tr>
                    <td>3</td> <td>00110011</td>
                  </tr>
                  <tr>
                    <td>4</td> <td>00110100</td>
                  </tr>
                  <tr>
                    <td>5</td> <td>00110101</td>
                  </tr>
                  <tr>
                    <td>6</td> <td>00110110</td>
                  </tr>
                  <tr>
                    <td>7</td> <td>00110111</td>
                  </tr>
                  <tr>
                    <td>8</td> <td>00111000</td>
                  </tr>
                  <tr>
                    <td>9</td> <td>00111001</td>
                  </tr>
                  <tr>
                    <td>:</td> <td>00111010</td>
                  </tr>
                  <tr>
                    <td>;</td> <td>00111011</td>
                  </tr>
                  <tr>
                    <td>&lt;</td> <td>00111100</td>
                  </tr>
                  <tr>
                    <td>=</td> <td>00111101</td>
                  </tr>
                  <tr>
                    <td>&gt;</td> <td>00111110</td>
                  </tr>
                  <tr>
                    <td>?</td> <td>00111111</td>
                  </tr>
                  <tr>
                    <td>@</td> <td>01000000</td>
                  </tr>
                  <tr>
                    <td>A</td> <td>01000001</td>
                  </tr>
                  <tr>
                    <td>B</td> <td>01000010</td>
                  </tr>
                  <tr>
                    <td>C</td> <td>01000011</td>
                  </tr>
                  <tr>
                    <td>D</td> <td>01000100</td>
                  </tr>
                  <tr>
                    <td>E</td> <td>01000101</td>
                  </tr>
                  <tr>
                    <td>F</td> <td>01000110</td>
                  </tr>
                  <tr>
                    <td>G</td> <td>01000111</td>
                  </tr>
                  <tr>
                    <td>H</td> <td>01001000</td>
                  </tr>
                  <tr>
                    <td>I</td> <td>01001001</td>
                  </tr>
                  <tr>
                    <td>J</td> <td>01001010</td>
                  </tr>
                  <tr>
                    <td>K</td> <td>01001011</td>
                  </tr>
                  <tr>
                    <td>L</td> <td>01001100</td>
                  </tr>
                  <tr>
                    <td>M</td> <td>01001101</td>
                  </tr>
                  <tr>
                    <td>N</td> <td>01001110</td>
                  </tr>
                  <tr>
                    <td>O</td> <td>01001111</td>
                  </tr>
                  <tr>
                    <td>P</td> <td>01010000</td>
                  </tr>
                  <tr>
                    <td>Q</td> <td>01010001</td>
                  </tr>
                  <tr>
                    <td>R</td> <td>01010010</td>
                  </tr>
                  <tr>
                    <td>S</td> <td>01010011</td>
                  </tr>
                  <tr>
                    <td>T</td> <td>01010100</td>
                  </tr>
                  <tr>
                    <td>U</td> <td>01010101</td>
                  </tr>
                  <tr>
                    <td>V</td> <td>01010110</td>
                  </tr>
                  <tr>
                    <td>W</td> <td>01010111</td>
                  </tr>
                  <tr>
                    <td>X</td> <td>01011000</td>
                  </tr>
                  <tr>
                    <td>Y</td> <td>01011001</td>
                  </tr>
                  <tr>
                    <td>Z</td> <td>01011010</td>
                  </tr>
                  <tr>
                    <td>[</td> <td>01011011</td>
                  </tr>
                  <tr>
                    <td>\</td> <td>01011100</td>
                  </tr>
                  <tr>
                    <td>]</td> <td>01011101</td>
                  </tr>
                  <tr>
                    <td>^</td> <td>01011110</td>
                  </tr>
                  <tr>
                    <td>_</td> <td>01011111</td>
                  </tr>
                  <tr>
                    <td>`</td> <td>01100000</td>
                  </tr>
                  <tr>
                    <td>a</td> <td>01100001</td>
                  </tr>
                  <tr>
                    <td>b</td> <td>01100010</td>
                  </tr>
                  <tr>
                    <td>c</td> <td>01100011</td>
                  </tr>
                  <tr>
                    <td>d</td> <td>01100100</td>
                  </tr>
                  <tr>
                    <td>e</td> <td>01100101</td>
                  </tr>
                  <tr>
                    <td>f</td> <td>01100110</td>
                  </tr>
                  <tr>
                    <td>g</td> <td>01100111</td>
                  </tr>
                  <tr>
                    <td>h</td> <td>01101000</td>
                  </tr>
                  <tr>
                    <td>i</td> <td>01101001</td>
                  </tr>
                  <tr>
                    <td>j</td> <td>01101010</td>
                  </tr>
                  <tr>
                    <td>k</td> <td>01101011</td>
                  </tr>
                  <tr>
                    <td>l</td> <td>01101100</td>
                  </tr>
                  <tr>
                    <td>m</td> <td>01101101</td>
                  </tr>
                  <tr>
                    <td>n</td> <td>01101110</td>
                  </tr>
                  <tr>
                    <td>o</td> <td>01101111</td>
                  </tr>
                  <tr>
                    <td>p</td> <td>01110000</td>
                  </tr>
                  <tr>
                    <td>q</td> <td>01110001</td>
                  </tr>
                  <tr>
                    <td>r</td> <td>01110010</td>
                  </tr>
                  <tr>
                    <td>s</td> <td>01110011</td>
                  </tr>
                  <tr>
                    <td>t</td> <td>01110100</td>
                  </tr>
                  <tr>
                    <td>u</td> <td>01110101</td>
                  </tr>
                  <tr>
                    <td>v</td> <td>01110110</td>
                  </tr>
                  <tr>
                    <td>w</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>x</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>y</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>z</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td></td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>|</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td></td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>~</td> <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>DEL</td> <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>

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
                    
                    <td>00111100</td> <td>&lt;&lt; /td&gt;</td>
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
