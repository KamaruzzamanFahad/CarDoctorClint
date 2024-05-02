import React, { useContext } from 'react';
import loginimage from '../assets/images/login/login.svg'
import fb from '../assets/images/login/fblogo.png'
import linkdin from '../assets/images/login/linkdin.png'
import google from '../assets/images/login/google.png'
import { AuthContext } from '../Provider/Authprovider';
const Login = () => {

    const {SignInByEmail} = useContext(AuthContext);

    const handlesubmit = (event)=>{
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const Password = from.Password.value;
        const logindata = {email,Password};
        console.log(logindata)
        SignInByEmail(email,Password)
        .then(data => {
            console.log(data)
        })
        .catch(eror => console.log(eror))

    }
    return (
         
        <div className='grid grid-cols-2 px-20 pb-10 gap-6 items-center'>
            <div>
                <img src={loginimage} alt="" />
            </div>

            <div>
                <div className=" border-[1px] p-10 py-10 border-[#0000002e] rounded-xl">
                    <div >
                        <h1 className='text-center mb-10'>Login</h1>
                        <div className=" w-full">

                            <form onSubmit={handlesubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='Password' type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btnfill">Sign In</button>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <p className='py-4'>Or Sign In with</p>
                                    <div className='flex items-center gap-3'>
                                        <img src={fb} alt="" className='w-7 h-9' />
                                        <img src={linkdin} alt="" className='h-12  w-10' />
                                        <img src={google} alt="" className='w-7 h-9' />
                                    </div>
                                    <p className='mt-7'>Have an account? <span className='text-[#FF3811]'>Sign In</span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;