'use client';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const Template = ({ children }) => {

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.min.js');
  }, [])


  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Template