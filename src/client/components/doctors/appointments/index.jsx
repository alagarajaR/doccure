import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import StickyBox from "react-sticky-box";
import getAppointmentDetails from "../../services/doctors/getappoinments";
import {
  IMG01,
  IMG02,
  IMG03,
  IMG04,
  IMG05,
  IMG06,
  IMG07,
  IMG08,
  IMG010,
  IMG011,
} from "./img";
import DoctorSidebar from "../sidebar";
class Appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      allapptData: [],
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  componentDidMount() {
    this.setState({
      allapptData: getAppointmentDetails.getApptDetails(3),
    });
  }

  render() {
    return (
      <div>
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/home">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Appointments
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Appointments</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="appointments">
                  <StickyBox offsetTop={50} offsetBottom={20}>
                    <DoctorSidebar />
                  </StickyBox>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="appointments">
                  {this.state.allapptData.map((appdata, key) => (
                    <div className="appointment-list">
                      <div className="profile-info-widget">
                        <Link
                          to="/doctor/patient-profile"
                          className="booking-doc-img"
                        >
                          <img src={IMG01} alt="User" />
                        </Link>
                        <div className="profile-det-info">
                          <h3>
                            <Link to="/doctor/patient-profile">
                              {appdata.patname}
                            </Link>
                          </h3>
                          <div className="patient-details">
                            <h5>
                              <i className="far fa-clock"></i>{" "}
                              {appdata.apptdate},{appdata.appttime}
                            </h5>
                            <h5>
                              <i className="fas fa-map-marker-alt"></i>{" "}
                              {appdata.state},{appdata.country}
                            </h5>
                            <h5>
                              <i className="fas fa-envelope"></i>{" "}
                              {appdata.email}
                            </h5>
                            <h5 className="mb-0">
                              <i className="fas fa-phone"></i> {appdata.phone}
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="appointment-action">
                        <Link
                          to="#0"
                          className="btn btn-sm bg-info-light"
                          onClick={this.handleShow}
                        >
                          <i className="far fa-eye"></i> View
                        </Link>
                        <Link to="#0" className="btn btn-sm bg-success-light">
                          <i className="fas fa-check"></i> Accept
                        </Link>
                        <Link to="#0" className="btn btn-sm bg-danger-light">
                          <i className="fas fa-times"></i> Cancel
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*view modal*/}
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <h5 className="modal-title">Appointment Details</h5>
          </Modal.Header>
          <Modal.Body>
            <ul className="info-details">
              <li>
                <div className="details-header">
                  <div className="row">
                    <div className="col-md-6">
                      <span className="title">#APT0001</span>
                      <span className="text">21 Oct 2019 10:00 AM</span>
                    </div>
                    <div className="col-md-6">
                      <div className="text-right">
                        <button
                          type="button"
                          className="btn bg-success-light btn-sm"
                          id="topup_status"
                        >
                          Completed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <span className="title">Status:</span>
                <span className="text">Completed</span>
              </li>
              <li>
                <span className="title">Confirm Date:</span>
                <span className="text">29 Jun 2019</span>
              </li>
              <li>
                <span className="title">Paid Amount</span>
                <span className="text">$450</span>
              </li>
            </ul>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
export default Appointments;
