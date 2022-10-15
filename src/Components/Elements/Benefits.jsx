import React from "react";

function Benefits() {
  return (
    <div className="rugpulpicback ">
      <div className="">
        <h1 className="text-center ">
         <b className="fontcolor">Benefit of Povo</b>
        </h1>
      </div>

      <div class="container ">
        <div class="row">
          <div class="col rugpul my-5">
            <div className="fontcolor1">
           <h5>Anyone Who Owns Gaming Assets</h5>
           <br />
           <ul>
            <li>Transfer items to another account</li>
            <li>Renders the items to mount reserve values</li>
            <li>Ease of using the items accross other supported games</li>
           </ul>
           <br />
           <h5>Game tournament and receive winnings in your wallet</h5>
           <br />
           <h5>Artificial Intelligence improve players expericne</h5>
           <br />
           <h5>Withdraw funds using PayPal</h5>
           </div>
          </div>

          <div class="col">
            <img
              className="img-fluid"
              src="Assests/water.png"
              alt=""
              width={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
