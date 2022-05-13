import tw from "tailwind-styled-components";
import { useEffect, useState } from "react";
import mapboxGl from "!mapbox-gl";
import Map from "../pages/Components/Map";
import Link from "next/link";
import {auth} from "../firebase"
import {onAuthStateChanged, signOut} from "firebase/auth"
import { useRouter } from "next/router";

mapboxGl.accessToken = 'pk.eyJ1IjoiZGhydXZhbC0zMDA2IiwiYSI6ImNsMXBlY3Z6NzFkNmIzZHJ6cTVkNHljMmgifQ.FbycyK5ekHiX7JxhKQdc8g';
export default function Home() {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth,user =>{
     if(user){
        setUser({
          name: user.displayName,
          photo: user.photoURL
        })
      }else{
        router.push("Login")
      }
    })
  }, [])

  useEffect(() =>{
      const map = new mapboxGl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9 // starting zoom
  })
})
  return (
    <Wraper>
      <Map />
      <Modules>
       <Header>
         <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
         <Profile>
           <Name> {user && user.name}</Name>
           <UserImage src={user && user.photo} onClick={()=>signOut(auth)} />
         </Profile>
       </Header>
       <ModuleButtons>
         <Link href="/Search">
         <Button>
            <ButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
         </Button>
         </Link>
         <Link href="/Search">
          <Button>
            <ButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
         </Button>
         </Link>
          <Link href="/Search">
          <Button>
            <ButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
         </Button>
         </Link>
       </ModuleButtons>
       <InputButton>
          Where to?
       </InputButton>
      </Modules>
    </Wraper>
  )
}

const Wraper = tw.div`
flex flex-col h-screen
`
const Modules = tw.div`
flex-1 p-4
`
const Header = tw.div`
flex justify-between items-center
`
const UberLogo = tw.img`'
h-28
`
const Profile = tw.div`
flex items-center 
`
const UserImage = tw.img`'
h-12 w-12  rounded-full border border-gray-200 p-px
`
const Name = tw.div`
mr-4 w-25 text-sm
`
const ModuleButtons = tw.div`
 flex
`
const Button = tw.div`
 flex-1 flex flex-col bg-gray-200 m-2 items-center justify-center h-32 rounded-lg transform hover:scale-105 transition text-lg
`
const ButtonImage = tw.img`
h-3/5
`
const InputButton = tw.div`
h-20 bg-gray-200 h-15 text-2xl flex items-center mt-8 p-4
`
