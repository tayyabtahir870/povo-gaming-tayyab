import React, { useState } from "react";
import { FaMediumM } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Reward() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="heropic">
      <Particles
        id="tsparticlas"
        init={particlesInit}
        loaded={Particles}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          style: {
            position: "absolute",
            height: "100%",
            top: "0",
            left: "0",
          },
          particles: {
            number: {
              value: 10,
              density: {
                enable: false,
                value_area: 800,
              },
            },
            color: {
              value: "#fff",
            },
            shape: {
              type: "star",
              options: {
                sides: 5,
              },
            },
            opacity: {
              value: 0.8,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 4,
              random: false,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            rotate: {
              value: 0,
              random: true,
              direction: "clockwise",
              animation: {
                enable: true,
                speed: 5,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 600,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
      <div class="container ">
        <div class="row">
          <div class="col-md-6 my-5 pt-5 ">
            <h1 className="text-start fontcolor ">
              Play To Win <br /> Reward on Holding
            </h1>
            <h3 className="text-start fontcolor  ">
              Frictionless yield & liquidity generation protocol for game lover.
              Povo is <br /> deflationary in it's nature
            </h3>
            <button type="button" className=" buttonlive ">
              <img
                className="img-fluid"
                src="https://cryptologos.cc/logos/pancakeswap-cake-logo.png"
                alt=""
                width={20}
              />{" "}
              Trade on PancakeSwap
            </button>
            <span>
              <button class="button-Buy-now">Whitepaper</button>
            </span>
            <br />
            <div className="my-3">
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

            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <h5 className="fontcolor text-start">Buying FEE is 5%</h5>
                  <ul className="fontcolor text-start">
                    <li>3% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>1% Reflection to holders</li>
                  </ul>
                </div>
                <div class="col">
                  <h5 className="fontcolor text-start">Selling FEE is 7%</h5>
                  <ul className="fontcolor text-start">
                    <li>4% to buy back funds</li>
                    <li>1% Marketing and Development</li>
                    <li>2% Reflection to holders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 my-5 pt-5 ">
            <div className="crouser">
              <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="Assests/c1.png"
                    alt="First slide"
                    width={300}
                  />
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="Assests/c2.png"
                    alt="Second slide"
                    width={300}
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block"
                    src="Assests/c3.png"
                    alt="Third slide"
                    width={300}
                  />

                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="my-3">
              <button className="button1">Token Address</button>
              <span>
                <input
                  type="text"
                  className="button2"
                  value="0x2a2d03a47ae6220312337d1f094badcd1ee948cc"
                />
              </span>
            </div>

            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://povo-site.netlify.app/certik.png"
                    alt=""
                    width={150}
                  />
                </div>
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://povo-site.netlify.app/pcs.png"
                    alt=""
                    width={150}
                  />
                </div>
                <div class="col">
                  <img
                    className="img-fluid"
                    src="https://povo-site.netlify.app/xt.png"
                    alt=""
                    width={150}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reward;
