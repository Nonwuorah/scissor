import React from "react";
import vector3 from "../assets/vector-3.svg";
import chainLink from "../assets/chainLink.svg";
import waterDrop from "../assets/waterDrop.png";
import mirrorTableImage from "../assets/mirrorTableImage.png";
import Linewhy from "../assets/Linewhy.svg";
import urlShortening from "../assets/urlShortening.svg";
import customURLs from "../assets/customURLs.svg";
import qrCodes from "../assets/qrCodes.svg";
import dataAnalysis from "../assets/dataAnalysis.svg";
import tick from "../assets/tick.png";
import tickWhite from "../assets/tickWhite.png";
// import magicWand from "../assets/magicWand.png";
import plusIcon from "../assets/plusIcon.png";
import minusIcon from "../assets/minusIcon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';  

// import "App.css";

class Homepage extends React.Component {
    render() {  

      return (
      
        
        <div>
          <Header />
        <main>
          <section id="urlSection">
            <div>
              <section className="urlSectionTop">
                <div className="urlSectionTopText">
                  <h1>
                    {" "}
                    Optimize Your Online Experience with Our <br /> Advanced{" "}
                    <span className="current">URL Shortening</span> Solution
                  </h1>
                  <img src={vector3} alt="slash"></img>
                  <br />
                  <p>
                    Personalize your shortened URLs to align with your brand
                    identity. Utilize custom slugs,
                    <br />
                    branded links, and domain customization options to reinforce
                    your brand presence and <br />
                    enhance user engagement.
                  </p>
                </div>

                <div className="urlSectionTopLinks">
                  <Link to="signup"><button className="signUp">Sign Up</button></Link>
                  <p>
                    <HashLink to="#faqsSection"><span className="blueText">Learn more</span></HashLink>
                  </p>
                </div>
              </section>

              <section className="urlSectionBottom">
                <div className="urlSectionBottomRect">
                  <img src={chainLink} alt=""></img>
                  <p>
                    Seamlessly transform your long URLs into concise <br /> and
                    shareable links with just few clicks.
                  </p>
                </div>

                <div className="waterDropContainer">
                  <img src={waterDrop} alt=""></img>
                </div>
              </section>
            </div>

            <section className="urlSectionTableTop">
              <img src={mirrorTableImage} alt=""></img>
            </section>
          </section>

          <section id="featuresSection">
            <div className="featuresSectionTop">
              <div className="featuresSectionTopLeft">
                <h2>
                  One Stop. <br /> Four{" "}
                  <span className="blueText">Possibilities</span>.
                </h2>
              </div>
              <div className="featuresSectionTopRight">
                <div className="featuresSectionTopRight1">
                  <h3>3M</h3>
                  <p>Active users</p>
                </div>
                <div className="featuresSectionTopRight2">
                  <h3>60M</h3>
                  <p>
                    Links & QR <br />
                    codes created
                  </p>
                </div>
                <div className="featuresSectionTopRight3">
                  <h3>1B</h3>
                  <p>Clicked & Scanned connections</p>
                </div>
                <div className="featuresSectionTopRight4">
                  <h3>300K</h3>
                  <p>App integrations</p>
                </div>
              </div>
            </div>

            <div className="featuresSectionBottom" id ="featuresSectionBottom">
              <div className="featuresSectionBottomLeft">
                <div className="featuresSectionBottomI">
                  <img src={Linewhy} alt=""></img>
                </div>

                <div className="featuresSectionBottomLeftText">
                  <h2>
                    Why choose <span className="blueText">Scissors</span>
                  </h2>
                  <p>
                    Scissors is the hub of everything that has to do with your
                    link management. We shorten your URLs, allow you creating
                    custom ones for your personal, business, event usage. Our
                    swift QR code creation, management and usage tracking with
                    advance analytics for all of these is second to none.{" "}
                  </p>
                </div>
              </div>
              <div className="featuresSectionBottomRight">
                <div className="featuresSectionBottomRightTop">
                  <div className="featuresSectionFeatures">
                    <img src={urlShortening} alt=""></img>
                    <h3>URL Shortening</h3>
                    <p>
                      Scissor allows you to shorten URLs of your business,
                      events. Shorten your URL at scale, URL redirects.
                    </p>
                  </div>
                  <div className="featuresSectionFeatures">
                    <img src={customURLs} alt=""></img>
                    <h3>Custom URLs</h3>
                    <p>
                      With Scissor, you can create custom URLs, with the length
                      you want! A solution for socials and businesses.
                    </p>
                  </div>
                </div>
                <div className="featuresSectionBottomRightBottom">
                  <div className="featuresSectionFeatures">
                    <img src={qrCodes} alt=""></img>
                    <h3>QR Codes</h3>
                    <p>
                      Generate QR codes to your business, events. Bring your
                      audience and customers to your doorstep with this scan and
                      go solution.
                    </p>
                  </div>
                  <div className="featuresSectionFeatures">
                    <img src={dataAnalysis} alt=""></img>
                    <h3>Data Analytics</h3>
                    <p>
                      Receive data on the usage of either your shortened URL,
                      custom URLs or generated QR codes. Embedded to monitor
                      progress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="pricingSection">
            <div className="pricingSection">
              <div className="pricingSectionHead">
                <div className="pricingSectionHeadH2">
                  <img src={Linewhy} alt=""></img>
                  <h2>
                    {" "}
                    A <span className="blueText">price perfect</span> for your
                    needs.
                  </h2>
                </div>

                <p className="pricingSectionHeadSmall">
                  From catering for your personal, business, event, socials
                  needs, you can be <br />
                  rest assured we have you in mind in our pricing.
                </p>
              </div>

              <div className="pricingSectionBanners">
                <div>
                  <div className="pricingBasic pricingCard">
                    <h3 className="pricingCardTitle">Basic</h3>
                    <h4 className="pricingCardPrice">Free</h4>
                    <p className="pricingCardDescr">Free plan for all users</p>
                    <ul className="pricingCardPerks">
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Unlimited URL Shortening</span>{" "}
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Basic Link Analytics</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Customizable Short Links</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Standard Support</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Ad-supported</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pricingProfessional pricingCard">
                    <h3 className="pricingCardTitle">Professional</h3>
                    <h4 className="pricingCardPrice">$15/month</h4>
                    <p className="pricingCardDescr">Ideal for business creators</p>
                    <ul className="pricingCardPerks">
                      <li>
                        <img src={tickWhite} alt="Tick"></img>{" "}
                        <span>Enhanced Link Analytics</span>{" "}
                      </li>
                      <li>
                        <img src={tickWhite} alt="Tick"></img>{" "}
                        <span>Custom Branded Domains</span>
                      </li>
                      <li>
                        <img src={tickWhite} alt="Tick"></img>{" "}
                        <span>Advanced Link Customization</span>
                      </li>
                      <li>
                        <img src={tickWhite} alt="Tick"></img>{" "}
                        <span>Priority Support</span>
                      </li>
                      <li>
                        <img src={tickWhite} alt="Tick"></img>{" "}
                        <span>Ad-free Experience</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pricingTeams pricingCard">
                    <h3 className="pricingCardTitle">Teams</h3>
                    <h4 className="pricingCardPrice">$25/month</h4>
                    <p className="pricingCardDescr">Share with up to 10 users</p>
                    <ul className="pricingCardPerks">
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Team Collaboration</span>{" "}
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>User Roles and Permissions</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Enhanced Security</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>API Access</span>
                      </li>
                      <li>
                        <img src={tick} alt="Tick"></img>{" "}
                        <span>Dedicated Account Manager</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <div className="pricingSectionButtonsContainer">
                <button className="customPricing pricingSectionButtons">
                  Get Custom Pricing
                </button>
                <button className="selectPricing pricingSectionButtons">
                  Select Pricing
                </button>
              </div> */}
            </div>
          </section>

          {/* <section id="analyticsSection">
            <form className="trimURLForm">
              <input
                className="pasteURLHere"
                type="url"
                placeholder="Paste URL here..."
                required
              />
              <div className="domainAlias">
                <select className="chooseDomain">
                  <option value="sel">Choose Domain</option>
                  <option value="mal">tinyurl</option>
                  <option value="fem">bitly</option>
                  <option value="undef">LayURL</option>
                </select>
                <input
                  className="typeAliasHere"
                  type="url"
                  placeholder="Type Alias here"
                  required
                />
              </div>
              <button className="trimURL">
                Trim URL <img src={magicWand} alt=""></img>
              </button>
              <p className="termsOfServices">
                By clicking TrimURL, I agree to the{" "}
                <strong>Terms of Service,</strong>
                <br />
                <strong>Privacy Policy</strong> and Use of Cookies.
              </p>
            </form>
          </section> */}

          <section id="faqsSection">
            <div className="faqHederContainer">
              <img src={Linewhy} alt=""></img>
              <h2>FAQs</h2>
            </div>

            <ul className="faqList">
              <li className="faqListItem">
                <input id="faqCheck1" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">How does URl shortening work?</p>
                  <label className="faqCheckLabel" htmlFor="faqCheck1">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                  URL shortening works by taking a long URL and creating a
                  shorter, condensed version that redirects to the original URL.
                  When a user clicks on the shortened link, they are redirected
                  to the intended destination.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck2" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Is it necessary to create an account to use the URL
                    shortening service?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck2">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                  No, an account is not required to use the URL shortening.
                  Our service is free and open to all users. However, there are a number
                  of benefits to creating an account, such as tracking the performance
                  of your shortened URLs, customizing your links, and more.
                  Enjoy the benefits of creating an account, such as tracking the
                  performance of your shortened URLs, customizing your links, and more.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck3" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Are the shortened links permanent? Will they expire?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck3">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    Yes, the shortened links are permanent and will not expire. URL
                    shortening works by taking a long URL and creating a shorter,
                    condensed version that redirects to the original URL.
                    Once created, your shortened link will remain active indefinitely, 
                    providing a convenient and reliable way to share and access your content.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck4" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Are there any limitations on the number of URLs I can
                    shorten?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck4">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    No, there are no limitations on the number of URLs you can shorten.
                    Feel free to shorten as many URLs as you need, whether for personal, 
                    business, or social purposes. Our service is designed to be flexible and 
                    accommodating, allowing you to create and manage shortened links at scale.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck5" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Can I customize the shortened URLs to reflect my brand or
                    content?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck5">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    Customizing shortened URLs is a great way to reinforce your brand identity 
                    and make your links more memorable. With our service, you can create custom 
                    slugs, branded links, and domain customization options to align your shortened 
                    URLs with your brand or content. This feature is ideal for businesses, 
                    social media influencers, and anyone looking to enhance their online presence.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck6" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Can I track the performance of my shortened URLs?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck6">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    Yes, account holders can track the performance of their shortened URLs 
                    through our advanced analytics dashboard. This feature provides valuable 
                    insights into link clicks, geographic location, referral sources, and more. 
                    By monitoring the performance of your shortened URLs, you can optimize your 
                    marketing efforts, track user engagement, and make data-driven decisions to 
                    enhance your online presence.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck7" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    How secure is the URL shortening service? Are the shortened
                    links protected against spam or malicious activity?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck7">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    Our URL shortening service is designed with security in mind to protect 
                    against spam, malicious activity, and other threats. We employ industry-standard 
                    security measures to safeguard your shortened links and ensure a safe browsing 
                    experience for users. Additionally, our service includes features such as link 
                    expiration, password protection, and CAPTCHA verification to enhance security and 
                    prevent abuse. Feel confident in the security of your shortened URLs with our 
                    comprehensive protection measures.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck8" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    What is a QR code and what can it do?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck8">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    A QR code, or Quick Response Code, is a two-dimensional barcode
                    that can be scanned by a smartphone or QR code reader to access 
                    information, websites, and other digital content. QR codes are 
                    commonly used for marketing, advertising, and information sharing, 
                    providing a convenient way to connect users with online resources. 
                    By generating QR codes for your shortened URLs, you can enhance 
                    user engagement, drive traffic to your website, and promote your 
                    brand across various platforms.
                </p>
              </li>

              <li className="faqListItem">
                <input id="faqCheck9" className="faqCheck" type="checkbox" />
                <div className="faqListItemHeader">
                  <p className="faqQuestion">
                    Is there an API available for integrating the URL shortening
                    service into my own applications or websites?
                  </p>
                  <label className="faqCheckLabel" htmlFor="faqCheck9">
                    <img
                      src={plusIcon}
                      alt="plus icon"
                      className="faqOpenImage"
                    ></img>
                    <img
                      src={minusIcon}
                      alt="minus icon"
                      className="faqCloseImage"
                    ></img>
                  </label>
                </div>

                <p className="faqAnswer">
                    Yes an API is available for integrating the URL shortening service 
                    into your own applications or websites. Our API provides developers 
                    with the tools and resources to seamlessly integrate URL shortening 
                    functionality into their projects, enabling custom link creation, 
                    management, and tracking. By leveraging our API, you can enhance 
                    user experience, streamline workflows, and unlock new possibilities 
                    for your applications or websites.
                </p>
              </li>
            </ul>
          </section>

          <section id="getStartedSection">
            <div className="getStartedSection">
              <h2>Revolutionizing Link Optimization</h2>
              <Link to="/contactUs"><button className="getStarted">Get Started</button></Link> 
            </div>
          </section>
          </main>
          <Footer />
      </div>
    );
  }
}


export default Homepage;
