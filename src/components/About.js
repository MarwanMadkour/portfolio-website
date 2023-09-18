import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import ProfileImg from "../images/profile.jpg";

const About = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            viewport={{ once: true }}
            className="heading"
          >
            <p className="heading-sub-text">Who I am</p>
            <p className="heading-text">About Me</p>
          </motion.div>
          <div className="split-about">
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={horizontal}
              className="about-content"
            >
              <p>
                Hello! My name is Marwan and I enjoy creating things that live
                on the internet. With a Bachelor's in Mechatronics Engineering
                and a deep interest in web development, I'm driven to create
                user-friendly web applications that deliver seamless and
                responsive user experiences. My expertise includes a range of
                programming languages and frameworks, allowing me to craft
                innovative solutions that engage users effectively.{" "}
              </p>
              <br />
              {/* <p>
                {" "}
                I’ve had the privilege of working with some experienced
                professionals which has enhanced my skills and rate of learning.
                My main focus these days is building accessible, inclusive
                products and digital experiences, as well as creating designs
                and illustrations. With my experience I have what it takes to
                solve real world problems
              </p> */}
            </motion.div>
            <motion.div
              initial={{ x: "50", opacity: 0 }}
              whileInView={horizontal}
              className="about-img"
            >
              <img src={ProfileImg} alt="Profile" />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
