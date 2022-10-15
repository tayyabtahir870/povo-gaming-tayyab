import React from "react";

function Mission() {
  return (
    <div className="missionbackpic">
      <div class="container text-center">
        <div class="row">
          <div className="col-md-6 my-5 pt-5">
            <img
              className="img-fluid pt-5 mission"
              src="Assests/mission.png"
              alt=""
              width={400}
            />
          </div>
          <div class="col-md-6  mission pt-5 ">
            <div className="fontsize1 text-start pt-5  ">
              <b style={{ color: "white" }}>Povo </b>{" "}
              <b style={{ color: "#8B0000" }}>Mission</b>{" "}
            </div>
            <p className="fontcolor text-start ">
              Povo is a gaming platform that incorporates blockchain technology.
              The platform aims at providing its users with multiple services by
              expanding it horizon to both blockchains and gaming. It aims at
              providing its users with a multi-chain solution, which allows them
              to create their own blockchain solutions. It also allows the game
              players to earn and cash out their rewards without any time limit.
              Moreover, it offers a lower barrierfor entering an advanced
              financial ecosystem, with no deposit and withdrawal limits.
              Lastly, the mission of gPlayer is to provide its users an
              efficient NFT ecosystem for gaming. Where players can literally
              own and control whatever they buy, earn or craft. NFT and gaming
              are the undoubted match made in heaven for the success of a
              specificplatform
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
