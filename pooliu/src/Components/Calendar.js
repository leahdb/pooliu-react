import React from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

var Calendar = () => {
  return (
    <div
      className="modal fade"
      id="calendar-modal"
      tabIndex="-1"
      aria-labelledby="calendar-modal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="address-label">
              Modal title
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="control-pane">
              <div className="control-section">
                <div className="datetimepicker-control-section">
                  <DateTimePickerComponent></DateTimePickerComponent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Calendar;


