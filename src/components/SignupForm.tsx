import React from 'react'
import Header from './Header';

const SignupForm: React.FC = () => {
    return (
        <>
            <Header />
            <div className='bg-white flex justify-center items-center min-h-screen w-full'>
                <form action="#">
                    <div className='bg-gray-300 w-full'>
                        <input type="text" placeholder='Name' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Email' />
                    </div>
                </form>
            </div>
        </>
    );
}

export default SignupForm;