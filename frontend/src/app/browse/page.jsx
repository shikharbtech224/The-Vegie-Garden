'use client';
import React, { useState } from 'react'
import restaurantdata from '../restaurantdata';
import Link from 'next/link';
import './browse.css';

const Browse = () => {

  const [restroData, setRestroData] = useState(restaurantdata);

  const displayRestaurants = () => {
    return restroData.map((restro, index) => {
      return <div className='col-md-3'>
        <div className="card">
          <img className='dish-card' src={restro.image} alt="" />
          <div className="card-body">
            <h3>{restro.name}</h3>
            <h5>{restro.address}</h5>
            <Link href={"/bookrestaurant/"+index} className='btn btn-primary'>Browse Menu</Link>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div> <p className='mt-4 mb-5'> <h1 className='heading'>Choose your restaurant you wanna book!</h1> </p>
      <div className="row">
        {displayRestaurants()}
      </div>
      <div className="book">
        <form action="">
          
        </form>
      </div>
    </div>
  )
}

export default Browse;