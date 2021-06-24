import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ShiftTime extends Component {
  state = {
    daysData: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    },
  };
    

    daysHandler = (day) => {
      let current = { ...this.state.daysData };
      switch (day) {
        case "monday":
          current.monday = !current.monday;
          break;
        case "tuesday":
          current.tuesday = !current.tuesday;
          break;
        case "wednesday":
          current.wednesday = !current.wednesday;
          break;
        case "thursday":
          current.thursday = !current.thursday;
          break;
        case "friday":
          current.friday = !current.friday;
          break;
        case "saturday":
          current.saturday = !current.saturday;
          break;
        case "sunday":
          current.sunday = !current.sunday;
          break;
        default:
          break;
      }

      this.setState({
        daysData: current,
      });
    };
  

  render() {
    const { daysData } = this.state;
    return (
      <div>
        <div className="container">
          <h1 style={{ fontSize: "30px", marginTop: "15px" }}>
            Schedule working days & timings
          </h1>
          <hr className="w-auto" />

          <div className="row mt-5">
            <div className="col">
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("sunday");
                }}
                className={
                  daysData.sunday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                S
              </button>{" "}
            </div>
            <div className="col">
              <button
                id="m"
                type="button"
                onClick={(e) => {
                  this.daysHandler("monday");
                }}
                className={
                  daysData.monday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                M
              </button>{" "}
            </div>
            <div className="col">
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("tuesday");
                }}
                className={
                  daysData.tuesday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                T
              </button>
            </div>
            <div className="col">
              {" "}
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("wednesday");
                }}
                className={
                  daysData.wednesday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                W
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("thursday");
                }}
                className={
                  daysData.thursday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                Th
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("friday");
                }}
                className={
                  daysData.friday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                F
              </button>
            </div>
            <div className="col">
              
              <button
                type="button"
                onClick={(e) => {
                  this.daysHandler("saturday");
                }}
                className={
                  daysData.saturday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
              >
                SA
              </button>
            </div>
          </div>
          <div className="row my-5">
            <div className="col">
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className={
                  daysData.sunday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                   
                    Sunday
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.sunday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.sunday
                    ? false
                    : true
                }
                />
              </div>
            </div>
            <div className="col">
              
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button
                    type="button"
                    className={
                  daysData.monday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }
                  >
                    
                    Monday
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.monday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.monday
                    ? false
                    : true
                }
                />
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className={
                  daysData.tuesday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                    {" "}
                    Tuesday{" "}
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.tuesday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.tuesday
                    ? false
                    : true
                }
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button"  className={
                  daysData.wednesday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                    {" "}
                    Wednesdy{" "}
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.wednesday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.wednesday
                    ? false
                    : true
                }
                />
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className={
                  daysData.thursday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                    {" "}
                    Thursday{" "}
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.thursday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.thursday
                    ? false
                    : true
                }
                />
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <button type="button" className={
                  daysData.friday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                    {" "}
                    Friday{" "}
                  </button>
                </div>
                <input
                  type="time"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.friday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  className="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.friday
                    ? false
                    : true
                }
                />
              </div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col">
              {" "}
              <div className="input-group mb-3">
                <div class="input-group-prepend">
                  <button type="button" className={
                  daysData.saturday
                    ? "btn btn-primary"
                    : "btn btn-outline-primary"
                }>
                    {" "}
                    Saturday
                  </button>
                </div>
                <input
                  type="time"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.saturday
                    ? false
                    : true
                }
                />
                <input
                  type="time"
                  class="form-control"
                  maxLength="8"
                  onInvalid="console.warn(scscd)"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  disabled={
                  daysData.saturday
                    ? false
                    : true
                }
                />
              </div>
            </div>
          </div>
          <NavLink to="/candidate">
            {" "}
            <button
              style={{
                marginTop: "150px",
                marginLeft: "0px !important",
                marginBottom: "40px",
                width: "20rem",
              }}
              type="button"
              className="btn btn-outline-primary btn-lg"
            >
              Previous
            </button>
          </NavLink>
          <button
            style={{
              float: "right",
              marginTop: "150px",
              marginBottom: "40px",
              width: "20rem",
            }}
            type="button"
            className="btn btn-primary btn-lg"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default ShiftTime;
