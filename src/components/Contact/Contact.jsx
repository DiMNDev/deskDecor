import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  return (
    <div className="contact">
      <div className="leftSide">
        <h2>Stay connected with the latest</h2>
        <p>Subscribe today!</p>
      </div>
      <div className="rightSide">
        {/* <h3>Enter email </h3> */}
        <div className="inputContainer">
          <input
            type="text"
            className="contactEmail"
            placeholder="Email Address"
          />
          <button className="subscribeBtn">Subscribe</button>
        </div>
        <div className="bottomRight">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <GoogleIcon className="icon" />
          <TwitterIcon className="icon" />
          <PinterestIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
