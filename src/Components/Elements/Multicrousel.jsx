import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Multicrousel() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="rugpulpicback">
    <div className="container my-5 ">
         <div className="fontsize1 text-center   ">
              <b style={{ color:"#8B0000"  }}>Povo </b>{" "}
              <b style={{ color: "white" }}>Exclusive NFT's </b>{" "}
            </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        infinite={true}
      >
        <div className="text-center">
          <img
            src="https://povo-site.netlify.app/static/media/NFT2.ce0d0563.png"
            alt=""
          />
          <br />
        
        
          <Button   variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header   closeButton>
          <Modal.Title >Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid " src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
   
        </div>
        <div className="text-center">
          <img
            src="https://povo-site.netlify.app/static/media/NFT3.f7c6e745.png"
            alt=""
          />
          <br />
          <Button  variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
          <div> </div>
        </div>
        <div className="text-center">
          <img
            src="https://povo-site.netlify.app/static/media/NFT4.4a793bce.png"
            alt=""
            width={370}
          />
          <br />
          <Button  variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </div>
        <div className="text-center">
          <img
            src="https://povo-site.netlify.app/static/media/NFT5.8d080857.png"
            alt=""
            width={370}
          />
          <br />
          <Button  variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </div>
        <div className="text-center">
          <img
            src="https://povo-site.netlify.app/static/media/NFT6.e01e2af9.png"
            alt=""
            width={370}
          />
          <br />
          <Button  variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </div>
        <div className="text-center">
          <img className="img-fluid"
            src="https://povo-site.netlify.app/static/media/NFT1.d7c5ef8c.png"
            alt=""
          />
          <br />
          <Button  variant="primary" onClick={handleShow}>
        Buy
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header  closeButton>
          <Modal.Title>Comming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body> <img className="img-fluid" src="https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg?w=2000" alt="" width={450} /> </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
        </div>
      </Carousel>
      ;
    </div>
    </div>
  );
}

export default Multicrousel;
