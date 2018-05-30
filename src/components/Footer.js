import React from "react";

const Footer = () => {
  return (
    <footer
      className="page-footer"
    >
      <div className="px-4 clearfix">
        <div className="float-left">
          <small>
            <i className="fa fa-copyright mr-2" aria-hidden="true"></i>
            Strides
          </small>
        </div>
        <div className="float-right">
          <img 
            className="pr-2 footer-logo"
            src="/images/shoe_logo_small.png"
            alt="strides logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
