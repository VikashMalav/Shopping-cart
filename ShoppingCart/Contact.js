import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Contact() {

  const {register, handleSubmit} = useForm()
  const [data, setData] = useState('')
  return (
    // <div className='user_div'>
    //     <h3>Contact Us</h3>
    //     <div className='user-data'>
    //         <input  className='' type='text' placeholder='Enter your Name'/>
    //         <input  className='' type='email' placeholder='Enter your Email '/>
    //         <input className='' type='Text' placeholder='Enter your Message '/>
    //          <button>Send Feedback</button>
    //     </div>
    //     </div>
    <div className='contact_page'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
       
        <div className='contact_data'>
          <input type='text'
            {...register('firstName', { required: true })}
            placeholder='Your Name' />
        </div>

        <div className='contact_data'>
          <input type='email'
            {...register('email', { required: true })}
            placeholder='Your Email' />
        </div>

        <div className='contact_data'>
          <input type='textarea'
           {...register('aboutYou', { required: true })}
            placeholder='Your Message' />
        </div>


        <p>{data}</p>
        <div className='contact_data'>
          <button type='submit'>Send</button>

        </div>
      </form>
    </div>

  )
}

export default Contact