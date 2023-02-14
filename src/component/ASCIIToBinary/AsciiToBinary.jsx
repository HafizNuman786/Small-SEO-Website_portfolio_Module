import React from "react";
import { useState } from "react";
import styles from "./AsciiToBinary.module.css";
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
              <h4>Binary To ASCII</h4>
            </div>
            <p class="sub_text mx-auto my-4 px-4 fs-7 text-center">
              Convert ASCII characters to binary numbers, Enter or past an ASCII
              text in a text box i.e. "hello" and enter the convert button and
              it will result in a translated binary code. You can convert 128
              ASCII characters to binary code.
            </p>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                ASCII To Binary:
                <button
                  className={`btn btn-primary position-absolute end-0 ${styles.text_convertbtn}`}
                >
                  Sample
                </button>
              </div>
              <div className={`col p-4 mt-3 ${styles.input_section}`}>
                <div className="textArea">
                  <textarea
                    placeholder="Paste Your ASCII Here"
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
              <h2>How To Convert ASCII To Binary With Our Free Tool</h2>
              <p>
                ASCII to binary conversion through our online tool is quite easy
                when compared to doing it manually. You won’t need to transform
                each letter by using the ASCII characters to the binary table.
                Also, the ASCII to the binary converter is available on all
                operating systems; all you need is the link to where you already
                are, a working internet connection and the below-given steps.
              </p>
              <ol className={`mt-3`}>
                <li>
                  After reaching the page of
                  <strong>ASCII to the Binary Converter</strong> you will see a
                  text box with the title “Enter your ASCII,” this is where you
                  will be writing your ASCII characters (English text) for
                  transformation to a binary like shown in the image.
                  <br /> &nbsp;
                </li>
                <li>
                  After writing or pasting your ASCII codes for conversion just
                  hit the <strong>Convert To Binary</strong> button and the
                  results will be displayed in the following manner under the
                  tool.
                  <br /> &nbsp;
                </li>
                <li>
                  You can copy the result, click on the
                  <strong>Copy to clipboard</strong> button for copying all
                  instantly.
                </li>
              </ol>
              <p>
                If you want to convert binary values back to its original ASCII
                Characters use this
                <a
                  className={`text-decoration-none mx-1`}
                  data-name="12-sst"
                  href="https://smallseotools.com/binary-to-ascii/"
                >
                  binary to ASCII converter
                </a>
                by SmallSEOTools.com
              </p>
              <h2>ASCII Characters and Binary Numbers System</h2>
              <p>
                The (ASCII) American Standard Code for Information Interchange
                is an encoding system. Which was designed for old computers and
                other machines like telephone and telegraphic codes etc. it was
                then based on 128 symbols which include numbers, alphabets and
                special characters (punctuation marks, space and delete
                characters). At that time the commands used were few like start,
                wait, or complete. Today, with the evolving programs and number
                system, ASCII systems are used widely in almost every computing
                and telecom equipment.
              </p>
              <p>
                A computer can only understand the number systems and the binary
                numbers are the most commonly used system in the machines. If
                you don’t know ASCII stores information technically in ones and
                zeros, the significant difference in both these formats is you
                can upload various text type files or CGI documents in ASCII but
                when it comes to files like audio, images, etc. then the binary
                mode is considered as it is used to send files as raw data. An
                ASCII is basically a character set that consists of 128
                <strong>7-bit</strong> characters.
              </p>
              <p>
                Our ASCII to Binary converter can let you convert all the
                characters into the binary code. All the characters have been
                assigned a particular binary number of eight digits. For
                example, if you write the word “SEA,” you will see these numbers
                <strong>(01110011 01100101 01100001)</strong>, where the first
                series represents the letter S and so on. As a MAC-based system
                uses these two formats for sending PostScript files, you can
                convert all the data to binary using our
                <a className={`text-decoration-none mx-1`}
                  data-name="13-sst"
                  href="https://smallseotools.com/ascii-to-binary/"
                >
                  ASCII to Binary
                </a>
                online converter tool.
              </p>
              <h2>ASCII Text To Binary Code – The Main Differences</h2>
              <p>
                In ASCII, the protocol is assembled with data which is encoded
                with the values of ASCII. The minimal addition of controls that
                are added in the protocol is then translated by the printer. All
                the communications like Ethernet, parallel and serial support
                ASCII, and have considered it a standard.
              </p>
              <p>
                If we talk about the files in a computer, they are comprised of
                tiny fragments of data, which is known as bits. The most common
                example of an ASCII file can be a text file with no formatting
                or styling. ASCII characters occupy 7-bits out of eight, which
                means seven bits are needed to represent an ASCII character.
              </p>
              <p>
                Which also means you are not using the 8th part of the byte. A
                binary file doesn’t have such limitations and/or restrictions.
                An ASCII is used in various places today such as web pages,
                HTML, etc. The reason is each ASCII character has a unique
                function or meaning that can only be read by the browsers.
              </p>
              <p>
                Whereas, Binary modes are used to send files that are
                executable, compressed or are images. If you have ever tried
                uploading an image in ASCII mode, then you might have noticed a
                mess displaying on the page where the picture was supposed to be
                viewed.
              </p>
              <p>
                Which happens because the ASCII code has corrupted the coding
                because binary encoding is done in BCP (Binary Communication
                Protocol) where each byte is built in one of the 256-bit
                patterns. A binary file is a series of ones and zeros in
                compound configurations. What differs is these characters can be
                used to build text, images or any kind of data which means
                lesser characters are required to represent most of the elements
                of language and operator names than in the ASCII coding.
              </p>
              <h2>ASCII Characters To Binary Numbers Conversion Table</h2>
              <p>
                Each character symbol must have an integer value representing it
                in the electronic device because all the electronic devices only
                deal with numbers (i.e “01100001” binary number representing “a”
                character) that’s why each number has its own ASCII code. So,
                with a standard representation for each character electronic
                devices can communicate with each other. Get binary codes of
                characters from the ASCII - binary character table.
              </p>

              <table className={`table table-bordered`}>
                
                <tbody>
                  
                  <tr>
                    
                    <th>ASCII</th> <th>Binary</th>
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
                    
                    <td>w</td> <td>01110111</td>
                  </tr>
                  <tr>
                    
                    <td>x</td> <td>01111000</td>
                  </tr>
                  <tr>
                    
                    <td>y</td> <td>01111001</td>
                  </tr>
                  <tr>
                    
                    <td>z</td> <td>01111010</td>
                  </tr>
                  <tr>
                    
                    <td></td> <td>01111011</td>
                  </tr>
                  <tr>
                    
                    <td>|</td> <td>01111100</td>
                  </tr>
                  <tr>
                    
                    <td></td> <td>01111101</td>
                  </tr>
                  <tr>
                    
                    <td>~</td> <td>01111110</td>
                  </tr>
                  <tr>
                    
                    <td>DEL</td> <td>01111111</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
              <p>Note: You can also do some other conversions like:&nbsp;<a className={`text-decoration-none mx-1`} data-name="9-sst" href="https://smallseotools.com/binary-to-text-tool/">binary to text</a> or <a className={`text-decoration-none mx-1`} data-name="8-sst" href="https://smallseotools.com/text-to-binary/">text to binary</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
