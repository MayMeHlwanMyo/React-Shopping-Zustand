import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-black py-2 text-white  text-center mx-5 mt-auto">
      © {date.getFullYear()}{" "}
      <a href="https://mms-it.com" className="text-white underline">
        MMS IT
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
