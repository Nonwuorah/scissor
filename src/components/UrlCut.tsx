import React from "react";
// import scissorLogo from "../assets/scissorLogo.svg";
// import twitterIcon from "../assets/twitterIcon.png";
// import instagramIcon from "../assets/instagramIcon.png";
// import linkedInIcon from "../assets/linkedInIcon.png";
// import facebookIcon from "../assets/facebookIcon.png";
// import { Link } from "react-router-dom";


interface UrlCutProps {
    match: {
        params: {
            id: string;
        };
    };
}

const UrlCut: React.FC<UrlCutProps> = (props) => {
    const id = props.match.params.id;
    return (
        
        <div className="dashboard">
            <section className="dashboard">
                <section className="myUrls">
                            <div className="urlDetails">
                                <label>Original Url {id}:</label> <br/>
                                <p>https://www.google.com</p>
                                <label>Shorten Url:</label> <br/>
                                <p>https://scissor.com/shorten/</p>
                                <label>Date:</label> <br/>
                                <p>3rd March, 00:30</p>
                            </div>

                            <div className="urlActions">
                                <button className="share">
                                    <i className="fa-solid fa-share-nodes"></i> Share Link
                                </button>
                                <button className="qrCode">
                                    <i className="fa-solid fa-qrcode"></i> QR Code
                                </button>
                                <button className="edit">
                                    <i className="fa-solid fa-pen-to-square"></i> Edit
                                </button>
                                <button className="stats">
                                    <i className="fa-solid fa-chart-line"></i> View Stats
                                </button>

                                <i className="fa-solid fa-trash"></i>
                            </div>

                        
                </section>

                {/* <section>
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
                    </div>

                    <p className="footerBottom">Term of Service | Security | Scissor 2023</p>
                </section> */}
            </section>

        </div>
    );
}


export default UrlCut;      