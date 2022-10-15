import React from "react";

function Header() {
  return (
    <div>
      <div className="header navback-color  ">
        <nav class="navbar navbar-expand-lg header  ">
          <div class="container my-">
            <a class="navbar-brand" href="/">
              <img src="Assests/pic.png" alt="" width={40} />
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="hhhhh">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item"></li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor"> Home</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Staking</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Governance</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor">Tokenomics</b>
                    </a>
                  </li>{" "}
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor"> Roadmap</b>
                    </a>
                  </li>
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor"> Rugpul</b>
                    </a>
                  </li>
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <b className="navfontcolor"> FAQ</b>
                    </a>
                  </li>
                  &nbsp;&nbsp;
                  <li class="nav-item">
                    <a class="nav-link" href="/">
                      <button
                        type="button"
                        className="btn btnborder btn-danger"
                      >
                        Connect Wallet
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
