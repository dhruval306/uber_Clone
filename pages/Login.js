import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { signInWithPopup, onAuthStateChanged } from "firebase/auth"
import { useRouter } from 'next/router'
import { auth, provider } from '../firebase'

const Login = () => {

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push("/")
            }
        })
    }, [])

  return (
  <Wrapper>
      <UberLogo src="https://i.ibb.co/ZMhy8ws/uber-logo.png" />
      <LoginMsg>
          Log In To Access Your Account
      </LoginMsg>
      <LoginImg src="https://i.ibb.co/CsV9RYZ/login-uber.png" />
      <LoginButton onClick={() => signInWithPopup(auth, provider)}>
          Sign In With Google
      </LoginButton>
  </Wrapper>
  )
}
const Wrapper = tw.div`h-screen p-4 w-screen flex flex-col bg-gray-200`
const UberLogo = tw.img`h-20 w-auto object-contain self-start`
const LoginMsg = tw.div`text-5xl text-gray-500 object-contain w-full pt-4 `
const LoginImg = tw.img`object-contain`
const LoginButton = tw.div`bg-black w-full cursor-pointer text-white text-center py-4 mt-8 self-center `
export default Login