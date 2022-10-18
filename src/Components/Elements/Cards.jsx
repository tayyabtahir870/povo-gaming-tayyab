import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Cards() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    title: "",
    text: "",
  });
  return (
    <>
      <div>
        <h1 className="fontcolor text-center my-5">Povo Features</h1>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card my-5 p-3">
                <div class="card-body">
                  <img
                    src="https://uploads-ssl.webflow.com/60c7783699e1051d74062f79/60c92caf0644a6350eba414b_1.svg"
                    alt=""
                    width={80}
                  />
                  <h4 className="card1">
                    In-game items <br /> crafting
                  </h4>
                  <p class="card-text text-start">
                    In-game items crafting is a skill or set of skills option
                    specifically provides in massively multiplayer online games
                    or role playing games
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title: "In-game items crafting",
                        text: "In-game items crafting is a skill or set of skills option specifically provides in massively multiplayer online games or role playing games and other game genres. It allows the users to use basic tools within the game to construct a tool for themselves to use later, more likely for the purpose of competitive edge over other participants. Other game genres where crafting tool is available are, FPS team fortress 2, which allows its users to combine different weapons to create a new one. Or, sandbox Minecraft, which allows players to create and repair their weapons.",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>

            <div class="col ">
              <div class="card card2 my-5 p-3 ">
                <div class="card-body ">
                  <img
                    src="https://povo-site.netlify.app/static/media/h2.17c263d5.png"
                    alt=""
                    width={80}
                  />
                  <h4 class="card-title fontcolor fw-bold">
                    Cross chain interpretability & custom wallet
                  </h4>
                  <p class="card-text text-start fontcolor">
                    DeFi has a motive to incorporate traditional financial
                    services in the cryptocurrency ecosystem. This can only be
                    possible if each blockchain in the
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title:
                          "Cross-chain interoperability and custom wallets",
                        text: "DeFi has a motive to incorporate traditional financial services in the cryptocurrency ecosystem. This can only be possible if each blockchain in the ecosystem can communicate and transfer information and data to other blockchains. A reliable and smooth transaction among these blockchain will enable to introduce traditional financial services to the digital currency ecosystem. Moreover, some platforms offer custom wallets where one can store more than one currency and use the interchangeable.",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card my-5 p-2">
                <div class="card-body">
                  <img
                    src=" https://povo-site.netlify.app/static/media/h3.c5f8acdf.png"
                    alt=""
                    width={80}
                  />
                  <h4 class="card-title card1">
                    Multiverse <br /> gaming
                  </h4>
                  <p class="card-text">
                    The concept of multiverse gaming can be described as a set
                    of parallel world, where theplayers can theoretically travel
                    from one
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title: "Multiverse gaming",
                        text: "The concept of multiverse gaming can be described as a set of parallel world, where theplayers can theoretically travel from one universe to the other with advancements in their levels and gaming tools. Sharded virtual worlds such as Ultima online are similar innature to multiverse games, however transportation and communication in sharderd worlds is not as easy as the traditional multiverse games",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="card card2 my-5 p-3">
                <div class="card-body">
                  <img
                    src="https://povo-site.netlify.app/static/media/h1.4f9f7525.png"
                    alt=""
                    width={80}
                  />
                  <h4 class="card-title fontcolor fw-bold">
                    Tokenize character <br /> items
                  </h4>
                  <p class="card-text fontcolor">
                    Povo is one of those games that have tokenized their
                    characters. Meaning that, you can now advance your levels
                    within the game
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title: "Tokenize character items",
                        text: "Povo is one of those games that have tokenized their characters. Meaning that, you can now advance your levels within the game and monetize your virtual rewards. These virtual rewards can then be converted in tangible assets, traded or swapped with other monetized digital funds. Povo made it possible through the use of Non-fungible tokens (NFTs). It uses NFTs to monetized your virtual rewards.",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card my-5 p-3">
                <div class="card-body ">
                  <img
                    src="https://povo-site.netlify.app/static/media/idea.d16413b8.svg"
                    alt=""
                    width={80}
                  />
                  <h4 class="card-title card1">
                    Gamer/devs can introduce their own token
                  </h4>
                  <p class="card-text">
                    Blockchain has revolutionized the world of gaming. It allows
                    the projection of value in intangible assets. It helps
                    gamers to securely
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title: "Gamer/devs can introduce their own token",
                        text: "Blockchain has revolutionized the world of gaming. It allows the projection of value in intangible assets. It helps gamers to securely store their in-game assets. These in-gameassets can then be stored in the form of a token. And these token can in turn be monetized or swapped with other digital funds. This facility is provided to both developers and gamers.",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card2 my-5 p-3">
                <div class="card-body ">
                  <img
                    src="https://povo-site.netlify.app/static/media/h4.e66c6e38.png"
                    alt=""
                    width={80}
                  />
                  <h4 class="card-title fontcolor fw-bold">
                    Dapp Store and game studio integration
                  </h4>
                  <p class="card-text fontcolor">
                    Decentralized applications are a set of programs that
                    harness excess power from different nodes globally.
                  </p>
                </div>
                <div className="text-end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      setData({
                        title: "Dapp Store and game studio integration",
                        text: "Decentralized applications are a set of programs that harness excess power from different nodes globally. These are community driven application. One example of theseare bitcoins. The integration of Dapps and gaming can create a brainchild which will allow making features of blockchains in gaming. These features might include, a decentralized gaming structure, secure storage of in-game assets, trading of gaming tokens, and interoperability among different games.",
                      });
                      handleShow();
                    }}
                  >
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data.text}</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default Cards;
