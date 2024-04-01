import scissorLogo from "../assets/scissorLogo.svg";
import twitterIcon from "../assets/twitterIcon.png";
import instagramIcon from "../assets/instagramIcon.png";
import linkedInIcon from "../assets/linkedInIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

const Footer = () => {
    return (
        <footer>
            <section id="footerSection">
                <div className="footerTop">
                    <aside className="footerIcons">
                        <img src={scissorLogo} alt="logo"></img>
                        <div className="footerContacts">
                            <img src={twitterIcon} alt="Icon"></img>
                            <img src={instagramIcon} alt="Icon"></img>
                            <img src={linkedInIcon} alt="Icon"></img>
                            <img src={facebookIcon} alt="Icon"></img>
                        </div>
                    </aside>

                    <aside className="footerLinks">
                        <div className="footerLinksTop">
                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Why Scissor?</h6>

                                <ul className="footerLinks">
                                    <li>Scissor 101</li>
                                    <li>Integration & API</li>
                                    <li>Pricing</li>
                                </ul>
                            </aside>

                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Solutions</h6>

                                <ul className="footerLinks">
                                    <li>Social Media</li>
                                    <li>Digital Marketing</li>
                                    <li>Customer Service</li>
                                    <li>For Developers</li>
                                </ul>
                            </aside>

                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Products</h6>

                                <ul className="footerLinks">
                                    <li>Link Management</li>
                                    <li>QR Codes</li>
                                    <li>Link-in-bio</li>
                                </ul>
                            </aside>

                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Company</h6>

                                <ul className="footerLinks">
                                    <li>About Scissor</li>
                                    <li>Careers</li>
                                    <li>Partners</li>
                                    <li>Press</li>
                                    <li>Contact</li>
                                    <li>Reviews</li>
                                </ul>
                            </aside>
                        </div>

                        <div className="footerLinksBottom">
                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Resources</h6>

                                <ul className="footerLinks">
                                    <li>Blog</li>
                                    <li>Resource Library</li>
                                    <li>Developers</li>
                                    <li>App Connectors</li>
                                    <li>Support</li>
                                    <li>Trust Center</li>
                                    <li>Browser Extension</li>
                                    <li>Mobile App</li>
                                </ul>
                            </aside>

                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Features</h6>

                                <ul className="footerLinks">
                                    <li>Branded Links</li>
                                    <li>Mobile Links</li>
                                    <li>Campaign</li>
                                    <li>
                                        Management & <br /> Analytics
                                    </li>
                                    <li>QR Code generation</li>
                                </ul>
                            </aside>

                            <aside className="footerLinkGroup">
                                <h6 className="footerLinkHeader">Legal</h6>

                                <ul className="footerLinks">
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                    <li>Terms of Service</li>
                                    <li>Acceptable Use Policy</li>
                                    <li>Code of Conduct</li>
                                </ul>
                            </aside>
                        </div>
                    </aside>
                </div>

                <p className="footerBottom">Term of Service | Security | Scissor 2023</p>
            </section>
        </footer>
    );
}

export default Footer;