import React, { Component } from "react";
import { Link } from "react-router-dom";
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
  IMG012,
} from "./img";
import DoctorSidebar from "../sidebar";

class MypPatient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mypatData: [],
    };
  }

  componentDidMount() {
    this.setState({
      mypatData: getAppointmentDetails.getApptDetails(4),
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
                      My Patients
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">My Patients</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <DoctorSidebar />
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="row row-grid">
                  {this.state.mypatData.map((appdata, key) => (
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="card widget-profile pat-widget-profile">
                        <div className="card-body">
                          <div className="pro-widget-content">
                            <div className="profile-info-widget">
                              <Link
                                to="/doctor/patient-profile"
                                className="booking-doc-img"
                              >
                                <img src={IMG04} alt="User" />
                              </Link>
                              <div className="profile-det-info">
                                <h3>
                                  <Link to="/doctor/patient-profile">
                                    {appdata.patname}
                                  </Link>
                                </h3>

                                <div className="patient-details">
                                  <h5>
                                    <b>Patient ID :</b> {appdata.patid}
                                  </h5>
                                  <h5 className="mb-0">
                                    <i className="fas fa-map-marker-alt"></i>{" "}
                                    {appdata.state}, {appdata.country}
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="patient-info">
                            <ul>
                              <li>
                                Phone <span>{appdata.phone}</span>
                              </li>
                              <li>
                                Age{" "}
                                <span>
                                  {appdata.age} Years, {appdata.gender}
                                </span>
                              </li>
                              <li>
                                Blood Group <span>{appdata.bloodg}</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MypPatient;
