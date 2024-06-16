import React , { useState } from 'react'
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Img from "./assets/morpheusredblue.jpg";

const Home = () => {
    
 
  return (
    <div className="">
      
        <div className="flex flex-col items-center">
          <h2 className= "sm:text-3xl text-white my-8 ">Which Form will you choose ? 😈 </h2>
          <img src={Img} className="w-1/3"/>
          <div className="flex gap-2 flex-wrap justify-center my-8 items-center">
            <Link to="/form?type=FormA">
            <Button
              gradientDuoTone="purpleToBlue"
              outline
              onClick={() => setForm("Form A")}
              >
              Form A
            </Button>
              </Link>

            <Link to="/form?type=FormB">
            <Button
              gradientDuoTone="purpleToPink"
              outline
              onClick={() => setForm("Form B")}
              >
              Form B
            </Button>
            </Link>
          </div>
        </div>
      
    </div>
  )
}

export default Home