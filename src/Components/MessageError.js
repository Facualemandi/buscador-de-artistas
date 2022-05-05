import React from 'react'
import '../Styles/MessageError.css'

const Message = ({msg}) => {

  return (
     <>
       <div className='mesageError'>
           <p>  {msg} </p>
       </div>
     </>
  )
}

export default Message