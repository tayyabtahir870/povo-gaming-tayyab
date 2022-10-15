import React from "react";
import { FaMediumM } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div className="footerbackgroudcolor ">
      <div class="container text-center ">
        <div class="row">
          <div class="col-md-6 text-start my-5 d-flex">
            <img
              className="img-fluid p-1 "
              src="Assests/pic.png"
              alt=""
              width={80}
            ></img>
            <span className="last-p my-3 navfontcolor">
              <strong> PLAY TO WIN REWARD ON HOLDING </strong> <br />
              Frictionless yield & liquidity generation protocol <br /> for game
              lover. Povo is deflationary in it's nature
            </span>
          </div>
          <div class="col-md-6 my-5">
            <div className="mt-4 text-center">
              <FaMediumM color="white" size={20} /> &nbsp;&nbsp;&nbsp;&nbsp;
              <AiFillGithub color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <FaTelegram color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <BsTwitter color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <BsYoutube color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <SiDiscord color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
              <BsFacebook color="white" size={20} />
              &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <hr className="navfontcolor" />

          <div>
            <p className="navfontcolor">©2021 Povo Productions Limited</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
