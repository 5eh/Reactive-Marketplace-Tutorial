import React from "react";
import "./modal.css";

// Modal creates a backdrop, as well as a hover over option, for Pigeon, this means once a customer bids or creates an offer on a package, user will receive popup to bid or complete, with information
// Modal JSX should be easily copied into Pigeon Marketplace
const Modal = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>

        <h6 className="text-center text-light">Place a bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ETH</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ETH" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter Quantity" />
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ETH</span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.05 ETH</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ETH</span>
        </div>

        <button className="place__bid-btn">Place a bid</button>
      </div>
    </div>
  );
};

export default Modal;
