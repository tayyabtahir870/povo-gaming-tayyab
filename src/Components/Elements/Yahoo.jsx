import React from 'react'

function Yahoo() {
  return (
    
    <div className="yahoopic ">
        
    <div class="container text-center">
      <div class="row">
        <div className="col-md-6 my-5 pt-5">
          <img
            className="img-fluid pt-5 mission"
            src="Assests/laptop.png"
            alt=""
            width={500}
          />
        </div>
        <div class="col-md-6  mission pt-5 ">
          <div className="fontsize1 text-start pt-5  ">
            <b style={{ color:"#8B0000"  }}>Povo </b>{" "}
            <b style={{ color: "white"  }}>Stacking Platform</b>{" "}
          </div>
          <div className='text-center'>
          < button type="button" className="btn btn-danger ">Launched, Povo Stacking</button>
        </div>
        
        <ul className='fontcolor text-start p-3'>
            <p ><strong>Key features</strong></p>
            <li>You can stake your POVO at any time you choose. You can stake any amount of POVO you wish.</li>
            <li>Once staked, the contract will deliver a reward continuously for as long as tokens remain staked.</li>
            <li>You can withdraw any amount of staked POVO tokens without any locking period</li>
            <li>You are free to stake additional amounts at any time</li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Yahoo