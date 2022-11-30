import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Wrapper = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const FormContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "40%",
  justifyContent: "space-around",
  paddingTop: "20px",
  paddingBottom: "50px",
});

const SubmitButton = styled(Button)({
  borderRadius: "0px",
  fontFamily: "Roboto, sans-serif",
  boxShadow: "none",
  height: "45px",
});

const Title = styled("div")({
  fontFamily: "Bebas Neue, cursive",
  fontSize: "48px",
});

const Body = styled("div")({
  fontFamily: "Roboto, sans-serif",
  color: "#0F1020",
  fontWeight: "400",
  fontSize: "20px",
  width: "100%",
  textAlign: "center",
});

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [ccNo, setCCNo] = useState("");
  const [ccv, setCCV] = useState("");
  const [expDate, setExpDate] = useState("");

  const validForm = () => {
    return (
      email !== "" &&
      password != "" &&
      firstName != "" &&
      lastName != "" &&
      address != "" &&
      ccNo != "" &&
      ccv != "" &&
      expDate != ""
    );
  };

  const handleSubmit = () => {
    const data = {
      email,
      password,
      firstName,
      lastName,
      address,
      ccNo,
      ccv,
      expDate,
    };
    console.log(data);
    // Axios.post("http://localhost:3001/create-user", data).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <>
      <NavBar></NavBar>
      <Wrapper>
        <FormContainer>
          <Title>Register</Title>
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="Email"
            label="Email"
            variant="outlined"
          />
          <TextField
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="Password"
            label="Password"
            variant="outlined"
          />
          <TextField
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            id="First Name"
            label="First Name"
            variant="outlined"
          />
          <TextField
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            id="Last Name"
            label="Last Name"
            variant="outlined"
          />
          <TextField
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            id="Address"
            label="Address"
            variant="outlined"
          />
          <TextField
            value={ccNo}
            onChange={(event) => setCCNo(event.target.value)}
            id="Credit Card Number"
            label="Credit Card Number"
            variant="outlined"
          />
          <div style={{ display: "flex", gap: "10px" }}>
            <TextField
              value={ccv}
              onChange={(event) => setCCV(event.target.value)}
              id="CCV"
              label="CCV"
              variant="outlined"
              fullWidth
            />
            <TextField
              value={expDate}
              onChange={(event) => setExpDate(event.target.value)}
              id="Expiration Date"
              label="Expiration Date"
              variant="outlined"
              fullWidth
            />
          </div>
          <SubmitButton
            variant="contained"
            disabled={!validForm()}
            onClick={handleSubmit}
          >
            REGISTER
          </SubmitButton>
          <Body>NOTE: You will be charged $9.99 anually </Body>
        </FormContainer>
      </Wrapper>
    </>
  );
};

export default Register;