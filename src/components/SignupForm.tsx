import React from 'react';
import Header from './Header';

const SignupForm: React.FC = () => {
    return (
        <>
            <Header />
            <div className='bg-white flex justify-center items-center min-h-screen w-full'>
                <form action="#" className='bg-gray-100 p-8 rounded-lg shadow-lg w-full max-w-md'>
                    <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
                    <div className='flex flex-col space-y-4'>
                        <input
                            type="text"
                            placeholder='Name'
                            className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'
                        />
                        <input
                            type="email"
                            placeholder='Email'
                            className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'
                        />
                        <input
                            type="password"
                            placeholder='Password'
                            className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400'
                        />
                    </div>
                    <button
                        type="submit"
                        className='w-full mt-6 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors'
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </>
    );
}

export default SignupForm;