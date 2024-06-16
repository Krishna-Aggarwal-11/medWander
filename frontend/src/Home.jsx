import React , { useState } from 'react'
import { Button } from "flowbite-react";
import Forms from "./Forms";
import Img from "./assets/morpheusredblue.jpg";

const Home = () => {
    const [formType, setFormType] = useState("");
    const setForm = (formType) => {
    setFormType(formType);
  };
  return (
    <div className="">
      {!formType ? (
        <div className="flex flex-col items-center">
          <h2 className= "sm:text-3xl text-white my-8 ">Which Form will you choose ? 😈 </h2>
          <img src={Img} className="w-1/3"/>
          <div className="flex gap-2 flex-wrap justify-center my-8 items-center">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              onClick={() => setForm("Form A")}
            >
              Form A
            </Button>
            <Button
              gradientDuoTone="purpleToPink"
              outline
              onClick={() => setForm("Form B")}
            >
              Form B
            </Button>
          </div>
        </div>
      ) : (
        <Forms formType={formType} />
        
      )}
    </div>
  )
}

export default Home