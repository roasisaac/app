import React from 'react'

const SignupForm: React.FC = () => {
    return (
        <div className='bg-white'>
            <form action="#">
                <div>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
            </form>
        </div>
    );
}

export default SignupForm;