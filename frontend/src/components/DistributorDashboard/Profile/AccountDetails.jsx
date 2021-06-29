import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import bankEmoji from "../../../resources/icons/bankEmoji.png";
import "./profile.css";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";

const AccountDetails = () => {
  const [accountNumber, setAccountNumber] = useState("204613925478");
  const [editAccountNumber, setEditAccountNumber] = useState(false);
  const [accountHolder, setAccountHolder] = useState("Muhammad Faizan");
  const [editAccountHolder, setEditAccountHolder] = useState(false);
  const [IFSC, setIFSC] = useState("SBIN000145");
  const [editIFSC, setEditIFSC] = useState(false);
  const [bank, setBank] = useState("State Bank Of India");
  const [editBank, setEditBank] = useState(false);
  const [address, setAddress] = useState(
    "mother colony maheshpura paschmi ward no. 21 lakshmi pur pattin road kashipur udham singh nagar uttarakhand"
  );
  const [editAddress, setEditAddress] = useState(false);

  return (
    <>
      <div className="user_info_box">
        <h1>Account Details</h1>

        <img
          src={bankEmoji}
          style={{ width: 160, height: 160, borderRadius: "100%" }}
        />
        <div className="profile_line"></div>

        <div className="profile_label_input">
          <label htmlFor="">Account Number</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              variant="outlined"
              disabled={!editAccountNumber}
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
              }}
            />
            {!editAccountNumber && (
              <div
                onClick={() => {
                  setEditAccountNumber(true);
                }}
                style={{
                  backgroundColor: "deepskyblue",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <EditIcon style={{ height: "100%" }} />
              </div>
            )}
            {editAccountNumber && (
              <div
                onClick={() => {
                  setEditAccountNumber(false);
                }}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <DoneIcon style={{ height: "100%" }} />
              </div>
            )}
          </div>
        </div>
        <div className="profile_label_input">
          <label htmlFor="">Account Holder</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              variant="outlined"
              disabled={!editAccountHolder}
              value={accountHolder}
              onChange={(e) => {
                setAccountHolder(e.target.value);
              }}
            />
            {!editAccountHolder && (
              <div
                onClick={() => {
                  setEditAccountHolder(true);
                }}
                style={{
                  backgroundColor: "deepskyblue",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <EditIcon style={{ height: "100%" }} />
              </div>
            )}
            {editAccountHolder && (
              <div
                onClick={() => {
                  setEditAccountHolder(false);
                }}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <DoneIcon style={{ height: "100%" }} />
              </div>
            )}
          </div>
        </div>

        <div className="profile_label_input">
          <label htmlFor="">IFSC Code</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              variant="outlined"
              disabled={!editIFSC}
              value={IFSC}
              onChange={(e) => {
                setIFSC(e.target.value);
              }}
            />
            {!editIFSC && (
              <div
                onClick={() => {
                  setEditIFSC(true);
                }}
                style={{
                  backgroundColor: "deepskyblue",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <EditIcon style={{ height: "100%" }} />
              </div>
            )}
            {editIFSC && (
              <div
                onClick={() => {
                  setEditIFSC(false);
                }}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <DoneIcon style={{ height: "100%" }} />
              </div>
            )}
          </div>
        </div>
        <div className="profile_label_input">
          <label htmlFor="">Bank Name</label>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "70%",
            }}
          >
            <TextField
              variant="outlined"
              disabled={!editBank}
              value={bank}
              onChange={(e) => {
                setBank(e.target.value);
              }}
            />
            {!editBank && (
              <div
                onClick={() => {
                  setEditBank(true);
                }}
                style={{
                  backgroundColor: "deepskyblue",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <EditIcon style={{ height: "100%" }} />
              </div>
            )}
            {editBank && (
              <div
                onClick={() => {
                  setEditBank(false);
                }}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  alignSelf: "stretch",
                  padding: "1px 10px",
                }}
              >
                <DoneIcon style={{ height: "100%" }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
