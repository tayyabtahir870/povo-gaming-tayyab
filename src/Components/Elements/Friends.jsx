import React from "react";

function Friends() {
  return (
    <div className="text-center friendsbackcolor ">
      <h1 className="fontcolor  ">
        <b>Friends of </b> <b style={{ color: "#8B0000" }}>Povo</b>
      </h1>
      <img src="Assests/coins.png" alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="Assests/gecko.svg" alt="" width={280} />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="Assests/scan.png" alt="" /> &nbsp;&nbsp;&nbsp;&nbsp;
      <img src="Assests/pancakes.png" alt="" />
      <img className="img-fluid" src="Assests/toplist.png" alt="" width={600} />
      <img className="img-fluid" src="Assests/diamond.png" alt="" width={600} />
      <img
        className="img-fluid"
        src="Assests/gem.png"
        alt=""
        width={400}
      />{" "}
      &nbsp;&nbsp;&nbsp;&nbsp;
      <img className="img-fluid" src="Assests/aim.png" alt="" width={400} />
      <img className="img-fluid" src="Assests/scope.png" alt="" width={500} />
    </div>
  );
}

export default Friends;
