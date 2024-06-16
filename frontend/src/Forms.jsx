import React, { useState , useEffect } from "react";
import { Label, Select , Button ,  TextInput  } from "flowbite-react";
import { countriesData } from "./constant/data.js";


const Forms = ({ formType }) => {

  const [name, setName] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dailCode , setDailCode] = useState("")
  const [phoneNumberwithCode , setPhoneNumberwithCode] = useState("")

  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, countryCode, phoneNumberwithCode });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="sm:text-3xl text-white mt-8 ">{formType}</h2>
        <form className=""  onSubmit={handleSubmit}>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label  value="Your name" className="text-white" />
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
              <Label htmlFor="countries"  className = "text-white" value="Select your country" />
            </div>
            <Select
              id="countries"
              required
              value={countryCode}
              onChange={(e) => {setCountryCode(e.target.value) , setDailCode(countriesData.find((country) => country.code === e.target.value).dial_code)}}
            >
              {countriesData.map((country ) => (
                <option key={country.name}  value={country.code}>
                  {country.name} |{" "}
                  {country.code} 
                </option>
              ))}
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label  value=" Phone number" className="text-white" />
            </div>
            <TextInput id="phoneNumber"  required  placeholder={dailCode} value={ phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value) , setPhoneNumberwithCode(dailCode + e.target.value)}}  />
          </div>
          <Button gradientDuoTone={formType === "Form A" ? "purpleToBlue" : "purpleToPink"} type="submit" className="mt-4 mx-auto">Submit</Button>
        </form>
        <div className="mt-4 flex flex-wrap gap-4 ">
        <a href="/"><Button gradientDuoTone="pinkToOrange">Go Back</Button></a>
        <Button gradientDuoTone={formType === "Form A" ? "purpleToPink" : "purpleToBlue"}>{formType=== "Form A" ? "Form B" : "Form A"}</Button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
