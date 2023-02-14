import React from "react";
import { useState } from "react";
import styles from "./BinaryToAscii.module.css";
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
              Convert Binary code to ASCII text. Just enter a binary number i.e.
              01000001 and click the "Convert To ASCII" <br />
              button, You can Enter Binary value of unlimited length to
              translate it into ASCII character. Our tool:Binary to ASCII <br />
              Converter can transform your given binary numbers to ASCII on the
              click of a button.
            </p>
            <div className="form-group p-4">
              <div
                className={`col text-center col-sm-12  position-relative fw-bold p-2 ${styles.hpaste}`}
              >
                Enter your Binary:
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
                Convert To ASCII
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
            className={`col-md-8 border-top border-start border-bottom border-end bg-white  p-0 mt-3`}
          >
            <div className={`p-4 text-align-left mt-4 ms-3 me-3`}>
              <h2>How Does This Online Binary to ASCII Converter Work</h2>
              <p>
                You can convert all of your binary codes to ASCII characters, as
                the sequence of ones and zeros can be really confusing when
                trying to switch manually. It is also quite a time-consuming
                task when you have to match each binary bit to find its ASCII
                character. Not to worry, Translation of binary numbers to ASCII
                text is quite easy; you just have to paste the binary string and
                it will result in a translated ASCII Word. our Binary to ASCII
                text converter can transform the data for you by following the
                below-given steps:
              </p>
              <h3>How To Translate Binary to ASCII Text In 2 Simple Steps.</h3>
              <ol>
                
                <li>
                  You can translate binary to ASCII text by searching for a
                  large text box with the title
                  <strong> “Enter your Binary”</strong> on this page. In the
                  text box, you can either choose to write the numbers yourself
                  or copy and paste from an already saved file. The below-given
                  picture shows how to write binary numbers.
                </li>
                <li>
                  When you are done writing all you have to do is press the
                  button “Convert To ASCII,” and the results will be displayed
                  instantly. The translated material can be copied
                  <strong>to ClipBoard</strong>.
                </li>
              </ol>
              <p>
                You can also Convert ASCII Values back to Binary numbers with
                <a
                  data-name="13-sst"
                  href="https://smallseotools.com/ascii-to-binary/"
                >
                  
                  ASCII to Binary Tool
                </a>
                by SmallSEOTools.com
              </p>
              <h2>
                Why We Use Binary ASCII Converter: Basic Concepts Explained
              </h2>
              <h3>Binary Number System</h3>
              <p>
                Binary numbers are a part of a computer system and all other
                machines. ASCII and binary are two different types of
                communication formats that are available when you are sending a
                PostScript file from a system that is MAC-based. The ASCII mode
                is used to transfer textual data whereas binary mode can
                transfer files as raw data which includes audio, pictures, and
                GIF files.
              </p>
              <p>
                ASCII stands for American Standard Code for Information
                Interchange these codes were developed when computers were
                invented.
              </p>
              <p>
                The ASCII codes consist of 128 7-bit characters, where 7-bits
                are required when you are representing an ASCII character. You
                can easily create an ASCII file using a text editor like notepad
                and if you aren’t already aware ASCII can store information in
                the form of ones and zeros. Also, these files are stored like
                you save regular files because a computer only understands this
                system.
              </p>
              <p>
                All the ASCII characters are assigned a unique binary number so
                the text you enter will be matched to the already allocated
                binary number list and upon processing will convert all the
                Binary numbers to ASCII text. There are 128 characters in the
                ASCII standard which include 32 control characters that are
                unprintable and used to control external devices such as
                printers, Other 94 characters from 32-127 are printable
                characters represent digits, letters, graphic characters, a
                space character, a delete character, and a few miscellaneous
                symbols.
              </p>
              <p>
                In the beginning, the commands that machines used were limited
                to “start, wait, and complete” but today The ASCII standard is
                utilized in every device.
              </p>
              <h2>Binary &amp; ASCII Encoding, The Main Points To Notice</h2>
              <p>
                As the coded characters set contains 128 7-bit characters,
                minimal control codes are placed in the data, and today all the
                communication mediums have considered the ASCII a standard.
              </p>
              <p>
                The files on the computer are stored in the form of small pieces
                which are known as bits, and as 7-bits are necessitated to
                indicate an ASCII character, you are not using the 8th part of
                the bit which also means the most critical bit of one byte is
                not being utilized.
              </p>
              <p>
                When it comes to binary files, they don’t have such
                restrictions, all the 256-bit patterns can work, and any pattern
                can be added in any byte of the data. ASCII files have vital
                importance when it comes to programming and development of web
                pages. All the ASCII codes have a specific purpose and HTML is
                also written in ASCII plus every character has a unique meaning
                that can be read by the browsers to display the information.
              </p>
              <p>
                Today, the binary modes are used to transfer .exe files,
                compressed versions of records, and various types of images.
                When we talk about browsers, they use the binary information
                which is coded in it to analyze the HTML ASCII file and
                transform it into a displayable webpage. Do you know that the
                data of Photoshop and other programs generated files are
                considered to be binary files? You might have come across the
                term encoding many times. It means the data is being converted
                to binary code.
              </p>
              <h2>Where ASCII Characters Stored and Retrieved in Memory?</h2>
              <p>
                The Truth is characters do not exist, they do not exist in any
                kind of data storage of computers. Computers and electronic
                devices just store data in binary numbers and nothing else. In
                order to store letters, words, and texts, computer devices have
                to follow common character-encoding schemes to support
                characters.
              </p>
              <h2>Binary To ASCII Characters Conversion Table</h2>
              <table className={`table table-bordered`}>
                
                <tbody>
                  
                  <tr>
                    
                    <th>Binary</th> <th>ASCII</th> <th>Hexadecimal</th>
                  </tr>
                  <tr>
                    
                    <td>00000000</td> <td>NUL</td> <td>00</td>
                  </tr>
                  <tr>
                    
                    <td>00000001</td> <td>SOH</td> <td>01</td>
                  </tr>
                  <tr>
                    
                    <td>00000010</td> <td>STX</td> <td>02</td>
                  </tr>
                  <tr>
                    
                    <td>00000011</td> <td>ETX</td> <td>03</td>
                  </tr>
                  <tr>
                    
                    <td>00000100</td> <td>EOT</td> <td>04</td>
                  </tr>
                  <tr>
                    
                    <td>00000101</td> <td>ENQ</td> <td>05</td>
                  </tr>
                  <tr>
                    
                    <td>00000110</td> <td>ACK</td> <td>06</td>
                  </tr>
                  <tr>
                    
                    <td>00000111</td> <td>BEL</td> <td>07</td>
                  </tr>
                  <tr>
                    
                    <td>00001000</td> <td>BS</td> <td>08</td>
                  </tr>
                  <tr>
                    
                    <td>00001001</td> <td>HT</td> <td>09</td>
                  </tr>
                  <tr>
                    
                    <td>00001010</td> <td>LF</td> <td>0A</td>
                  </tr>
                  <tr>
                    
                    <td>00001011</td> <td>VT</td> <td>0B</td>
                  </tr>
                  <tr>
                    
                    <td>00001100</td> <td>FF</td> <td>0C</td>
                  </tr>
                  <tr>
                    
                    <td>00001101</td> <td>CR</td> <td>0D</td>
                  </tr>
                  <tr>
                    
                    <td>00001110</td> <td>SO</td> <td>0E</td>
                  </tr>
                  <tr>
                    
                    <td>00001111</td> <td>SI</td> <td>0F</td>
                  </tr>
                  <tr>
                    
                    <td>00010000</td> <td>DLE</td> <td>10</td>
                  </tr>
                  <tr>
                    
                    <td>00010001</td> <td>DC1</td> <td>11</td>
                  </tr>
                  <tr>
                    
                    <td>00010010</td> <td>DC2</td> <td>12</td>
                  </tr>
                  <tr>
                    
                    <td>00010011</td> <td>DC3</td> <td>13</td>
                  </tr>
                  <tr>
                    
                    <td>00010100</td> <td>DC4</td> <td>14</td>
                  </tr>
                  <tr>
                    
                    <td>00010101</td> <td>NAK</td> <td>15</td>
                  </tr>
                  <tr>
                    
                    <td>00010110</td> <td>SYN</td> <td>16</td>
                  </tr>
                  <tr>
                    
                    <td>00010111</td> <td>ETB</td> <td>17</td>
                  </tr>
                  <tr>
                    
                    <td>00011000</td> <td>CAN</td> <td>18</td>
                  </tr>
                  <tr>
                    
                    <td>00011001</td> <td>EM</td> <td>19</td>
                  </tr>
                  <tr>
                    
                    <td>00011010</td> <td>SUB</td> <td>1A</td>
                  </tr>
                  <tr>
                    
                    <td>00011011</td> <td>ESC</td> <td>1B</td>
                  </tr>
                  <tr>
                    
                    <td>00011100</td> <td>FS</td> <td>1C</td>
                  </tr>
                  <tr>
                    
                    <td>00011101</td> <td>GS</td> <td>1D</td>
                  </tr>
                  <tr>
                    
                    <td>00011110</td> <td>RS</td> <td>1E</td>
                  </tr>
                  <tr>
                    
                    <td>00011111</td> <td>US</td> <td>1F</td>
                  </tr>
                  <tr>
                    
                    <td>00100000</td> <td>Space</td> <td>20</td>
                  </tr>
                  <tr>
                    
                    <td>00100001</td> <td>!</td> <td>21</td>
                  </tr>
                  <tr>
                    
                    <td>00100010</td> <td>"</td> <td>22</td>
                  </tr>
                  <tr>
                    
                    <td>00100011</td> <td>#</td> <td>23</td>
                  </tr>
                  <tr>
                    
                    <td>00100100</td> <td>$</td> <td>24</td>
                  </tr>
                  <tr>
                    
                    <td>00100101</td> <td>%</td> <td>25</td>
                  </tr>
                  <tr>
                    
                    <td>00100110</td> <td>&amp;</td> <td>26</td>
                  </tr>
                  <tr>
                    
                    <td>00100111</td> <td>'</td> <td>27</td>
                  </tr>
                  <tr>
                    
                    <td>00101000</td> <td>(</td> <td>28</td>
                  </tr>
                  <tr>
                    
                    <td>00101001</td> <td>)</td> <td>29</td>
                  </tr>
                  <tr>
                    
                    <td>00101010</td> <td>*</td> <td>2A</td>
                  </tr>
                  <tr>
                    
                    <td>00101011</td> <td>+</td> <td>2B</td>
                  </tr>
                  <tr>
                    
                    <td>00101101</td> <td>-</td> <td>2D</td>
                  </tr>
                  <tr>
                    
                    <td>00101110</td> <td>.</td> <td>2E</td>
                  </tr>
                  <tr>
                    
                    <td>00101111</td> <td>/</td> <td>2F</td>
                  </tr>
                  <tr>
                    
                    <td>00110000</td> <td>0</td> <td>30</td>
                  </tr>
                  <tr>
                    
                    <td>00110001</td> <td>1</td> <td>31</td>
                  </tr>
                  <tr>
                    
                    <td>00110010</td> <td>2</td> <td>32</td>
                  </tr>
                  <tr>
                    
                    <td>00110011</td> <td>3</td> <td>33</td>
                  </tr>
                  <tr>
                    
                    <td>00110100</td> <td>4</td> <td>34</td>
                  </tr>
                  <tr>
                    
                    <td>00110101</td> <td>5</td> <td>35</td>
                  </tr>
                  <tr>
                    
                    <td>00110110</td> <td>6</td> <td>36</td>
                  </tr>
                  <tr>
                    
                    <td>00110111</td> <td>7</td> <td>37</td>
                  </tr>
                  <tr>
                    
                    <td>00111000</td> <td>8</td> <td>38</td>
                  </tr>
                  <tr>
                    
                    <td>00111001</td> <td>9</td> <td>39</td>
                  </tr>
                  <tr>
                    
                    <td>00111010</td> <td>:</td> <td>3A</td>
                  </tr>
                  <tr>
                    
                    <td>00111011</td> <td>;</td> <td>3B</td>
                  </tr>
                  <tr>
                    
                    <td>00111100</td> <td>&lt;</td> <td>3C</td>
                  </tr>
                  <tr>
                    
                    <td>00111101</td> <td>=</td> <td>3D</td>
                  </tr>
                  <tr>
                    
                    <td>00111110</td> <td>&gt;</td> <td>3E</td>
                  </tr>
                  <tr>
                    
                    <td>00111111</td> <td>?</td> <td>3F</td>
                  </tr>
                  <tr>
                    
                    <td>01000000</td> <td>@</td> <td>40</td>
                  </tr>
                  <tr>
                    
                    <td>01000001</td> <td>A</td> <td>41</td>
                  </tr>
                  <tr>
                    
                    <td>01000010</td> <td>B</td> <td>42</td>
                  </tr>
                  <tr>
                    
                    <td>01000011</td> <td>C</td> <td>43</td>
                  </tr>
                  <tr>
                    
                    <td>01000100</td> <td>D</td> <td>44</td>
                  </tr>
                  <tr>
                    
                    <td>01000101</td> <td>E</td> <td>45</td>
                  </tr>
                  <tr>
                    
                    <td>01000110</td> <td>F</td> <td>46</td>
                  </tr>
                  <tr>
                    
                    <td>01000111</td> <td>G</td> <td>47</td>
                  </tr>
                  <tr>
                    
                    <td>01001000</td> <td>H</td> <td>48</td>
                  </tr>
                  <tr>
                    
                    <td>01001001</td> <td>I</td> <td>49</td>
                  </tr>
                  <tr>
                    
                    <td>01001010</td> <td>J</td> <td>4A</td>
                  </tr>
                  <tr>
                    
                    <td>01001011</td> <td>K</td> <td>4B</td>
                  </tr>
                  <tr>
                    
                    <td>01001100</td> <td>L</td> <td>4C</td>
                  </tr>
                  <tr>
                    
                    <td>01001101</td> <td>M</td> <td>4D</td>
                  </tr>
                  <tr>
                    
                    <td>01001110</td> <td>N</td> <td>4E</td>
                  </tr>
                  <tr>
                    
                    <td>01001111</td> <td>O</td> <td>4F</td>
                  </tr>
                  <tr>
                    
                    <td>01010000</td> <td>P</td> <td>50</td>
                  </tr>
                  <tr>
                    
                    <td>01010001</td> <td>Q</td> <td>51</td>
                  </tr>
                  <tr>
                    
                    <td>01010010</td> <td>R</td> <td>52</td>
                  </tr>
                  <tr>
                    
                    <td>01010011</td> <td>S</td> <td>53</td>
                  </tr>
                  <tr>
                    
                    <td>01010100</td> <td>T</td> <td>54</td>
                  </tr>
                  <tr>
                    
                    <td>01010101</td> <td>U</td> <td>55</td>
                  </tr>
                  <tr>
                    
                    <td>01010110</td> <td>V</td> <td>56</td>
                  </tr>
                  <tr>
                    
                    <td>01010111</td> <td>W</td> <td>57</td>
                  </tr>
                  <tr>
                    
                    <td>01011000</td> <td>X</td> <td>58</td>
                  </tr>
                  <tr>
                    
                    <td>01011001</td> <td>Y</td> <td>59</td>
                  </tr>
                  <tr>
                    
                    <td>01011010</td> <td>Z</td> <td>5A</td>
                  </tr>
                  <tr>
                    
                    <td>01011011</td> <td>[</td> <td>5B</td>
                  </tr>
                  <tr>
                    
                    <td>01011100</td> <td>\</td> <td>5C</td>
                  </tr>
                  <tr>
                    
                    <td>01011101</td> <td>]</td> <td>5D</td>
                  </tr>
                  <tr>
                    
                    <td>01011110</td> <td>^</td> <td>5E</td>
                  </tr>
                  <tr>
                    
                    <td>01011111</td> <td>_</td> <td>5F</td>
                  </tr>
                  <tr>
                    
                    <td>01100000</td> <td>`</td> <td>60</td>
                  </tr>
                  <tr>
                    
                    <td>01100001</td> <td>a</td> <td>61</td>
                  </tr>
                  <tr>
                    
                    <td>01100010</td> <td>b</td> <td>62</td>
                  </tr>
                  <tr>
                    
                    <td>01100011</td> <td>c</td> <td>63</td>
                  </tr>
                  <tr>
                    
                    <td>01100100</td> <td>d</td> <td>64</td>
                  </tr>
                  <tr>
                    
                    <td>01100101</td> <td>e</td> <td>65</td>
                  </tr>
                  <tr>
                    
                    <td>01100110</td> <td>f</td> <td>66</td>
                  </tr>
                  <tr>
                    
                    <td>01100111</td> <td>g</td> <td>67</td>
                  </tr>
                  <tr>
                    
                    <td>01101000</td> <td>h</td> <td>68</td>
                  </tr>
                  <tr>
                    
                    <td>01101001</td> <td>i</td> <td>69</td>
                  </tr>
                  <tr>
                    
                    <td>01101010</td> <td>j</td> <td>6A</td>
                  </tr>
                  <tr>
                    
                    <td>01101011</td> <td>k</td> <td>6B</td>
                  </tr>
                  <tr>
                    
                    <td>01101100</td> <td>l</td> <td>6C</td>
                  </tr>
                  <tr>
                    
                    <td>01101101</td> <td>m</td> <td>6D</td>
                  </tr>
                  <tr>
                    
                    <td>01101110</td> <td>n</td> <td>6E</td>
                  </tr>
                  <tr>
                    
                    <td>01101111</td> <td>o</td> <td>6F</td>
                  </tr>
                  <tr>
                    
                    <td>01110000</td> <td>p</td> <td>70</td>
                  </tr>
                  <tr>
                    
                    <td>01110001</td> <td>q</td> <td>71</td>
                  </tr>
                  <tr>
                    
                    <td>01110010</td> <td>r</td> <td>72</td>
                  </tr>
                  <tr>
                    
                    <td>01110011</td> <td>s</td> <td>73</td>
                  </tr>
                  <tr>
                    
                    <td>01110100</td> <td>t</td> <td>74</td>
                  </tr>
                  <tr>
                    
                    <td>01110101</td> <td>u</td> <td>75</td>
                  </tr>
                  <tr>
                    
                    <td>01110110</td> <td>v</td> <td>76</td>
                  </tr>
                  <tr>
                    
                    <td>01110111</td> <td>w</td> <td>77</td>
                  </tr>
                  <tr>
                    
                    <td>01111000</td> <td>x</td> <td>78</td>
                  </tr>
                  <tr>
                    
                    <td>01111001</td> <td>y</td> <td>79</td>
                  </tr>
                  <tr>
                    
                    <td>01111010</td> <td>z</td> <td>7A</td>
                  </tr>
                  <tr>
                    
                    <td>01111011</td> <td></td> <td>7B</td>
                  </tr>
                  <tr>
                    
                    <td>01111100</td> <td>|</td> <td>7C</td>
                  </tr>
                  <tr>
                    
                    <td>01111101</td> <td></td> <td>7D</td>
                  </tr>
                  <tr>
                    
                    <td>01111110</td> <td>~</td> <td>7E</td>
                  </tr>
                  <tr>
                    
                    <td>01111111</td> <td>DEL</td> <td>7F</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
              <p>Note: You can also do some other conversions like:&nbsp;<a className={`text-decoration-none`} data-name="9-sst" href="https://smallseotools.com/binary-to-text-tool/">binary to text</a> or <a className={`text-decoration-none`} data-name="8-sst" href="https://smallseotools.com/text-to-binary/">text to binary</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
