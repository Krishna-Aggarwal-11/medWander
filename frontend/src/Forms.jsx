import React, { useState, useEffect } from "react";
import { Label, Select, Button, TextInput, Alert } from "flowbite-react";
import { countriesData } from "./constant/data.js";

const Forms = ({ formType }) => {
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dailCode, setDailCode] = useState("");
  const [phoneNumberwithCode, setPhoneNumberwithCode] = useState(""); 

  const [message , setMessage] = useState("");
  const [error , setError] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try  {
      const response = await fetch('http://localhost:3000/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType,
            name,
            countryCode,
            phoneNumber: phoneNumberwithCode,
          }),
        });
      const data = await response.json();
      setMessage('Form submitted successfully');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-3xl text-white mt-8 ">{formType}</h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label value="Your name" className="text-white" />
            </div>
            <TextInput
              id="username"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="countries"
                className="text-white"
                value="Select your country"
              />
            </div>
            <Select
              id="countries"
              required
              placeholder="Select your country"
              value={countryCode}
              onChange={(e) => {
                setCountryCode(e.target.value),
                  setDailCode(
                    countriesData.find(
                      (country) => country.code === e.target.value
                    ).dial_code
                  );
              }}
            >
              {countriesData.map((country) => (
                <option key={country.name} value={country.code}>
                  {country.name} | {country.code}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label value=" Phone number" className="text-white" />
            </div>
            <TextInput
              id="phoneNumber"
              required
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value),
                  setPhoneNumberwithCode(dailCode + e.target.value);
              }}
            />
          </div>
          <Button
            gradientDuoTone={
              formType === "Form A" ? "purpleToBlue" : "purpleToPink"
            }
            type="submit"
            className="mt-4 mx-auto"
          >
            Submit
          </Button>
        </form>
        <div className="mt-4 flex flex-wrap gap-4 ">
          <a href="/">
            <Button gradientDuoTone="pinkToOrange">Go Back</Button>
          </a>
          <Button
            gradientDuoTone={
              formType === "Form A" ? "purpleToPink" : "purpleToBlue"
            }
          >
            {formType === "Form A" ? "Form B" : "Form A"}
          </Button>
        </div>
      {error && <Alert color="failure" className="mt-4">{error}</Alert>}
      {message && <Alert color="success" className="mt-4">{message}</Alert>}
      </div>
    </div>
  );
};

export default Forms;
