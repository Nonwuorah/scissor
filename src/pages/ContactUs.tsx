import React from "react";

class contactUs extends React.Component {
    render() {
        
    return (
      <section className="contactUs">
        <div className="contact">
          <h1>Let's get in touch</h1>
        </div>
        <div className="formCU">
            <form action="contactUs.php" method="post">
            <div className="inputBoxP">
                <div className="inputBox">
               <label>First Name</label> <br/>
                    <input type="text" placeholder="First Name" required/>
            </div>
            <div className="inputBox">
                <label>Last Name</label> <br/>
                    <input type="text" placeholder="Last Name" required/>
            </div>
            </div>
            <div className="inputBox">
                <label>Company Name</label> <br/>
                    <input type="text" placeholder="Company Name" required/>
            </div>
            <div className="inputBox">
                <label>Business Email Address</label> <br/>
                    <input type="text" placeholder="Email" required/>
            </div>
            <div className="inputBox">
                <label>Phone Number</label> <br/>
                    <input type="number" placeholder="Phone" required/>
            </div>
            <div className="inputBox">
                <label>Job Title</label> <br/>
                    <input type="text" placeholder="Company Name" required/>
            </div>
            <div className="inputBox">
                <label htmlFor="dropdown">Company Size</label> <br/>
                    <select id="dropdown">
                        <option value="sel">Please Select</option>
                        <option value="mal">1-10</option>
                        <option value="fem">10-20</option>
                        <option value="fem">20-30</option>
                        <option value="fem">30-50</option>
                        <option value="fem">50-100</option>
                        <option value="fem">100-200</option>
                        <option value="fem">200-300</option>
                        <option value="fem">300-400</option>
                        <option value="fem">400-500</option>
                        <option value="fem">500-800</option>
                        <option value="fem">800-1000</option>
                        <option value="fem">1000 and above</option>
                        <option value="undef">Undefined</option>
                    </select>
            </div>
            <div className="inputBox">
                <label htmlFor="dropdown">Primary Use Case</label> <br />
                    <select id="dropdown">
                        <option value="sel">Please Select</option>
                        <option value="mal">Url Shortening</option>
                        <option value="fem">QR Code Generator</option>
                        <option value="cal">Custom Url</option>
                    </select>
            </div>
            <div className="inputBox">
                <label htmlFor="dropdown">Country</label> <br/>
                    <select id="dropdown">
            <option value="sel">Please Select</option>
            <option value="afgh">Afghanistan</option>
            <option value="alb">Albania</option>
            <option value="alg">Algeria</option>
            <option value="as">American Samoa</option>
            <option value="and">Andorra</option>
            <option value="ang">Angola</option>
            <option value="angu">Anguilla</option>
            <option value="anta">Antarctica</option>
            <option value="anb">Antigua and Barbuda</option>
            <option value="arg">Argentina</option>
            <option value="arm">Armenia</option>
            <option value="aru">Aruba</option>
            <option value="aus">Australia</option>
            <option value="aust">Austria</option>
            <option value="azer">Azerbaijan</option>
            <option value="bah">Bahamas</option>
            <option value="bahr">Bahrain</option>
            <option value="bang">Bangladesh</option>
            <option value="bar">Barbados</option>
            <option value="bel">Belarus</option>
            <option value="belg">Belgium</option>
            <option value="beli">Belize</option>
            <option value="ben">Benin</option>
            <option value="ber">Bermuda</option>
            <option value="bhu">Bhutan</option>
            <option value="bol">Bolivia</option>
            <option value="bnh">Bosnia and Herzegovina</option>
            <option value="bot">Botswana</option>
            <option value="bra">Brazil</option>
            <option value="br">Brunei Darussalam</option>
            <option value="bul">Bulgaria</option>
            <option value="bf">Burkina Faso</option>
            <option value="bur">Burundi</option>
            <option value="camb">Cambodia</option>
            <option value="cam">Cameroon</option>
            <option value="can">Canada</option>
            <option value="cv">Cape Verde</option>
            <option value="ci">Cayman Islands</option>
            <option value="car">Central African Republic</option>
            <option value="cha">Chad</option>
            <option value="chi">Chile</option>
            <option value="chin">China</option>
            <option value="chis">Christmas Island</option>
            <option value="cki">Cocos (Keeling) Islands</option>
            <option value="col">Colombia</option>
            <option value="com">Comoros</option>
            <option value="drc">Democratic Republic of Congo (Kinshasa)</option>
            <option value="green">Congo, Republic of (Brazzaville)</option>
            <option value="cooki">Cook Islands</option>
            <option value="cr">Costa Rica</option>
            <option value="cdi">Cote D'ivoire</option>
            <option value="cro">Croatia</option>
            <option value="cub">Cuba</option>
            <option value="cyp">Cyprus</option>
            <option value="czr">Czech Republic</option>
            <option value="den">Denmark</option>
            <option value="dji">Djibouti</option>
            <option value="dom">Dominica</option>
            <option value="dr">Dominican Republic</option>
            <option value="et">East Timor (Timor-Leste)</option>
            <option value="ecu">Ecuador</option>
            <option value="egy">Egypt</option>
            <option value="es">El Salvador</option>
            <option value="eg">Equatorial Guinea</option>
            <option value="ert">Eritrea</option>
            <option value="est">Estonia</option>
            <option value="eth">Ethiopia</option>
            <option value="fi">Falkland Islands</option>
            <option value="fai">Faroe Islands</option>
            <option value="fij">Fiji</option>
            <option value="fin">Finland</option>
            <option value="fra">France</option>
            <option value="fg">French Guiana</option>
            <option value="fp">French Polynesia</option>
            <option value="fst">French Southern Territories</option>
            <option value="gab">Gabon</option>
            <option value="tgam">The Gambia</option>
            <option value="geo">Georgia</option>
            <option value="ger">Germany</option>
            <option value="gh">Ghana</option>
            <option value="gib">Gibraltar</option>
            <option value="gree">Greece</option>
            <option value="gre">Greenland</option>
            <option value="gren">Grenada</option>
            <option value="gu">Guadeloupe</option>
            <option value="gua">Guam</option>
            <option value="guat">Guatemala</option>
            <option value="gui">Guinea</option>
            <option value="gb">Guinea-Bissau</option>
            <option value="guy">Guyana</option>
            <option value="hai">Haiti</option>
            <option value="hs">Holy See</option>
            <option value="hon">Honduras</option>
            <option value="hk">Hong Kong</option>
            <option value="hun">Hungary</option>
            <option value="ice">Iceland</option>
            <option value="ind">India</option>
            <option value="indo">Indonesia</option>
            <option value="ira">Iran</option>
            <option value="irq">Iraq</option>
            <option value="ire">Ireland</option>
            <option value="isr">Israel</option>
            <option value="ita">Italy</option>
            <option value="ic">Ivory Coast</option>
            <option value="jam">Jamaica</option>
            <option value="jap">Japan</option>
            <option value="jor">Jordan</option>
            <option value="kaz">Kazakhstan</option>
            <option value="ken">Kenya</option>
            <option value="kir">Kiribati</option>
            <option value="nk">Korea, Democratic People's Rep.(North)</option>
            <option value="sk">Korea, Republic (South)</option>
            <option value="kos">Kosovo</option>
            <option value="kuw">Kuwait</option>
            <option value="kyr">Kyrgyzstan</option>
            <option value="lao">Lao, People's Democratic Republic</option>
            <option value="lat">Latvia</option>
            <option value="leb">Lebanon</option>
            <option value="les">Lesotho</option>
            <option value="li">Liberia</option>
            <option value="lib">Libya</option>
            <option value="lie">Liechtenstein</option>
            <option value="lit">Lithuania</option>
            <option value="lux">Luxembourg</option>
            <option value="mac">Macau</option>
            <option value="mad">Madagascar</option>
            <option value="mal">Malawi</option>
            <option value="mala">Malaysia</option>
            <option value="mald">Maldives</option>
            <option value="mali">Mali</option>
            <option value="malt">Malta</option>
            <option value="mi">Marshall Islands</option>
            <option value="mar">Martinique</option>
            <option value="mau">Mauritania</option>
            <option value="maur">Mauritius</option>
            <option value="may">Mayotte</option>
            <option value="mex">Mexico</option>
            <option value="mic">Micronesia</option>
            <option value="mol">Moldova</option>
            <option value="mona">Monaco</option>
            <option value="mon">Mongolia</option>
            <option value="mont">Montenegro</option>
            <option value="monts">Montserrat</option>
            <option value="moro">Morocco</option>
            <option value="moz">Mozambique</option>
            <option value="mya">Myanmar</option>
            <option value="nam">Namibia</option>
            <option value="nau">Nauru</option>
            <option value="nep">Nepal</option>
            <option value="neth">Netherlands</option>
            <option value="na">Netherlands Antilles</option>
            <option value="nc">New Caledonia</option>
            <option value="nz">New Zealand</option>
            <option value="nic">Nicaragua</option>
            <option value="nig">Niger</option>
            <option value="naija">Nigeria</option>
            <option value="niu">Niue</option>
            <option value="nm">North Macedonia</option>
            <option value="nmi">Northern Mariana Islands</option>
            <option value="nor">Norway</option>
            <option value="oma">Oman</option>
            <option value="pak">Pakistan</option>
            <option value="pal">Palau</option>
            <option value="plt">Palestinian Territories</option>
            <option value="pan">Panama</option>
            <option value="png">Papua New Guinea</option>
            <option value="par">Paraguay</option>
            <option value="per">Peru</option>
            <option value="phi">Philippines</option>
            <option value="pi">Pitcairn Island</option>
            <option value="pol">Poland</option>
            <option value="por">Portugal</option>
            <option value="pr">Puerto Rico</option>
            <option value="qa">Qatar</option>
            <option value="ri">Reunion Island</option>
            <option value="rom">Romania</option>
            <option value="rf">Russian Federation</option>
            <option value="rwa">Rwanda</option>
            <option value="yellow">Saint Kitts and Ne</option>
            <option value="green">Saint Lucia</option>
            <option value="red">Saint Vincent & the Grenadines</option>
            <option value="yellow">Samoa</option>
            <option value="green">San Marino</option>
            <option value="red">Sao Tome And Principe</option>
            <option value="yellow">Saudi Arabia</option>
            <option value="green">Senegal</option>
            <option value="red">Serbia</option>
            <option value="yellow">Seychelles</option>
            <option value="green">Sierra Leone</option>
            <option value="red">Singapore</option>
            <option value="yellow">Slovakia</option>
            <option value="green">Slovenia</option>
            <option value="red">Solomon Islands</option>
            <option value="yellow">Somalia</option>
            <option value="green">South Africa</option>
            <option value="red">South Sudan</option>
            <option value="yellow">Spain</option>
            <option value="green">Sri Lanka</option>
            <option value="red">Sudan</option>
            <option value="yellow">Suriname</option>
            <option value="green">Swaziland (Eswatini)</option>
            <option value="red">Sweden</option>
            <option value="yellow">Switzerland</option>
            <option value="green">Syria</option>
            <option value="red">Taiwan (Republic of China)</option>
            <option value="yellow">Tajikistan</option>
            <option value="green">Tanzania</option>
            <option value="red">Thailand</option>
            <option value="yellow">Tibet</option>
            <option value="green">Timor-Leste (East Timor)</option>
            <option value="red">Togo</option>
            <option value="yellow">Tokelau</option>
            <option value="green">Tonga</option>
            <option value="red">Trinidad and Tobago</option>
            <option value="yellow">Tunisia</option>
            <option value="green">Turkey</option>
            <option value="red">Turkmenistan</option>
            <option value="yellow">Turks and Caicos Islands</option>
            <option value="green">Tuvalu</option>
            <option value="red">Uganda</option>
            <option value="yellow">Ukraine</option>
            <option value="green">United Arab Emirates</option>
            <option value="red">United Kingdom</option>
            <option value="yellow">United States</option>
            <option value="green">Uruguay</option>
            <option value="red">Uzbekistan</option>
            <option value="yellow">Vanuatu</option>
            <option value="green">Vatican City State</option>
            <option value="red">Venezuela</option>
            <option value="yellow">Vietnam</option>
            <option value="green">Virgin Islands (British)</option>
            <option value="red">Virgin Islands (U.S.)</option>
            <option value="yellow">Wallis and Futuna Islands</option>
            <option value="green">Western Sahara</option>
            <option value="red">Yemen</option>
            <option value="yellow">Zambia</option>
            <option value="green">Zimbabwe</option>
          </select>
            </div>

            <div>
                <small>Scissor requires the contact information you provide in order to reach out to you regarding our Products
                    and services. You have the option to unsubscribe from these communications whenever you wish.To learn More 
                    about how to unsubscribe, our privacy practices, and our dedication to safeguarding your privacy, please 
                    refer to our Privacy Policy.
                </small>
            </div>
            <input type="submit" value="Submit"/>
        </form>
        </div>
      </section>
    );
    }
}


export default contactUs;
