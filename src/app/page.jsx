"use client";
import React, { useEffect } from 'react';
import './file.css';

const Home = () => {
  return (
    <div className="page">
      <h1>
        <span style={{ color: "orange" }}>The</span>{" "}
        <span style={{ color: "orange" }}>Veggie</span>{" "}
        <span style={{ color: "orange" }}>Garden</span>{" "}</h1>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className=" cd col-md-4">
              <div className="mycontainer card shadow ">
                <div className=" card-body">
                  <p>
                    "Indulge your palate at our chic and vibrant restaurant, where culinary artistry meets a
                    warm and inviting ambiance. Explore a menu crafted with passion, featuring an array of
                    exquisite dishes that promise to elevate your dining experience. Join us for a memorable
                    journey of flavors and impeccable service in a stylish setting."{" "}
                  </p>

                  <button className='btn btn-success' type="submit">Click Here to browse Menu</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;