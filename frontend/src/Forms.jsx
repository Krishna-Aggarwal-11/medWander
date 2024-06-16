import React, { useState, useEffect } from "react";
import { Label, Select, Button, TextInput, Alert } from "flowbite-react";
import { countriesData } from "./constant/data.js";
import { useLocation , Link } from "react-router-dom";

const Forms = () => {
  const location = useLocation();
  const [formType, setFormType] = useState("");
  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dailCode, setDailCode] = useState("");
  const [message , setMessage] = useState("");
  const [error , setError] = useState("");

  

  useEffect(() => {
     // fetching formtype from url 
     const urlParams = new URLSearchParams(location.search)
     const formType = urlParams.get('type')
 
     setFormType(formType)
  } , [location.form])

  useEffect(() => {
    // Load data from local storage if available
    const savedName = localStorage.getItem('name');
    const savedCountryCode = localStorage.getItem('countryCode');
    const savedPhoneNumber = localStorage.getItem('phoneNumber');

    if (savedName) setName(savedName);
    if (savedCountryCode) setCountryCode(savedCountryCode);
    if (savedPhoneNumber) setPhoneNumber(savedPhoneNumber);
  }, []);

  const handleSubmit = async(e) => {
    // fetching and saving data from server
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
            phoneNumber: dailCode + phoneNumber,
          }),
        });
      const data = await response.json();
      console.log(data)      
      if (response.ok) {

        setMessage('Form submitted successfully');
        // saving data in local storage
        localStorage.setItem('name',data.name)
        localStorage.setItem('countryCode',data.countryCode)
        localStorage.setItem('phoneNumber',data.phoneNumber)
        localStorage.setItem('formType',formType)
      }
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
              options={countriesData}
              value={countryCode}
              as ="div"
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
                setPhoneNumber(e.target.value)
              }}
            />
          </div>
          <Button
            gradientDuoTone={
              formType === "FormA" ? "purpleToBlue" : "purpleToPink"
            }
            type="submit"
            className="mt-4 mx-auto"
          >
            Submit
          </Button>
        </form>
        <div className="mt-4 flex flex-wrap gap-4 ">
          <Link to="/">
            <Button gradientDuoTone="pinkToOrange">Go Back</Button>
          </Link>
        </div>
      {error && <Alert color="failure" className="mt-4">{error}</Alert>}
      {message && <Alert color="success" className="mt-4">{message}</Alert>}
      </div>
    </div>
  );
};

export default Forms;
