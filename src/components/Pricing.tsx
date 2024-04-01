import Linewhy from "../assets/Linewhy.svg";
import tick from "../assets/tick.png";
import tickWhite from "../assets/tickWhite.png";

const Pricing = () => { 

return (
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
    );
}

export default Pricing;