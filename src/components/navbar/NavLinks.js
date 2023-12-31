import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const NavLinks = ({ handleNav }) => {
  return (
    <ul className="nav-links">
      {/* <li onClick={handleNav} ><Link  to="//twitter.com" target='_blank' className='nav-link'><FaTwitter /></Link></li> */}
      <li onClick={handleNav}>
        <Link
          to="//www.linkedin.com/in/marwan-madkour"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin />
        </Link>
      </li>
      <li onClick={handleNav}>
        <Link
          to="//github.com/marwanmadkour"
          target="_blank"
          className="nav-link"
        >
          <BsGithub />
        </Link>
      </li>
      {/* <li onClick={handleNav} ><Link  to="//www.instagram.com/" target='_blank' className='nav-link'><FaInstagram /></Link></li> */}
      <li onClick={handleNav}>
        <Link
          to="//mailto:marwan.madkour321@gmail.com"
          target="_blank"
          className="nav-link"
        >
          <BiEnvelope />
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;
