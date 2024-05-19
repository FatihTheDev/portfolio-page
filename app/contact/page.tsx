'use client'

import { useState } from 'react'

const ContactForm = () => {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        passagain: ""
    })

    const handleChange = (e: any) => {
      setData({
        ...data,
        [e.target.name]: e.target.value
      });
    }

    const formValid = () => {
      data.firstname.length > 2 && data.lastname.length > 2 && data.email.length > 2 && data.password.length > 0
    }
    

  return (
    <form method='POST'>
  <div className='mt-8 w-full text-center'>
  <h1 className="text-2xl text-blue-500 mb-10">Please fill in this form if you wish to contact me:</h1>
  
  <div className="names flex flex-col items-center mb-5">
    <div className="flex flex-col items-center mb-3">
      <label className="mb-2" htmlFor="firstname">Enter your first name:</label>
      <input name="firstname" onChange={handleChange} className='rounded-full border-2 border-blue-400 hover:border-blue-600 text-center mb-3' type="text" placeholder='Enter your first name' minLength={2} required />
    </div>
    <div className="flex flex-col items-center">
      <label className="mb-2" htmlFor="lastname">Enter your last name:</label>
      <input name='lastname' onChange={handleChange} className='rounded-full border-2 border-blue-400 hover:border-blue-600 text-center' type="text" placeholder='Enter your last name' minLength={2} required />
    </div>
  </div>
  
  <div className="email flex flex-col items-center mb-5">
    <label className="mb-2" htmlFor="email">Enter your email:</label>
    <input name='email' onChange={handleChange} className='rounded-full border-2 border-blue-400 hover:border-blue-600 text-center' type="email" placeholder='Enter your email' minLength={2} required />
  </div>
  
  <div className="passwords flex flex-col items-center">
    <div className="flex justify-center mb-3">
      <div className="mr-3 flex flex-col items-center">
        <label className="mb-2" htmlFor="password">Enter your password:</label>
        <input name='password' onChange={handleChange} className='rounded-full border-2 border-blue-400 hover:border-blue-600 text-center' type="password" placeholder='Enter your password' required />
      </div>
      <div className="flex flex-col items-center">
        <label className="mb-2" htmlFor="passagain">Repeat your password:</label>
        <input name='passagain' onChange={handleChange} className='rounded-full border-2 border-blue-400 hover:border-blue-600 text-center' type="password" placeholder='Repeat your password' required />      
      </div>
    </div>
    {(data.password !== "" && data.passagain !== "") && (data.password !== data.passagain) ? <p className="text-red-500">Passwords do not match</p> : null}
  </div>
<button type='submit' className='button rounded-full bg-blue-300 px-4 py-2 mt-3 border-4 border-blue-500 hover:scale-105' disabled={!formValid}>Contact Me</button></div>
</form>

  )
}

export default ContactForm
