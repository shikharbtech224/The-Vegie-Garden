'use client';
import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import restaurantdata from '@/app/restaurantdata';

const bookrestaurant = () => {
  const { index } = useParams();

  const [restaurantDetail, setRestaurantDetail] = useState(restaurantdata[index]);

  const displayDishes = () => {
    return restaurantDetail.dishes.map(dish => {
      return <div className='col-md-3'>
        <div className="card">
          <img src={dish.image} alt="" />
          <div className="card-body">
            <h3>{dish.name}</h3>
            <h5>{dish.price}</h5>
          </div>
        </div>
      </div>
    })
  }

  return (
    <div>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={restaurantDetail.image} className='w-100' alt="" />
            </div>
            <div className="col-md-8">
              <h1>
                {restaurantDetail.name}
              </h1>
              <h2>
                {restaurantDetail.address}
              </h2>
            </div>
          </div>
        </div>
      </header>
      <div className='row'>

        {displayDishes()}

      </div>
    </div>
  )
}

export default bookrestaurant;