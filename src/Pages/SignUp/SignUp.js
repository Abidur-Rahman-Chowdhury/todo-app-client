import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate, useNavigationType } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
     
    const handelSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
       
       
        
    }
    const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  if (user) {
    navigate(from, { replace: true });
    }
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <>
      <h2 className="text-center mt-20 text-3xl font-bold">Sign Up</h2>

      <div className="flex w-[500px] p-10 shadow-xl mx-auto bg-base-100 justify-center mt-20 mb-[500px]">
        <div className="card w-full bg-base-100 ">
          <form className='w-full h-full' onSubmit={handelSignUp}>
            <input type="name" required placeholder='Name' name="name" className='w-full h-[40px] my-5 px-4 border-2' />
            <input type="email" required placeholder='Email' name="email" className='w-full h-[40px] my-5 px-4 border-2' />
            <input type="password" required placeholder='Password' name="password" className='w-full h-[40px] my-5 px-4 border-2' />
            <p>Already have a account? <Link to='/login' className='link no-underline cursor-pointer text-primary'>Login</Link></p>
            <input type="submit"  value="Sign Up" className='w-full h-[40px] my-5 px-4 border-2 bg-purple-500 btn' />
          </form>
        </div>
      </div>
    </>
    );
};

export default SignUp;