import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Img from "./assets/morpheusredblue.jpg";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      
      try {
        
      const res = await fetch("http://localhost:3000/form", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      setData(data);
       
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, []);

  const handleRefresh = async () => {
    window.location.reload();

    try {
      const response = await fetch("https://sheet.best/api/sheets/29b5d1a0-84c4-4794-914c-9314a6597562", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.map((d) => {
          return {
            formType: d.formType,
            name: d.name,
            countryCode: d.countryCode,
            phoneNumber: d.phoneNumber,
            id : d.id, 
            createdAt : d.createdAt,
            updatedAt : d.updatedAt
          };
        })
      ),
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="W-full">
      <div className="flex flex-col items-center">
        <h2 className="sm:text-3xl text-white mt-8 ">
          Which Form will you choose ? 😈{" "}
        </h2>
        <img src={Img} className="w-1/3" />
        <div className="flex gap-2 flex-wrap justify-center my-8 items-center">
          <Link to="/form?type=FormA">
            <Button gradientDuoTone="purpleToBlue" outline>
              Form A
            </Button>
          </Link>

          <Link to="/form?type=FormB">
            <Button gradientDuoTone="purpleToPink" outline>
              Form B
            </Button>
          </Link>
        </div>
      </div>

      {data && (
        <div className="w-full flex items-center justify-center flex-col">
          <div className="w-full flex flex-wrap justify-center gap-10 items-center ">
            <h2 className="text-white">Form Data </h2>
            <Button onClick={() => handleRefresh()}>Refresh</Button>
          </div>
          <iframe
            className="mt-10 w-1/2 h-1/2" 
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS5BYPkMhzNilBxaTrazgR--4tVwd2pSpp8fZkLV0ligUrp2LyvKaJpDRPHWBfD3CT4-Jp-WV0nLsIv/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Home;
