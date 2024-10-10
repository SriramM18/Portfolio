import React, { Component } from "react";
import logo from "../assets/img/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import DP from "../assets/img/DP.jpg";

// import { Fa } from 'react-icons/fa6'

export class Navbar extends Component {
  render() {
    return (
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center ">  {/*bg-white bg-blend-soft-light opacity-50 rounded-[50%] */}
          <img src="" alt="" className="mx-2 w-20  filter brightness-100 rounded-full" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <a href="https://leetcode.com/u/Hustler1824/" target="_blank"><SiLeetcode /></a>   
         <a href="https://github.com/SriramM18" target="_blank"><FaGithub /></a>
         <a href="https://www.linkedin.com/in/sriram-mandalapu-24a642211/" target="_blank"><FaLinkedin /></a>        
         <a href="https://www.instagram.com/sriram._.mandalapu/" target="_blank"><FaInstagram /></a> 
        </div>
      </nav>
    );
  }
}

export default Navbar;
