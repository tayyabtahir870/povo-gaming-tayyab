import React from "react";

function Rugpul() {
  return (
    <div className="rugpulpicback ">
        <div className="">
      <h1 className="text-center ">
        <b className="fontcolor "> How </b>{" "}
        <b style={{ color: "#8B0000" }}> Povo </b>{" "}
        <b className="fontcolor"> is Rugpal protected </b>
      </h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col rugpul my-5">
           <ul className="fontcolor1">
            <li>Povo Presale is going held on UniCrypt which prevents rug-pull by offering auto liquidity lock functionality</li>
            <li>60% of raised funds in presale is locked into liquidity by UniCrypt for 266 years</li>
            <li>Transaction fee is never above 7% max.</li>
            <li>Newly created LP tokens are locked in order to ensure transparency.</li>
            <li>Smart Contract is audited by CertTik.</li>
           </ul>
          </div>


          <div class="col">
            <img className="img-fluid" src="Assests/nft.png" alt="" width={500} />

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Rugpul;
