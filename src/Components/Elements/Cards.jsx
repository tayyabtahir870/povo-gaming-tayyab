import React from "react";

function Cards() {
  return (
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
                  specifically provides in massively multiplayer online games or
                  role playing games
                </p>
              </div>
              <div className="text-end">
                <button className="cardbutton">Read more</button>
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
                <button className="cardbutton">Read more</button>
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
                  The concept of multiverse gaming can be described as a set of
                  parallel world, where theplayers can theoretically travel from
                  one
                </p>
              </div>
              <div className="text-end">
                <button className="cardbutton">Read more</button>
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
                <button className="cardbutton">Read more</button>
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
                  the projection of value in intangible assets. It helps gamers
                  to securely
                </p>
              </div>
              <div className="text-end">
                <button className="cardbutton">Read more</button>
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
                  Decentralized applications are a set of programs that harness
                  excess power from different nodes globally.
                </p>
              </div>
              <div className="text-end">
                <button className="cardbutton">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
