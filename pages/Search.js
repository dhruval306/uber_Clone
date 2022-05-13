import React from 'react'
import tw from "tailwind-styled-components";
import Link from "next/link";
import {useState} from "react"

const Search = () => {

  const [pickUp, setpickUp] = useState("");
   const [dropOff, setdropOff] = useState("");

  return (
    <Wrapper>
      <Link href='/'>
        <ButtonContainer>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </ButtonContainer>
      </Link>
      <InputContainer>
        <FromToContainer>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <Line src="https://img.icons8.com/ios-filled/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/ios-filled/50/9CA3AF/square.png" />
        </FromToContainer>
        <InputBoxes>
          <Input 
          placeholder="Enter Pickup Location"
          onChange={(e) => {setpickUp(e.target.value)}}
          value={pickUp} 
          />
          <Input 
          onChange={(e) => {setdropOff(e.target.value)}}
          value={dropOff} 
          placeholder="Where To?" />
        </InputBoxes>
        <PlusButton src='https://img.icons8.com/ios-filled/50/000000/plus.png' />
      </InputContainer>
      <Savedplaces >
        <StarIcon src='https://img.icons8.com/ios-filled/50/ffffff/star.png' />
        Saved Places
      </Savedplaces>
      <Link href={{
        pathname:"/Confirm",
        query: {
          pickup: pickUp,
          Dropoff: dropOff
        }
      }}>
        <ConfirmLocation >
          Confirm Location
        </ConfirmLocation>
      </Link>
    </Wrapper>
  )
}
const Wrapper = tw.div`
h-screen bg-gray-200
`
const ButtonContainer = tw.div`
bg-white px-4
`
const BackButton = tw.img`
h-10 
`
const InputContainer = tw.div`
bg-white flex items-center px-4
`
const FromToContainer = tw.div`
w-8 flex flex-col mr-3 items-center
`
const Circle = tw.img`
h-3
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`

const InputBoxes = tw.div`
flex flex-col flex-1
`
const Input = tw.input `
bg-gray-200 p-2 my-2 rounded outline-none h-8 border-none 
`
const PlusButton = tw.img`
w-10 h-10 rounded-full ml-3 
`
const Savedplaces = tw.div`
flex items-center bg-white px-4 py-1 my-3 font-semibold 
`
const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-1 rounded-full mr-2 
`
const ConfirmLocation = tw.div`
mx-4 p-2 bg-black text-white text-center font-semibold transform hover:scale-95 transition
`
export default Search