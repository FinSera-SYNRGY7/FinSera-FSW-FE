import React from "react";
import "./style.css";

function Card({ className, children, ...rest }) {
  return (
    <div className={`card ${className}`}>
      <div className="row">
        <div className="col-md-4 d-flex align-items-center justify-content-center">
          <div className="circle">
            <p className="text">P</p>
          </div>
        </div>
        <div className="col-md-8 p-0">
          <div className="card-body px-0">
            <h5 className="card-title">Putri Kusuma</h5>
            <h6 class="card-subtitle text-body-secondary">Bank BCA</h6>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
