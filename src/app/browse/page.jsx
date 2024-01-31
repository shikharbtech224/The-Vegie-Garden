'use client';
import React, { useState } from 'react'
import restaurantdata from '../restaurantdata';
import Link from 'next/link';

const Browse = () => {

  const [restroData, setRestroData] = useState(restaurantdata);

  const displayRestaurants = () => {
    return restroData.map((restro, index) => {
      return <div className='col-md-3'>
        <div className="card">
          <img src={restro.image} alt="" />
          <div className="card-body">
            <h3>{restro.name}</h3>
            <Link href={"/bookrestaurant/"+index} className='btn btn-primary'>Browse Menu</Link>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div>
      <div className="row">
        {displayRestaurants()}
      </div>
    </div>
  )
}

export default Browse;