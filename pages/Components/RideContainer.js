import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import tw from "tailwind-styled-components";
import {carList}  from '../../Data/carList';

const RideContainer = ({PickUpCordinates,DropOffCordinates}) => {

  const [rideDuration, setrideDuration] = useState(0);
 

  useEffect(()=> {
   
      fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${PickUpCordinates[0]},${PickUpCordinates[1]};${DropOffCordinates[0]},${DropOffCordinates[1]}?access_token=pk.eyJ1IjoiZGhydXZhbC0zMDA2IiwiYSI6ImNsMXBlY3Z6NzFkNmIzZHJ6cTVkNHljMmgifQ.FbycyK5ekHiX7JxhKQdc8g`)
      .then(res => res.json())
      .then(data => {
        setrideDuration(data.routes[0].duration/100);
      })
  },[PickUpCordinates,DropOffCordinates])

  return (
    <Wrapper>
       <Header>Choose a ride, or Swipe up for more</Header>
       <CarsOption>
           {carList.map((car,index) => (
               <Cars key={index}>
                <CarImage src={car.imgUrl} />
                <CarDetails>
                    <Service>
                       {car.service}
                    </Service>
                    <Time>5 Mins Away</Time>
                </CarDetails>
                <Price>${(rideDuration  * car.multiplier).toFixed(2)}</Price>
            </Cars>
           ))}
            
       </CarsOption>

    </Wrapper>
  )
}
const Wrapper = tw.div`flex-1  border-b-4 `
const CarsOption = tw.div`p-3`
const Cars = tw.div`flex items-center transform hover:bg-gray-100 py-2`
const CarDetails = tw.div`flex-1 `
const Service = tw.div`font-medium`
const Time = tw.div`text-xs text-blue-500`
const Price = tw.div``
const CarImage = tw.img`h-14 mr-4`
const Header = tw.div`text-center border text-xs`

export default RideContainer