import { useRouter } from 'next/router';
import React from 'react'
import { useEffect , useState } from 'react';
import tw from "tailwind-styled-components";
import Map from "../pages/Components/Map";
import Link from "next/link";
import RideContainer from './Components/RideContainer.js';

const Confirm = () => {
    const router = useRouter();
    const {pickup , Dropoff} = router.query;
    const [PickUpCordinates, setPickUpCordinates] = useState([0,0]);
    const [DropOffCordinates, setDropOffCordinates] = useState([0,0]);


    const GetCordinatesOfPickUp = () =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGhydXZhbC0zMDA2IiwiYSI6ImNsMXBlY3Z6NzFkNmIzZHJ6cTVkNHljMmgifQ.FbycyK5ekHiX7JxhKQdc8g",
                limit: 1
            })
        )
        .then(res => res.json())
        .then(data => {
            setPickUpCordinates(data.features[0].center);
        })
    }

    const GetCordinatesOfDropoff = () =>{
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${Dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZGhydXZhbC0zMDA2IiwiYSI6ImNsMXBlY3Z6NzFkNmIzZHJ6cTVkNHljMmgifQ.FbycyK5ekHiX7JxhKQdc8g",
                limit: 1
            })
        )
        .then(res => res.json())
        .then(datas => {
            setDropOffCordinates(datas.features[0].center);
        })
    }

    useEffect(() => {
        GetCordinatesOfPickUp();
        GetCordinatesOfDropoff();
    }, [])

  return (
    <Wrapper>
        <BackButtonContainer>
            <Link href='/Search'>
                <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
            </Link>
        </BackButtonContainer>
       <Map 
        PickUpCordinates = {PickUpCordinates}
        DropOffCordinates = {DropOffCordinates}
       />
       <BootomContainer>
            <RideContainer 
                PickUpCordinates = {PickUpCordinates}
                DropOffCordinates = {DropOffCordinates}
            />
            <ConfirmRide>
                Confirm UberX
            </ConfirmRide>
       </BootomContainer>
    </Wrapper>
  )
}
const Wrapper = tw.div`h-screen flex flex-col `
const BootomContainer = tw.div`flex-1 flex flex-col`
const ConfirmRide = tw.div`bg-black text-center text-white font-bold text-lg  py-1 m-4 transform hover:scale-95 transition`
const BackButtonContainer = tw.div`absolute z-10 bg-white rounded-full left-4 top-4 shadow-lg cursor-pointer`
const BackButton = tw.img`h-full object-contain w-10`
export default Confirm