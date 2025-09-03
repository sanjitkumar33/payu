// src/pages/Account.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextInput, Text } from '@mantine/core';
import { BsCheckLg } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Dheader from '../Dheader';
import Dfooter from '../Dfooter';
import './Account.css';
import ProfileTopbar from "./commonComponents/ProfileTopbar";
import DashboardTopbar from "./commonComponents/DashboardTopbar";
import useInactivityTimeout from "../../hooks/useInactivityTimeout";

const Account = () => {

  const isInactive = useInactivityTimeout(600000); // 10 minutes

  let navigate = useNavigate();

  useEffect(() => {
    if (isInactive) {
      sessionStorage.removeItem("sessionid");
      navigate("/login");
    }
  }, [isInactive, navigate]);

  return (
    <div>
      <div className="wrapper">
        <Dheader/>
        <div className="main-content">
          <div className="top bg-white mt-0 p-2">
            <DashboardTopbar />
          </div>
          <div className="row">
            <ProfileTopbar />
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
              <div className="card pb-0 h-theme account-details border-0 shadow-lg">

                <h3 className=" mt-0 p-3 h-theme">Account Settings</h3>
                <div className="card-body p-5">
                <div className="space-y-4">
                  <TextInput
                    label="Bank Account Number"
                    value="XXXX XXXX XXXX 1234"
                    readOnly
                    rightSection={
                      <span className="text-green-500 text-sm">
                           <BsCheckLg className="text-success fs-2 fw-bold"/>
                      </span>
                    }
                  />
                  
                  <TextInput
                    label="IFSC Code"
                    value="HDFC0001234"
                    readOnly
                  />
                  
                  <TextInput
                    label="Bank Name"
                    value="HDFC Bank"
                    readOnly
                  />
                  
                  <TextInput
                    label="Company Address"
                    value="123, Business District, City - 400001"
                    readOnly
                    rightSection={
                      <span className="text-green-500 text-sm">

                       {/* <Text size="sm" c={userInfo.user_status === "Y" ? 'teal.6' : 'red.6'}>
                                                            { userInfo.user_status === "Y" ? <BsCheckLg className="text-success fs-2 fw-bold"/> : <ImCross className="text-danger fs-4 fw-bold "/>}
                                                            </Text>   */}
                        <BsCheckLg className="text-success fs-2 fw-bold"/>
                      </span>
                    }
                  />
                </div>
                  <form action="#">
                    <div className="mb-3">
                      <label className="form-label">Company Name</label>
                      <input type="text" className="form-control" placeholder="Arena Itech" />
                    </div>
                    <label className="form-label">GSTIN of Arena Itech</label>
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" />
                      <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                    </div>
                    <label className="form-label">Billing Address</label>
                    <div className="input-group mb-3">
                      <textarea type="text" className="form-control" placeholder="" rows="3"></textarea>
                      <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                    </div>
                  </form>	
                </div>
                {/* <hr></hr> */}
             {/* <h4 className="bg-transparent mt-0 p-3">Balance Settings</h4>
                    <div className="card-body p-3">
                        <form action="#">
                            <label className="form-label">Low Balance Alert Limit</label>
                                <div className="input-group mb-3  input-info">
                                    <span className="input-group-text border-0">₹</span>
                                    <input type="text" className="form-control"/>
                                    <span className="input-group-text border-0"><i className="fa fa-pencil"></i></span>
                                </div>
                            <label className="form-label text-secondary">(Configure webhook or email alert to receive notification)</label>
                        </form>	
                    </div>
                <hr></hr>
                <h4 className=" mt-0 px-3">Account-Level 2FA Settings</h4>
                    <div className="card-body p-3">
                        <form action="#">
                            <div className="row mb-3">
                                <div className="col-lg-8 col-8">
                                    <h6>2FA required</h6>
                                </div>

                            <div className="col-lg-4 col-4">
                                <input  type="checkbox" id="switch" /><label for="switch" className="toggle">Toggle</label>
                            </div>
                            </div>
                                    <a type="button" className="btn btn1 btn-outline-secondary virtual-btn mb-5"><i className="fa fa-info-circle mr-3"></i>How to setup 2FA</a>
                        </form>	
                </div> */}
              </div>
            </div>
          </div>
          <Dfooter/>   
        </div>
      </div>
    </div>
  );
};

export default Account;
