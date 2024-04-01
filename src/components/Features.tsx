import Linewhy from "../assets/linewhy.svg"
import urlShortening from "../assets/urlShortening.svg";
import customURLs from "../assets/customURLs.svg";
import qrCodes from "../assets/qrCodes.svg";
import dataAnalysis from "../assets/dataAnalysis.svg";

const Features = () => {
    return (
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

            <div className="featuresSectionBottom">
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
    )
}

export default Features