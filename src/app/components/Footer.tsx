import Link from "next/link";
import React from "react";
import { FaInstagramSquare, FaWhatsappSquare, FaFacebookSquare, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-start justify-between w-full min-h-[10rem] md:h-auto border-t py-10 px-8 text-violet-50 bg-black">
      <div className="footer-section mb-4 relative top-0 left-0 right-0 px-2 py-2">
        <img src="https://t4.ftcdn.net/jpg/05/00/53/13/360_F_500531332_w0GziC9gLWjV2ZN1xvCjYT11uKMeUBi1.jpg" alt="Company Logo" className="w-20 h-[5rem] "/>
        <div className="text-xs mt-4">&copy; All Rights Reserved.<br/> Job 2024.</div>
        <div className="mt-4 flex space-x-2">
          <Link href="/">
            <FaInstagramSquare size={25} />
          </Link>
          <Link href="/">
            <FaWhatsappSquare size={25}/>
          </Link>
          <Link href="/">
            <FaFacebookSquare size={25}/>
          </Link>
          <Link href="/">
            <FaTwitterSquare size={25}/>
          </Link>
          <Link href="/">
            <FaGithubSquare size={25}/>
          </Link>
        </div>
      </div>

      <div className="footer-section mb-4">
        <div className="footer-section-header mb-4">Legal</div>
        <ul className="list-none">
          <li className="mb-2"><a href="#">Privacy Policy</a></li>
          <li className="mb-2"><a href="#">Our Terms of Service</a></li>
          <li className="mb-2"><a href="#">Terms and Conditions</a></li>
          <li className="mb-2"><a href="#">FAQs</a></li>
          <li className="mb-2"><a href="#">Fraud Alerts</a></li>
          <li className="mb-2"><a href="#">Return/Refund Policy</a></li>
          <li><a href="#">Community Guidelines</a></li>
        </ul>
      </div>

      <div className="footer-section mb-4">
        <div className="footer-section-header mb-4">Links</div>
        <ul className="list-none">
          <li className="mb-2"><a href="#">Free Job Alerts</a></li>
          <li className="mb-2"><a href="#">Careers</a></li>
          <li className="mb-2"><a href="#">Contact us</a></li>
          <li className="mb-2"><a href="#">Vulnerability Disclosure Policy</a></li>
          <li className="mb-2"><a href="#">International Jobs</a></li>
          <li><a href="#">Free Job Apply</a></li>
        </ul>
      </div>

      <div className="footer-section mb-4">
        <div className="footer-section-header mb-4">Download</div>
        <div className="flex flex-col">
          <a href="#" className="mb-2">Download PlayStore</a>
          <a href="#">Download AppStore</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;