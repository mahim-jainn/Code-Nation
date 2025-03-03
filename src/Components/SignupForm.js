import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setisLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const[accType, setAccType] = useState("student");

    function changeHandler(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }))
    }

    function submitHandler(event){
        event.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }

        setisLoggedIn(true);
        toast.success("Account Created");

        const accData = {
            ...formData
        };

        const finalData={
            ...accData,
            accType
        }

        console.log("Printing Signup Data");
        console.log(finalData);
        navigate("/dashboard");
    }

    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accType==="student"?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} px-5 py-2 rounded-full transition-all duration-200`}
                onClick={()=>setAccType("student")}>
                    Student
                </button>
                <button className={`${accType==="instructor"?
                "bg-richblack-900 text-richblack-5":
                "bg-transparent text-richblack-200"} px-5 py-2 rounded-full transition-all duration-200`}
                onClick={()=>setAccType("instructor")}>
                    Instructor
                </button>
            </div>
            <form onSubmit={submitHandler}>
                {/* first name and last name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-300 mb-1 leading-[1.375rem]'>
                            First Name
                            <sup className='text-pink-200'>*</sup>
                            </p> 
                        <input
                            required
                            type='text'
                            name='firstname'
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>

                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-300 mb-1 leading-[1.375rem]'>
                            Last Name
                            <sup className='text-pink-200'>*</sup>
                            </p> 
                        <input
                            required
                            type='text'
                            name='lastname'
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />
                    </label>
                </div>

                {/* email address */}
                <div className='mt-[20px]'>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-300 mb-1 leading-[1.375rem]'>
                        Email address
                        <sup className='text-pink-200'>*</sup>
                        </p> 
                    <input
                        required
                        type='email'
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email}
                        className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                </label>
                </div>

                {/* create pass and confirm pass */}
                <div className='w-full flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-300 mb-1 leading-[1.375rem]'>
                            Create Password
                            <sup className='text-pink-200'>*</sup>
                            </p> 
                        <input
                            required
                            type={showPassword?("text"):("password")}
                            name='password'
                            onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.password}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={()=>setShowPassword( (prev)=> !prev)}>
                            {
                                showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                            }
                        </span>
                    </label>

                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-300 mb-1 leading-[1.375rem]'>
                            Confirm Password
                            <sup className='text-pink-200'>*</sup>
                            </p> 
                        <input
                            required
                            type={showCnfPassword?("text"):("password")}
                            name='confirmPassword'
                            onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmPassword}
                            className='bg-richblack-700 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                        />

                        <span className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={() => setShowCnfPassword( (prev)=> !prev)}>
                            {
                                showCnfPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>):
                                (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)
                            }
                        </span>
                    </label>
                </div>

                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
                    Create Account
                </button>

            </form>
        </div>
    )
}

export default SignupForm;
