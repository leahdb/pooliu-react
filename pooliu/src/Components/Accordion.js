import React from "react";
import Ride from "./Ride";

const Accordion = () => {
  return (
    <>
        <div className="rides">
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    >
                    REQUESTED RIDES
                    </button>
                </h2>
                <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                >
                    <div className="accordion-body">
                        <Ride></Ride>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Accordion;