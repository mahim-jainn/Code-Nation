import React from 'react'
import SignupImg from '../assets/signup.png'
import Template from '../Components/Template'

const Signup = ({setisLoggedIn}) => {
  return (
    <Template
    title="Join the millions learning to code with Code-Nation for free"
    desc1="Build skills for today, tomorrow and beyond"
    desc2="Education to future-proof your career"
    image={SignupImg}
    formtype="signup"
    setisLoggedIn={setisLoggedIn}
    />
  )
}

export default Signup;
