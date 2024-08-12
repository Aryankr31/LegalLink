import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>        
            <span>Advocates</span>
            <span>Notaries</span>
            <span>Writing & Translation</span>
            <span>Arbitrators</span>
            <span>Document Writes</span>
            <span>Mediators</span>
            <span>Legal Secretary</span>
            <span>Public Defender</span>
            <span>Para Legal</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on legalLink</span>
            <span>Order on legalLink</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Refferal</span>
            <span>Invite a Friend</span>
            <span>Become a LSP</span>
          </div>


        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>legalLink.</h2>
            <span>© legalLink Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;